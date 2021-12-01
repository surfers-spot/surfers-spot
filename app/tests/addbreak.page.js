import { Selector } from 'testcafe';

class AddBreakPage {
  constructor() {
    this.pageId = '#addbreak-page';
    this.pageSelector = Selector(this.pageId);
  }

  async isDisplayed(testController) {
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  async addBreak(testController, surfBreak) {
    await this.isDisplayed(testController);
    await testController.typeText('#break-form-name', surfBreak.name);
    await testController.typeText('#break-form-location', surfBreak.location);
    await testController.typeText('#break-form-image', surfBreak.image);
    const typeSelect = Selector('#break-form-type');
    const diffSelect = Selector('#break-form-difficulty');
    await testController.click(typeSelect)
      .click(typeSelect.find('option').withText(surfBreak.type));
    await testController.click(diffSelect())
      .click(diffSelect.find('option').withText(surfBreak.difficulty));
    await testController.typeText('#break-form-description', surfBreak.description);
    await testController.click('#break-form-submit');
  }
}

export const addBreakPage = new AddBreakPage();
