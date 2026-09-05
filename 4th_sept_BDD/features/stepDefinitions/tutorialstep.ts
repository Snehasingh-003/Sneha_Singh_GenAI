import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/LoginPage';
import { expect } from '@playwright/test';
import { TutorialPage } from '../../pages/Tutorialpage';


let tutorialPage: TutorialPage;

Given('the user is on the Student Registration page', async function () {
  // Write code here that turns the phrase above into concrete actions
  tutorialPage = new TutorialPage(this.page);
  await tutorialPage.openForm();
  console.log("user is on the Student Registration page");
});

When('the user enters name {string}', async function(string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterName(string);
  console.log("user entered name : " + string);
});

When('the user enters email {string}', async function (string) {
    await tutorialPage.enterEmail(string);
  console.log("user entered email : " + string);
});

When('the user selects gender {string}',async function (string) {
    await tutorialPage.selectGender(string);
 console.log("user selected gender : " + string)
});

When('the user enters mobile number {string}',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterMobile(string);
  console.log("user enterd mobile : " + string)
});

When('the user enters date of birth {string}', async function(string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterDob(string);
    console.log("user enterd dob : " + string)

});

When('the user enters subject {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterSubject(string);
  console.log("user enterd subject : " + string)
});

When('the user selects hobby {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.selectHobby(string);
  console.log("user selected hobby : " + string)
});

When('the user enters address {string}',async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterAddress(string);
  console.log("user entered address : " + string)
});

When('the user selects state {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.selectState(string);
  console.log("user selected state : " + string)
});

When('the user selects city {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.selectCity(string);
  console.log("user selected city : " + string)
});
When('the user clicks the Submit button', async function () {
  await tutorialPage.clickSubmit();
  console.log("user clicked submit button")
});
Then('the student registration should be completed successfully', function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("student registration completed successfully");
});

Then('validation messages should be displayed',function(){
    console.log("validation messages are displayed")
});












//negative  


When('the user registers with {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}', async function (string, string2, string3, string4, string5, string6, string7, string8, string9, string10) {
  // Write code here that turns the phrase above into concrete actions
  await tutorialPage.enterName(string);
  await tutorialPage.enterEmail(string2);
  await tutorialPage.selectGender(string3);
  await tutorialPage.enterMobile(string4);
  await tutorialPage.enterDob(string5);
  await tutorialPage.enterSubject(string6);
  await tutorialPage.selectHobby(string7);
  await tutorialPage.enterAddress(string8);
  await tutorialPage.selectState(string9);
  await tutorialPage.selectCity(string10);
});