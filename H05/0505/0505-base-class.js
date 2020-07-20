// 0505-base-class.ts
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 1. Base class definieren. Hier een algemeen type voor 'Bankrekening'.
// Dit om af te dwingen dat elk afgeleide bankrekeningnummer (bijvoorbeeld een Lening,
// een Hypotheek, Persoonlijk krediet, enzovoort) hetzelfde uiterlijk hanteert voor banknummer.
var BankAccount = (function () {
    // private variables
    function BankAccount(accountNumber) {
        this.accountNumber = accountNumber;
    }
    return BankAccount;
}());
// 2. Afgeleide klasse. Hier specifiek voor lening
var Loan = (function (_super) {
    __extends(Loan, _super);
    function Loan(amount, accountNumber) {
        var _this = _super.call(this, accountNumber) || this;
        _this.amount = amount;
        return _this;
    }
    return Loan;
}(BankAccount));
// 3. Nog een afgeleide klasse. Hier specifiek voor een hypotheek. Beiden hebben ze een accountNumber
var Mortgage = (function (_super) {
    __extends(Mortgage, _super);
    function Mortgage(amount, duration, accountNumber) {
        var _this = _super.call(this, accountNumber) || this;
        _this.amount = amount;
        return _this;
    }
    return Mortgage;
}(BankAccount));
// Mijn algemene bankaccount maken, op basis van interface.
var myAccount = {
    bankCode: 'ABNA-NL',
    number: '00590012345'
};
// Lening afsluiten voor 10.000 euro
var myLoan = new Loan(10000, myAccount);
console.log("Lening afgesloten voor " + myLoan.amount + ", \n\tvoor account " + myLoan.accountNumber.number + ", " + myLoan.accountNumber.bankCode);
// Wat zijn de typeringen?
console.log(myLoan instanceof BankAccount);
console.log(myLoan instanceof Loan);
//# sourceMappingURL=0505-base-class.js.map