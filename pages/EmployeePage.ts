import { expect, Locator, Page } from '@playwright/test';

export class EmployeePage {
  readonly page: Page;
  readonly userButton: Locator;
  readonly addButton: Locator;
  readonly employeeName: Locator;
  readonly employeeCode: Locator;
  readonly email: Locator;
  readonly dropdownEmployeeType: Locator;
  readonly dropdownDepartment: Locator;
  readonly selectDepartment: Locator;
  readonly selectStaff: Locator;
  readonly setSalary: Locator;
  readonly fillSalary: Locator;
  readonly fillInsurance: Locator;
  readonly saveButton: Locator;
  readonly openAllowance: Locator;
  readonly addAllowance: Locator;
  readonly dropdownAllowance: Locator;
  readonly selectAllowance: Locator;
  readonly dropdownBranch: Locator;
  readonly selectBranch: Locator;
  readonly dropdownInfoMore: Locator;
  readonly dropdownPosition: Locator;
  readonly selectPosition: Locator;
  readonly dropdownRank: Locator;
  readonly selectRank: Locator;
  readonly citizenId: Locator;
  readonly citizenIdCardIssueDate: Locator;
  readonly chosseMonth: Locator;
  readonly selectMonth: Locator;
  readonly chosseYear: Locator;
  readonly selectYear: Locator;
  readonly selectDay: Locator;
  readonly chosseButton: Locator;
  readonly placeOfIssueOfIdentityCard: Locator;
  readonly bankName: Locator;
  readonly bankAccountNumber: Locator;
  readonly phoneNumber: Locator;
  readonly dateOfJoiningTheCompany: Locator;
  readonly toDay: Locator;
  readonly address: Locator;
  readonly note: Locator;
  readonly dateOfBirth: Locator;
  readonly row0: Locator;
  readonly selectMale: Locator;
  readonly addAllowanceTypeButton: Locator;
  readonly allowanceTypeName: Locator;
  readonly moneyAllowance: Locator;
  readonly confirm: Locator;
  readonly dropdownAllowance2: Locator;
  readonly deleteUser: Locator;
  readonly yesButton: Locator;
  readonly searchByCode: Locator;
  readonly searchByName: Locator;
  readonly searchButton: Locator;
  readonly clearSearch: Locator;
  readonly resultSearchByCode: Locator;
  readonly resultSearchByName: Locator;
  readonly editButton: Locator;
  readonly dropdownRoleName: Locator;
  readonly managementDepartmentRole: Locator;
  readonly cancelAdd: Locator;
  readonly emailError: Locator;
  readonly dailySalary: Locator;
  readonly dropdownSalaryType: Locator;
  readonly selectAdmin: Locator;
  readonly emailAddressExisted: Locator;
  readonly employeeCodeExisted: Locator;
  readonly validateEmployeeCode: Locator;
  readonly validateEmail: Locator;
  readonly validateEmployeeName: Locator;
  readonly validateRoleName: Locator;


