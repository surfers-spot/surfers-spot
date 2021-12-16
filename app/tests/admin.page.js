import { Selector } from 'testcafe';

class AdminPages {

  /* Check that you can go to and edit a break */
  async goToEdit(testController) {
    await testController.click("#testing-edit");
    await testController.wait(10000).expect("#edit-break").ok();
  }

  /* Test if we can edit the sample break added earlier */
  async editBreak(testController, surfBreak) {
    await testController.typeText('#edit-form-name', surfBreak.name, { replace: true });
    await testController.typeText('#edit-form-location', surfBreak.location, { replace: true });
    await testController.typeText('#edit-form-image', surfBreak.image, { replace: true });
    const typeSelect = Selector('#edit-form-type');
    const diffSelect = Selector('#edit-form-difficulty');
    await testController.click(typeSelect)
      .click(typeSelect.find('option').withText(surfBreak.type));
    await testController.click(diffSelect())
      .click(diffSelect.find('option').withText(surfBreak.difficulty));
    await testController.typeText('#edit-form-description', surfBreak.description, { replace: true });
    await testController.click('#edit-form-submit');
    await testController.click('.swal-button.swal-button--confirm')
  }

  /* Check if test break was edited */
  async checkEdit(testController) {
    await testController.expect(Selector('#betterTesting-card').exists).ok();
  }

  /* Test if we can delete the sample break added earlier */
  async deleteBreak(testController) {
    await testController.click('#betterTesting-delete');
    await testController.click('.swal-button.swal-button--confirm.swal-button--danger');
    await testController.click('.swal-button.swal-button--confirm');
    await testController.expect(Selector('#betterTesting-card').exists).notOk();
  }
}

export const admin = new AdminPages();
