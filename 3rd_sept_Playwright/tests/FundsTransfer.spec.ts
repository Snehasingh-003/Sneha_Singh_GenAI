import { test ,expect} from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { FundsTransferPage } from '../Pages/FundsTransferPage';

import loginData from '../testdata/logindata.json';

test('Fund Transfer', async ({ page }) => {

    const lp = new LoginPage(page);
    const fundTransfer = new FundsTransferPage(page);

    await lp.open();

    await lp.login(
        loginData.login.Username,
        loginData.login.Password
    );

    await fundTransfer.transferFunds(
        loginData.Funds['Transfer Type'],
        loginData.Funds['From Account'],
        loginData.Funds['To Account'],
        loginData.Funds['Transfer Amount']
    );
    
    // await fundTransfer.verifyTransferSuccess();
});