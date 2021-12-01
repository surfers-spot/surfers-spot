import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addBreakPage } from './addbreak.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

/** Default break to add to see if add break form works */
const defaultBreak = {
  "name": "Canoes TEMP",
  "location": "Kuhio Beach Park TEMP",
  "image": "http://www.surfboardshack.com/images/breaks/canoes_02.jpg",
  "type": "Reef",
  "difficulty": "Easy",
  "description": "TEMP A great spot for beginners! Be warned this spot gets crazy busy, but for newcomers the low swells and lack of reef hazards are a welcome invitation. Do be careful of the occasional rock reef poking out the sand. Park by the Honolulu Zoo or any smaller side street by the beach. Easiest entry is by paddling out from the beach. Nearby board rentals make it an easy pick for new beginners and visiting families."
};

fixture('meteor-application-template-react localhost test with default db')
     .page('http://localhost:3000/');

test.skip('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test.skip('Test that signin and signout work', async (testController) => {
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test
  .page('http://localhost:3000/\#/addBreak')
  ('Test that Add Break form works', async (testController) => {
    await addBreakPage.addBreak(testController, defaultBreak);
});
