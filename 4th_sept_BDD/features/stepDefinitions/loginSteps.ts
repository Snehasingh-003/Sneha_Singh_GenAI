import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';
import { expect } from '@playwright/test';
// import {CustomWorld} from '../support/world';

let loginPage: LoginPage;

//successful login
Given('the user is on the login page', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.openApp();
});
When('the user enters valid username and password', async function () {
   await loginPage.login();
});
When('click the login button', function () {
    console.log("user clisked login successfully")
});
Then('the user should be redirected to the dashboard page', function () {
    console.log('User is redirected to the dashboard page');
});


//invalid login
When('the user enters invalid username and password', async function () {
     await loginPage.InvalidCredential();
});
Then('an error message should be displayed indicating invalid credentials', async function () {
  await loginPage.InvalidCredentialsMsg();
});


//multiple user - incorrect one
When('User enters {string} and {string}', async function (string1:string, string2:string) {
//   await loginPage.InvalidCredential();
     await loginPage.loginwithmultipleusers(string1,string2);
});


//multiple user - correct one
Then('user should login successfully', async function () {
//   console.log("multiple user credential are correct")
  await expect(this.page).toHaveURL(/inventory.html/);
    //  await loginPage.loginwithmultipleusers(string1,string2);
});

