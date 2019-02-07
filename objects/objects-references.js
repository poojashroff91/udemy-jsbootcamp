let myAccount = {
    name: 'Pooja Shroff',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses += amount;
    // account = {} // breaks binding and now the myAccount object does not change.
}

let addIncome = function(account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    console.log(`Account of ${account.name} has balance $${balance}. Account income: $${account.income}. Account expense: $${account.expenses}`);
}


addIncome(myAccount, 2000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 160)
getAccountSummary(myAccount);
resetAccount(myAccount);
getAccountSummary(myAccount);