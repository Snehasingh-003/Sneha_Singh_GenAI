import { Page } from "@playwright/test";

export class AccountBalancePage {

    constructor(private page: Page) {}

    // Locator
    totalNetWorth = '.net-worth-val';

    async printAccountBalance() {
        const balance = await this.page.locator(this.totalNetWorth).textContent();
        console.log('Account Balance:', balance);
    }
}