import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addBreakPage } from './addbreak.page';
import { randomPage } from './random.page';
import { bowlsPage } from './bowls.page';
import { kewalosPage } from './kewalos.page';
import { canoesPage } from './canoes.page';
import { footer } from './footer.component';
import { aboutUsPage } from './aboutus.page';
import { directoryPage } from './directory.page';
import { admin } from './admin.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'johnsmith@gmail.com', password: 'aerhba' };
const adminCreds = { username: 'surfadmin@gmail.com', password: 'adminpass' };

/** Default break added to see if add, edit and delete works */
const defaultBreak = {
  name: 'testing',
  location: 'Nowhere',
  image: 'http://www.surfboardshack.com/images/breaks/canoes_02.jpg',
  type: 'Reef',
  difficulty: 'Easy',
  description: 'An imaginary reef. Perfect for testing.',
};

/** Break to edit the default break into */
const defaultBreakEdit = {
  name: 'betterTesting',
  location: 'Somewhere',
  image: 'https://www.surf-forecast.com/system/images/15181/large/Ala-Moana-Bowls.jpg?1450520565',
  type: 'Beach',
  difficulty: 'Hard',
  description: 'An imaginary reef. Perfect for testing. Now better than before',
};

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000/');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that the directory page shows up and works', async (testController) => {
  await navBar.gotoDirectoryPage(testController);
  await directoryPage.isDisplayed(testController);
  await directoryPage.hasBreak(testController);
});

test
  .page('http://localhost:3000/#/random')('Test that Random page shows up', async (testController) => {
    await randomPage.isDisplayed(testController);
  });

test('Test that add-break works', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, adminCreds.username, adminCreds.password);
  await navBar.isLoggedIn(testController, adminCreds.username);
  await navBar.gotoAddBreakPage(testController);
  await addBreakPage.addBreak(testController, defaultBreak);
  await navBar.gotoDirectoryPage(testController);
  await addBreakPage.checkAdded(testController);
});

test('Test random page button works', async (testController) => {
  await navBar.gotoRandomPage(testController);
  await randomPage.isDisplayed(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test random page footer link works', async (testController) => {
  await footer.gotoRandomPage(testController);
  await randomPage.isDisplayed(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test popular page button works', async (testController) => {
  await navBar.gotoPopularPage(testController);
  await bowlsPage.isDisplayed(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test popular page footer link works', async (testController) => {
  await footer.gotoPopularPage(testController);
  await bowlsPage.isDisplayed(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test AboutUs page footer link works', async (testController) => {
  await footer.gotoAboutUsPage(testController);
  await aboutUsPage.isDisplayed(testController);
  await navBar.gotoLandingPage(testController);
  await landingPage.isDisplayed(testController);
});

test
  .page('http://localhost:3000/#/view/Kewalos')('Test that Kewalos page shows up', async (testController) => {
    await kewalosPage.isDisplayed(testController);
  });

test
  .page('http://localhost:3000/#/view/Bowls')('Test that Bowls page shows up', async (testController) => {
    await bowlsPage.isDisplayed(testController);
  });

test
  .page('http://localhost:3000/#/view/Canoes')('Test that Canoes page shows up', async (testController) => {
    await canoesPage.isDisplayed(testController);
  });

test('Test that admin features work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, adminCreds.username, adminCreds.password);
  await navBar.isLoggedIn(testController, adminCreds.username);
  await navBar.gotoDirectoryPage(testController);
  await admin.goToEdit(testController);
  await admin.editBreak(testController, defaultBreakEdit);
  await navBar.gotoDirectoryPage(testController);
  await admin.checkEdit(testController);
  await admin.deleteBreak(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