  constructor(page: Page) {
    this.page = page;

    this.validateRoleName = page.locator("//div[contains(text(),'Nhập tên quyền')]");
    this.validateEmail = page.locator("//div[contains(text(),'Nhập email')]");
    this.validateEmployeeName = page.locator("//div[contains(text(),'Nhập tên nhân viên')]");
    this.validateEmployeeCode = page.locator("//div[contains(text(),'Nhập mã nhân viên')]");
    this.employeeCodeExisted = page.locator("//li[contains(text(),'Mã nhân viên đã tồn tại.')]");
    this.emailAddressExisted = page.locator("//li[contains(text(),'Địa chỉ email đã tồn tại.')]");
    this.dropdownSalaryType = page.locator("//div[@class='v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--variant-outlined v-theme--lightColor7 rounded-lg v-locale--is-ltr']//i[@class='mdi-menu-down mdi v-icon notranslate v-theme--lightColor7 v-icon--size-default v-select__menu-icon']");
    this.dailySalary = page.locator("//div[contains(text(),'Theo ngày')]");
    this.emailError = page.locator("//li[contains(text(),'Định dạng Địa chỉ email không hợp lệ.')]");
    this.cancelAdd = page.locator("//span[contains(normalize-space(),'Hủy')]");
    this.managementDepartmentRole = page.locator("//div[text()='Trưởng bộ phận']");
    this.dropdownRoleName = page.locator("//div[2]/div/div[2]/div/div[13]/div/div/div/div[3]/div/input");
    this.editButton = page.locator("//span[contains(text(),'Sửa')]");
    this.resultSearchByName = page.locator("//tr[@id='row-0']//span[contains(text(),'Nguyễn Văn Minh')]");
    this.resultSearchByCode = page.locator("//a[normalize-space()='BAT810']");
    this.clearSearch = page.locator("//span[normalize-space()='Xóa']");
    this.searchButton = page.locator("//span[contains(normalize-space(),'Tìm kiếm')]");
    this.searchByName = page.locator("//form/div/div[2]/div/div/div/div[3]/div/input");
    this.searchByCode = page.locator("//form/div/div[1]/div/div/div/div[3]/div/input");
    this.yesButton = page.locator("//span[normalize-space()='Có']");
    this.deleteUser = page.locator("//span[contains(text(),'Xóa')]");
    this.confirm = page.locator("//span[contains(.,'Xác nhận')]");
    this.moneyAllowance = page.locator("//form/div/div[3]/div/div/div[3]/div/div/div/div[3]/input");
    this.allowanceTypeName = page.locator("//form/div/div[3]/div/div/div[1]/div/div/div/div[3]/div/input");
    this.addAllowanceTypeButton = page.locator("//span[contains(normalize-space(),'+ Thêm loại phụ cấp')]");
    this.selectMale = page.locator("//input[@aria-label='Nam']");
    this.row0 = page.locator("//tr[@id='row-0']");
    this.dateOfBirth = page.locator("//div[2]/div/div/div/div[3]/div/div[2]/div/div[2]/div/div/div/div/div[1]/div/div/div[3]/input");
    this.note = page.locator("//div[3]/div/div[2]/div/div[5]/div/div/div/div[3]/div/input");
    this.address = page.locator("//div[3]/div/div[2]/div/div[4]/div/div/div/div[3]/div/input");
    this.toDay = page.locator("//div[@class='dp__cell_inner dp__pointer dp__today dp__date_hover']");
    this.dateOfJoiningTheCompany = page.locator("//div[2]/div/div[3]/div/div/div/div/div[1]/div/div/div[3]/input");
    this.phoneNumber = page.locator("//div[3]/div/div[2]/div/div[1]/div/div/div/div[3]/div/input");
    this.bankAccountNumber = page.locator("//div[2]/div/div[3]/div/div[5]/div/div/div/div[3]/div/input");
    this.bankName = page.locator("//div[2]/div/div[3]/div/div[4]/div/div/div/div[3]/div/input");
    this.placeOfIssueOfIdentityCard = page.locator("//div[2]/div/div[3]/div/div[3]/div/div/div/div[3]/div/input");
    this.selectRank = page.locator("//div[@class='v-list-item-title'][normalize-space()='QC']");
    this.chosseButton = page.locator("//button[contains(text(),'Chọn')]");
    this.selectDay = page.locator("//div[@class='dp__cell_inner dp__pointer dp__date_hover'][normalize-space()='8']");
    this.selectMonth = page.locator("//div[@class='dp__overlay_cell dp__overlay_cell_pad'][normalize-space()='Thg 8']");
    this.selectYear = page.locator("//div[@class='dp__overlay_cell dp__overlay_cell_pad'][normalize-space()='2014']");
    this.chosseYear = page.locator("//div[2]/div/div[1]/div/div[1]/div/button[2]");
    this.chosseMonth = page.locator("//div[2]/div/div[1]/div/div[1]/div/button[1]");
    this.citizenIdCardIssueDate = page.locator("//div[3]/div/div[2]/div/div/div/div/div[1]/div/div/div[3]/input");
    this.citizenId = page.locator("//div[2]/div/div[3]/div/div[1]/div/div/div/div[3]/div/input");
    this.dropdownRank = page.locator("//div[2]/div/div/div/div[1]/div/div[3]/div/div[2]/div/div/div/div[3]/div/input");
    this.selectPosition = page.locator("//div[@class='v-list-item-title'][normalize-space()='Nhân viên test']");
    this.dropdownPosition = page.locator("//div[1]/div/div[3]/div/div[1]/div/div/div/div[3]/div/input");
    this.dropdownInfoMore = page.locator("//i[@class='mdi-chevron-down mdi v-icon notranslate v-theme--lightColor7 v-icon--size-default']");
    this.selectBranch = page.locator("//div[text()='Biên Hòa']");
    this.dropdownBranch = page.locator("//div[3]/div/div[2]/div/div[2]/div/div[5]/div/div/div/div[3]/div/input");
    this.selectAllowance = page.locator("//div[contains(text(),'Phụ cấp tiền ăn')]");
    this.dropdownAllowance = page.locator("//tbody/tr/td[1]/div/div/div/div[3]/div");
    this.dropdownAllowance2 = page.locator("//div[@class='v-input v-input--horizontal v-input--center-affix v-input--density-compact v-theme--lightColor7 v-locale--is-ltr v-text-field v-select v-select--single v-select--selected']//i[@class='mdi-menu-down mdi v-icon notranslate v-theme--lightColor7 v-icon--size-default v-select__menu-icon']");
    this.addAllowance = page.locator("//span[contains(.,'+Thêm phụ cấp')]");
    this.openAllowance = page.locator("//input[@type='checkbox']");
    this.saveButton = page.locator("//span[contains(normalize-space(),'Lưu')]");
    this.fillInsurance = page.locator("//div[3]/div[3]/div/div/div/div/div/div/div[3]/input");
    this.fillSalary = page.locator("//div[3]/div/div/div[2]/div/div/div/div[3]/input");
    this.setSalary = page.locator("//span[contains(normalize-space(),'Thiết lập lương')]");
    this.selectDepartment = page.locator("//div[text()='Bộ phận Marketing']");
    this.dropdownDepartment = page.locator("//div[2]/div/div[10]/div/div/div/div[3]/div/input");
    this.selectStaff = page.locator("//div[@class='v-list-item-title'][normalize-space()='Staff']");
    this.selectAdmin = page.locator("//div[@class='v-list-item-title'][normalize-space()='Admin']");
    this.dropdownEmployeeType = page.locator("//div[2]/div/div[12]/div/div/div/div[3]/div/input");
    this.email = page.locator("//div[2]/div/div[4]/div/div[1]/div/div/div/div[3]/input");
    this.employeeName = page.locator("//div[2]/div/div[2]/div/div/div/div[3]/div/input");
    this.employeeCode = page.locator("//div[2]/div/div[2]/div/div[1]/div/div/div/div[3]/div/input");
    this.addButton = page.locator("//span[normalize-space()='Thêm']");
    this.userButton = page.locator("//div[contains(text(),'Nhân viên')]");
    
  }

