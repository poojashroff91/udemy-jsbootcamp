const account = {
    name: 'Pooja Shroff',
    expenses: [],
    incomes: [],
    addExpense : function (desc, amount) {
        this.expenses.push({
            description: desc,
            amount: amount
        });
    },
    addIncome : function (desc, amount) {
        this.incomes.push({
            description: desc,
            amount: amount
        });
    },
    getAccountSummary : function () {
        let expenseTotal = 0;
        let incomeTotal = 0;
        this.expenses.forEach( function (expense) {
            expenseTotal += expense.amount;
        });
        this.incomes.forEach( function (income) {
            incomeTotal += income.amount;
        });
        return `${this.name} has a balance of $${incomeTotal-expenseTotal}. $${expenseTotal} in expenses. $${incomeTotal} in income.`;
    
    }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Salary', 2000);
account.addIncome('Sell painting', 50);

console.log(account.getAccountSummary());