import { Page } from "@playwright/test";

export class AddBeneficiaryPage {

    constructor(private page: Page) {}

    // Locators
    fundTransferTab = '#tab-transfers';

    addBeneficiaryBtn = '#add-beneficiary';   

    beneficiaryName = '#bene-name';

    accountNumber = '#bene-account';

    bankDropdown = '#bene-bank';

    saveBeneficiaryBtn = '#save-bene';

    // Actions
    async addBeneficiary(
        name: string,
        accountNo: string,
        bank: string
    ) {

        await this.page.click(this.fundTransferTab);

        await this.page.click(this.addBeneficiaryBtn);

        await this.page.fill(this.beneficiaryName, name);

        await this.page.fill(this.accountNumber, accountNo);

        await this.page.selectOption(this.bankDropdown, {
            label: bank
        });

        await this.page.click(this.saveBeneficiaryBtn);
    }
}