  async validateRequiredFields() {
    const validations = [
        { locator: this.validateRoleName, expectedText: 'Nhập tên quyền' },
        { locator: this.validateEmail, expectedText: 'Nhập email' },
        { locator: this.validateEmployeeName, expectedText: 'Nhập tên nhân viên' },
        { locator: this.validateEmployeeCode, expectedText: 'Nhập mã nhân viên' },
    ];

    for (const { locator, expectedText } of validations) {
        await expect(locator).toBeVisible();
        await expect(locator).toHaveText(expectedText);
    }
}


  async verifyEmployeeCodeExisted() {
    await expect(this.employeeCodeExisted).toBeVisible();
    await expect(this.employeeCodeExisted).toHaveText("Mã nhân viên đã tồn tại.");

  }

  async verifyEmailExisted() {
    await expect(this.emailAddressExisted).toBeVisible();
    await expect(this.emailAddressExisted).toHaveText("Địa chỉ email đã tồn tại.");
  }

  async clickAdmin() {
    await this.selectAdmin.click();
  }

  async clickDropdownSalaryType() {
    await this.dropdownSalaryType.click();
  }

  async clickDailySalary() {
    await this.dailySalary.click();
  }

  async verifyEmailError() {
    await expect(this.emailError).toBeVisible();
    await expect(this.emailError).toHaveText("Định dạng Địa chỉ email không hợp lệ.");
  }

  async clickCancelAdd() {
    await this.cancelAdd.click();
  }

  async clickManagementDepartmentRole() {
    await this.managementDepartmentRole.click();
  }

  async clickDropdownRoleName() {
    await this.dropdownRoleName.click();
  }

  async clickEditButton() {
    await this.editButton.click();
  }

  async verifySearchByCode() {
    await expect(this.resultSearchByCode).toBeVisible();
    await expect(this.resultSearchByCode).toHaveText("BAT810");
  }

  async verifySearchByName() {
    await expect(this.resultSearchByName).toBeVisible();
    await expect(this.resultSearchByName).toHaveText("Nguyễn Văn Minh");
  }

