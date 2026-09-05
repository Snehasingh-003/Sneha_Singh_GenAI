import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { AddBeneficiaryPage } from '../Pages/AddBeneficiaryPage';

import loginData from '../testdata/logindata.json';
// import beneficiaryData from '../testdata/beneficiarydata.json';

test('Add Beneficiary', async ({ page }) => {

    const lp = new LoginPage(page);
    const beneficiary = new AddBeneficiaryPage(page);
    // await lp.open();

    // await lp.login(
    //     loginData.login.Username,
    //     loginData.login.Password
    // );

    await beneficiary.addBeneficiary(
        loginData.beneficiary.name,
         loginData.beneficiary.accountNumber,
         loginData.beneficiary.bank
    );

});
