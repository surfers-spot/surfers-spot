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

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

/** Default break to add to see if add break form works */
const defaultBreak = {
  name: 'Canoes TEMP',
  location: 'Kuhio Beach Park TEMP',
  image: 'http://www.surfboardshack.com/images/breaks/canoes_02.jpg',
  type: 'Reef',
  difficulty: 'Easy',
  description: 'TEMP A great spot for beginners! Be warned this spot gets crazy busy, but for newcomers the low swells and lack of reef hazards are a welcome invitation. Do be careful of the occasional ' +
    'rock reef poking out the sand. Park by the Honolulu Zoo or any smaller side street by the beach. Easiest entry is by paddling out from the beach. Nearby board rentals make it an easy pick for new beginners and visiting families.',
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

test
  .page('http://localhost:3000/#/random,')('Test that Random page shows up', async (testController) => {
    await randomPage.isDisplayed(testController);
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
  .page('http://localhost:3000/#/kewalos')('Test that Kewalos page shows up', async (testController) => {
    await kewalosPage.isDisplayed(testController);
  });

test
  .page('http://localhost:3000/#/bowls')('Test that Bowls page shows up', async (testController) => {
    await bowlsPage.isDisplayed(testController);
  });

test
  .page('http://localhost:3000/#/canoes')('Test that Canoes page shows up', async (testController) => {
    await canoesPage.isDisplayed(testController);
  });

test
  .page('http://localhost:3000/#/addBreak')('Test that Add Break form works', async (testController) => {
    await addBreakPage.addBreak(testController, defaultBreak);
  });
