
import { Page ,expect} from "@playwright/test";

export class FundsTransferPage {

    constructor(private page: Page) {}

    // Locators
    fundTransferTab = '#tab-transfers';
    selectTransferType = '#transfer-type';
    selectFromAcc = '#from-acc';
    selectToAcc = '#to-acc';
    transferAmount = '#transfer-amount';
    transferBtn = '#btn-transfer'; // update locator if different
    // successMessage = '.transfer-success-msg'

    // Actions
    async transferFunds( transferType: string,fromAccount: string,toAccount: string,amount: string) {

        await this.page.click(this.fundTransferTab);
        await this.page.selectOption(this.selectTransferType,{
            label:transferType
        });

        await this.page.selectOption(
            this.selectFromAcc,
            { label: fromAccount }
        );

        await this.page.selectOption(
            this.selectToAcc,
            { label: toAccount }
        );

        await this.page.fill(
            this.transferAmount,
            amount
        );

        

    }

//     async verifyTransferSuccess() {
//        await expect(this.page.locator(this.successMessage)).toBeVisible();
//     //    await console.log(this.page.locator(this.successMessage).textContent());

// }
}