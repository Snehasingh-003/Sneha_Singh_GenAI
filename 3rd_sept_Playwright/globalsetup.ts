

import { chromium } from '@playwright/test';
import loginData from './testdata/logindata.json';

async function globalSetup() {

    console.log('Global Setup Started');

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://playwrightpad.in/sandbox/banking');

    await page.fill(
        'input[name="username"]',
        loginData.login.Username
    );

    await page.fill(
        'input[name="password"]',
        loginData.login.Password
    );

    await page.click('#login-btn');

    // Wait for successful login
    await page.waitForLoadState('networkidle');

    await page.context().storageState({
        path: 'auth.json'
    });

    await browser.close();

    console.log('Global Setup Completed');
}

export default globalSetup;
