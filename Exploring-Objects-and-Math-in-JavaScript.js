function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

Account.prototype.deposit = function(amount) {
    if (typeof amount === 'number' && amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    } else {
        console.log('Deposit amount must be a positive number');
    }
};

Account.prototype.withdraw = function(amount) {
    if (typeof amount === 'number' && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
    } else if (amount > this.balance) {
        console.log('Insufficient funds.');
    } else {
        console.log('Withdrawal amount must be a positive number');
    }
};

Account.prototype.calculateInterest = function(rate, timesCompounded, years) {
    if (typeof rate === 'number' && typeof timesCompounded === 'number' && typeof years === 'number' && rate > 0 && timesCompounded > 0 && years > 0) {
        const principal = this.balance;
        const amount = principal * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
        const interest = amount - principal;
        return interest;
    } else {
        console.log('All parameters must be positive numbers');
        return NaN;
    }
};

// Example usage:
let myAccount = new Account(123456, 1000, 'John Doe');
myAccount.deposit(500);   
myAccount.withdraw(200);  
let interest = myAccount.calculateInterest(0.05, 12, 10);
console.log(`Compound interest for 10 years: ${interest.toFixed(2)}`);