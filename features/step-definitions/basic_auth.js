import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";
import axios from "axios";

import BasicAuthPage from "../pageobjects/basic_auth.page.js";

When(
  /^I use basic auth to login with (\w+) and (.+)$/,
  async (username, password) => {
    await BasicAuthPage.login(username, password);
  }
);

Then(/^I should see a paragraph saying (.+)$/, async (message) => {
  await expect(BasicAuthPage.message).toBeExisting();
  await expect(BasicAuthPage.message).toHaveTextContaining(message);
});

When(/^I API test basic auth with (.+) and (.+)$/, async (username, password) => {
  try {
    const response = await axios.get('https://the-internet.herokuapp.com/basic_auth', {
      auth: { username, password }
    });
    // Save response for later assertions if needed
    global.apiResponse = response;
  } catch (error) {
    // Save error response for later assertions
    global.apiResponse = error.response;
  }
});

Then(/^the API response should have status (\d+) and contain (.+)$/, async (statusCode, message) => {
  expect(global.apiResponse).toBeDefined();
  expect(global.apiResponse.status).toBe(Number(statusCode));
  // Case-insensitive, ignore whitespace
  expect(global.apiResponse.data.toLowerCase()).toContain(message.toLowerCase().trim());
});
