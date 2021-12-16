import { Selector } from 'testcafe';

class DirectoryPage {
  constructor() {
    this.pageId = '#directory-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.wait(10000).expect(this.pageSelector.exists).ok();
  }

  /** Assets that the directory has at least 3 surf breaks already added */
  async hasBreak(testController) {
    const breaks = Selector('.ui.card').count;
    await testController.expect(breaks).gte(3);
  }
}

export const directoryPage = new DirectoryPage();
