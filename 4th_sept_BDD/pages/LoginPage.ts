
import { expect, Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}
    
    // locators 
    private txtUser = '#user-name';
    private txtPass = '#password';
    private btnLogin ='#login-button';

async openApp() {
   await this.page.goto('https://www.saucedemo.com/');
   await this.page.waitForTimeout(2000);
}

async login() {
   console.log('Entering credentials');
   // Example
   await this.page.fill('input[name="user-name"]','standard_user');
   await this.page.fill("//input[@id='password']",'secret_sauce');
   await this.page.click('input[name="login-button"]');
}

async InvalidCredentialsMsg() {
   console.log('Entering invalid credentials');
   await this.page.fill('input[name="user-name"]','a');
   await this.page.fill("//input[@id='password']",'b');
   await this.page.click('input[name="login-button"]');
   await expect(this.page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
}

async InvalidCredential() {
    await this.page.fill(this.txtUser,'a');
    await this.page.fill(this.txtPass,'b');
    await this.page.click(this.btnLogin);
}

async loginwithmultipleusers(username: string, password : string){
    await this.page.fill(this.txtUser,username);
    await this.page.fill(this.txtPass,password);
    await this.page.click(this.btnLogin);

}

}

