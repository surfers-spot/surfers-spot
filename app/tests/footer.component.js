class Footer {
  async gotoRandomPage(testController) {
    await testController.click('#navbar-random-page');
  }

  async gotoPopularPage(testController) {
    await testController.click('#footer-popular-page');
  }

  async gotoAboutUsPage(testController) {
    await testController.click('#footer-AboutUs-page');
  }
}

export const footer = new Footer();