  async clickClearSearch() {
    await this.clearSearch.click();
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async fillSearchByCode(code: string) {
    await this.searchByCode.fill(code);
  }

  async fillSearchByName(name: string) {
    await this.searchByName.fill(name);
  }

  async clickYesButton() {
    await this.yesButton.click();
  }

  async clickDeleteUser() {
    await this.deleteUser.click();
  }

  async clickDropdownAllowance2() {
    await this.dropdownAllowance2.click();
  }

  async clickConfirm() {
    await this.confirm.click();
  }

  async fillMoneyAllowance(money: string) {
    await this.moneyAllowance.fill(money);
  }

  async fillAllowanceTypeName(typeName: string) {
    await this.allowanceTypeName.fill(typeName);
  }

  async clickAddAllowanceTypeButton() {
    await this.addAllowanceTypeButton.click();
  }

  async clickSelectMale() {
    await this.selectMale.check();
  }

  async clickRow0() {
    await this.row0.click();
  }

  async clickDateOfBirth() {
    await this.dateOfBirth.click();
  }

  async fillNote(note: string) {
    await this.note.click();
    await this.note.fill(note);
  }

  async fillAddress(address: string) {
    await this.address.fill(address);
  }

  async clickToDay() {
    await this.toDay.click();
  }

  async clickDateOfJoiningTheCompany() {
    await this.dateOfJoiningTheCompany.click();
  }

  async fillPhoneNumber(phone: string) {
    await this.phoneNumber.fill(phone);
  }

  async fillBankAccountNumber(bankAccount: string) {
    await this.bankAccountNumber.fill(bankAccount);
  }

  async fillBankName(bank: string) {
    await this.bankName.fill(bank);
  }

  async fillPlaceOfIssueOfIdentityCard(place: string) {
    await this.placeOfIssueOfIdentityCard.fill(place);
  }

  async clickSelectRank() {
    await this.selectRank.click();
  }

  async clickChosseButton() {
    await this.chosseButton.click();
  }

  async clickSelectDay() {
    await this.selectDay.click();
  }

  async clickChosseYear() {
    await this.chosseYear.click();
  }
  async clickSelectYear() {
    await this.selectYear.click();
  }
  async clickChosseMonth() {
    await this.chosseMonth.click();
  }
  async clickSelectMonth() {
    await this.selectMonth.click();
  }
  async clickCitizenIdCardIssueDate() {
    await this.citizenIdCardIssueDate.click();
  }

  async fillCitizenId(date: number) {
    // Wait for element to be visible and enabled
    await this.citizenId.waitFor({ state: 'visible' });
    await this.citizenId.click();
    
    // Clear existing content first
    await this.citizenId.clear();
    
    // Fill the new value
    await this.citizenId.fill(date.toString());
    
  }

  async clickDropdownRank() {
    await this.dropdownRank.click();
  }

  async clickPosition() {
    await this.selectPosition.click();
  }

  async clickDropdownPosition() {
    await this.dropdownPosition.click();
  }

  async clickDropdownInfoMore() {
    await this.dropdownInfoMore.click();
  }

  async clickSelectBranch() {
    await this.selectBranch.click();
  }

  async clickDropdownBranch() {
    await this.dropdownBranch.click();
  }

  async clickSelectAllowance() {
    await this.selectAllowance.click();
  }

  async clickDropdownAllowance() {
    await this.dropdownAllowance.click();
  }

  async clickAddAllowance() {
    await this.addAllowance.click();
  }

  async clickOpenAllowance() {
    await this.openAllowance.nth(1).check(); 
  }

  async fillFillInsurance(insurance: string) {
    await this.fillInsurance.fill(insurance);
  }

  async clickSaveButton() {
    await this.saveButton.click();
  }

  async clickSetSalary() {
    await this.setSalary.click();
  }
  async fillFillSalary(salary: string) {
    await this.fillSalary.fill(salary);
  }
  async clickAddButton() {
    await this.addButton.click();
  }

  async fillEmail(email: string) {
    await this.email.fill(email);
  }

  async clickDropdownEmployeeType() {
    await this.dropdownEmployeeType.click();
  }

  async clickStaff() {
    await this.selectStaff.click();
  }

  async clickDropdownDepartment() {
    await this.dropdownDepartment.click();
  }

  async clickSelectDepartment() {
    await this.selectDepartment.click();
  }

  async fillEmployeeName(name: string) {
    await this.employeeName.clear();
    await this.employeeName.fill(name);
  }

  async fillEmployeeCode(code: string) {
    await this.employeeCode.fill(code);
  }

  async clickUser() {
    await this.userButton.click();
  }

}

