class CheckboxesPage {
  get elements() {
    return {
      header: () => $("h3"),
      checkbox: (num) => $(`#checkboxes input:nth-of-type(${num})`),
    };
  }

  async select(num) {
    const checkbox = await this.elements.checkbox(num);
    const isChecked = await checkbox.isSelected();
    
    // Checkbox 1 starts unchecked, so after click it should be checked
    // Checkbox 2 starts checked, so it doesnt meet the condition and stays checked
    if (!isChecked) {
      await checkbox.click();
    }
  }
}

export default new CheckboxesPage();
