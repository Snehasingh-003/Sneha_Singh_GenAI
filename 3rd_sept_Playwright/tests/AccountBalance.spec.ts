import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { AccountBalancePage } from '../Pages/AccountBalancePage';

import loginData from '../testdata/logindata.json';

test('Print Account Balance', async ({ page }) => {

    const lp = new LoginPage(page);
    const ab = new AccountBalancePage(page);

    await lp.open();

    await lp.login(
        loginData.login.Username,
        loginData.login.Password
    );

    await ab.printAccountBalance();
});