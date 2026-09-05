
import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import loginData from '../testdata/logindata.json';

// import { test, expect } from '@playwright/test';

test('Verify Dashboard', async ({ page }) => {

    await page.goto('https://playwrightpad.in/sandbox/banking');
    const lp = new LoginPage(page);
    await lp.open();
    await lp.login(loginData.login.Username,loginData.login.Password);

    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/.*banking.*/);
    await expect(page.getByRole('heading',{ name:'Welcome back, Apex User'}))
});