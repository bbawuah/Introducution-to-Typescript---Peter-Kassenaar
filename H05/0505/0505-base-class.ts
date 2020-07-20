// 0505-base-class.ts

interface IAccountNumber{
	number : string;
	bankCode: string;
}
// 1. Base class definieren. Hier een algemeen type voor 'Bankrekening'.
// Dit om af te dwingen dat elk afgeleide bankrekeningnummer (bijvoorbeeld een Lening,
// een Hypotheek, Persoonlijk krediet, enzovoort) hetzelfde uiterlijk hanteert voor banknummer.
abstract class BankAccount {
	// private variables
	constructor(public accountNumber: IAccountNumber) {

	}
}

// 2. Afgeleide klasse. Hier specifiek voor lening
class Loan extends BankAccount {
	constructor(public amount: number, accountNumber: IAccountNumber) {
		super(accountNumber)
	}
}

// 3. Nog een afgeleide klasse. Hier specifiek voor een hypotheek. Beiden hebben ze een accountNumber
class Mortgage extends BankAccount {
	constructor(public amount: number, duration: number, accountNumber: IAccountNumber) {
		super(accountNumber);
	}
}

// Mijn algemene bankaccount maken, op basis van interface.
let myAccount:IAccountNumber = {
	bankCode: 'ABNA-NL',
	number: '00590012345'
};
// Lening afsluiten voor 10.000 euro
let myLoan = new Loan(10000, myAccount);
console.log(`Lening afgesloten voor ${myLoan.amount}, 
	voor account ${myLoan.accountNumber.number}, ${myLoan.accountNumber.bankCode}`);


// Wat zijn de typeringen?
// console.log(myLoan instanceof BankAccount);
// console.log(myLoan instanceof Loan);
// console.log(myLoan instanceof myMortgage);

