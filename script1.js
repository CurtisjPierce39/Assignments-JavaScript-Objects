class Account {
    constructor(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
    }

    deposit(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
    }
    }

    withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount} from account ${this.accountNumber}. New balance: ${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Invalid withdrawal amount. Please enter a positive value.");
    }
    }
}

function calculateCompoundInterest(principal, rate, time, compoundingFrequency) {
    const decimalRate = rate / 100;
    const amount = principal * Math.pow((1 + decimalRate / compoundingFrequency), (compoundingFrequency * time));
    return amount;
}

const principal = 1000; // Initial balance
const interestRate = 5; // Annual interest rate (%)
const time = 2; // Number of years
const compoundingFrequency = 12; // 12 for monthly compounding

const totalAmount = calculateCompoundInterest(principal, interestRate, time, compoundingFrequency);

const myAccount = new Account("123456", 1000, "Curtis Pierce");
myAccount.deposit(1500);
myAccount.withdraw(200);
myAccount.withdraw(2500); // This will trigger the "Insufficient funds" message
console.log("Total amount after compound interest:", totalAmount);
