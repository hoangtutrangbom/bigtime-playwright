import { Locator, Page, expect } from "@playwright/test";


export class EvaluationProcessPage {
    readonly page: Page;
    readonly evaluationProcessButton: Locator;
    readonly addButton: Locator;
    readonly employyeEvaluationInput: Locator;
    readonly employeeEvaluationOption: Locator;
    readonly evaluationTypeDropDown: Locator;
    readonly evaluationTypeOption1: Locator;
    readonly evaluationTypeOption2: Locator;
    readonly startTime: Locator;
    readonly endTime: Locator;
    readonly saveButton: Locator;
    readonly chosseButton: Locator;
    readonly toDay: Locator;
    readonly evaluationForm: Locator;
    readonly departmentForm: Locator;
    readonly cancelButton: Locator;
    readonly iconAction: Locator;
    readonly evaluationButton: Locator;
    readonly listEvaluationButton: Locator;
    readonly waitEvaluationStatus: Locator;



    constructor(page: Page) {
        this.page = page;

        this.waitEvaluationStatus = page.locator("//div[normalize-space()='Chờ đánh giá']");
        this.listEvaluationButton = page.locator("//div[@class='v-list-item-title'][contains(text(),'Danh sách đánh giá')]");
        this.evaluationButton = page.locator("//span[normalize-space()='Đánh giá']");
        this.iconAction = page.locator("//tr[@id='row-0']//i[@class='mdi mdi-format-list-group mdi v-icon notranslate v-theme--lightColor7 v-icon--size-default']");
        this.cancelButton = page.locator("//span[contains(normalize-space(),'Hủy')]");
        this.departmentForm = page.locator("//div[@role='option']//div[@class='v-list-item-title'][contains(text(),'Bộ phận')]");
        this.evaluationForm = page.locator("//div[@class='v-input v-input--horizontal v-input--center-affix v-input--density-compact v-theme--lightColor7 v-locale--is-ltr v-input--dirty v-text-field v-select v-select--single v-select--selected custom-select']//div[@class='v-field__input']");
        this.toDay = page.locator("//div[@class='dp__cell_inner dp__pointer dp__today dp__date_hover']");
        this.chosseButton = page.locator("//button[contains(text(),'Chọn')]");
        this.saveButton = page.locator("//button[normalize-space()='Lưu']");
        this.endTime = page.locator("//div[4]/div/div/div/div/div[1]/div/div/div[3]/input");
        this.startTime = page.locator("//div[3]/div/div/div/div/div[1]/div/div/div[3]/input");
        this.evaluationTypeOption1 = page.locator("//div[text()='Đánh giá chuyên cần']");
        this.evaluationTypeOption2 = page.locator("//div[text()='Đánh giá đạo đức']");
        this.evaluationTypeDropDown = page.locator("//div[2]/div/div[2]/div/div/div/div[3]/div/input");
        this.employeeEvaluationOption = page.locator("//div[@role='option']//div[@class='v-list-item-title']");
        this.employyeEvaluationInput = page.locator("//div[2]/div/div[1]/div/div[1]/div/div[3]/div/input");
        this.evaluationProcessButton = page.locator("//div[contains(text(),'Quy trình đánh giá')]");
        this.addButton = page.locator("//span[normalize-space()='Thêm']");
    }

    async getWaitEvaluationStatus() {
        await expect(this.waitEvaluationStatus).toBeVisible();
        const value = await this.waitEvaluationStatus.textContent();
        console.log("🔍 Value of the evaluation status is:", value);
        return value;
    }



    async clickListEvaluationButton() {
        await this.listEvaluationButton.click();
    }

    async clickEvaluationButton() {
        await this.evaluationButton.click();
    }

    async clickEvaluationTypeOption2() {
        await this.evaluationTypeOption2.click();
    }

    async clickIconAction() {
        await this.iconAction.click();
    }

    async clickEvaluationTypeOption1() {
        await this.evaluationTypeOption1.click();
    }

    async clickCancelButton() {
        await this.cancelButton.click();
    }

    async clickToDay() {
        await this.toDay.click();
    }

    async clickChosseButton() {
        await this.chosseButton.click();
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }
    async clickEndTime() {
        await this.endTime.click();
    }
    async clickStartTime() {
        await this.startTime.click();
    }

    async clickEvaluationForm() {
        await this.evaluationForm.click();
    }

    async clickDepartmentForm() {
        await this.departmentForm.click();
    }

    async clickEmployeeEvaluationOption() {
        await this.employeeEvaluationOption.click();
    }
    async clickEvaluationTypeDropDown() {
        await this.evaluationTypeDropDown.click();
    }

    async fillEmployeeEvaluationInput(Text: string) {
        await this.employyeEvaluationInput.fill(Text);
    }

    async clickEvaluationProcessButton() {
        await this.evaluationProcessButton.click();
    }

    async clickAddButton() {
        await this.addButton.click();
    }
}




