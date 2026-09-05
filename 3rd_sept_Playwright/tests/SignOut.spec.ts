import { test } from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';
import { SignOutPage } from '../Pages/SignOutPage';

import testData from '../testdata/logindata.json';

test('Sign Out', async ({ page }) => {

    const lp = new LoginPage(page);
    const signOut = new SignOutPage(page);

    await lp.open();

    await lp.login(
        testData.login.Username,
        testData.login.Password
    );

    await signOut.signOut();

    // await signOut.verifyLogout();

});