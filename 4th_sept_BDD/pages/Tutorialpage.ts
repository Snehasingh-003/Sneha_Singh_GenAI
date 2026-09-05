import { expect, Page } from '@playwright/test';

export class TutorialPage {

    constructor(private page: Page) {}

    // Locators
    private txtName = '#name';
    private txtEmail = '#email';
    private txtMobile = '#mobile';
    private txtDob = '#dob';
    private txtSubjects = '#subjects';
    private txtAddress = 'textarea';

    // private maleRadio = 'input[value="male"]';
    private maleRadio = ' //input[@id="gender"]';

    private femaleRadio = "body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)";
    private otherRadio = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)';

    private sportCheckbox = '//input[@id="hobbies"]';
    private readingCheckbox = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
    private musicCheckbox = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > input:nth-child(1)';

    private drpState = '#state';
    private drpCity = '#city';

    private btnSubmit = '//input[@value="Login"]';

    async openForm() {
        await this.page.goto(
            'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php'
        );
        await this.page.waitForTimeout(4000);
    }

    async enterName(name: string) {
        await this.page.fill(this.txtName, name);
    }

    async enterEmail(email: string) {
        await this.page.fill(this.txtEmail, email);
    }

    async selectGender(gender: string) {

        if (gender === 'Male') {
            await this.page.check(this.maleRadio);
        }

        if (gender === 'Female') {
            await this.page.check(this.femaleRadio);
        }

        if (gender === 'Other') {
            await this.page.check(this.otherRadio);
        }
    }

    async enterMobile(mobile: string) {
        await this.page.fill(this.txtMobile, mobile);
    }

    async enterDob(dob: string) {
        await this.page.fill(this.txtDob, dob);
    }

    async enterSubject(subject: string) {
        await this.page.fill(this.txtSubjects, subject);
    }

    async selectHobby(hobby: string) {

        if (hobby === 'Sports') {
            await this.page.check(this.sportCheckbox);
        }

        if (hobby === 'Reading') {
            await this.page.check(this.readingCheckbox);
        }

        if (hobby === 'Music') {
            await this.page.check(this.musicCheckbox);
        }
    }

    async enterAddress(address: string) {
        await this.page.fill(this.txtAddress, address);
    }

    async selectState(state: string) {
        await this.page.selectOption(this.drpState, state);
    }

    async selectCity(city: string) {
        await this.page.selectOption(this.drpCity, city);
        await this.page.waitForTimeout(2000);
    }
    
    async clickSubmit() {
        await this.page.click(this.btnSubmit);
    }

    async verifyRegistrationSuccess() {
        await expect(this.page).toHaveURL(/practice/);
    }

    async verifyValidationMessages() {
        await expect(
            this.page.locator('input:invalid').first()
        ).toBeVisible();
        console.log(this.page.locator('input:invalid').first().textContent());
    }

    async leaveNameBlank() {
        await this.page.fill(this.txtName, '');
    }

    async leaveEmailBlank() {
        await this.page.fill(this.txtEmail, '');
    }
}