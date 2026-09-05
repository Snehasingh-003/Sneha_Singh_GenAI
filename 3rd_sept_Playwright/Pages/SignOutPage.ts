import { Page, expect } from "@playwright/test";

export class SignOutPage {

    constructor(private page: Page) {}

    // Locators
    signOutBtn = "button[class='btn-unique']";

    async signOut() {

        await this.page.click(this.signOutBtn);
    }
}