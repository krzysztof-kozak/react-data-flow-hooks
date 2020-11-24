import React, { useState } from "react";

import { ExpenseList, IncomeList, Form } from "./";

const defaultExpenseState = [
  { name: "Zakup materiałów", amount: 1000, category: "kategoria 1" },
  { name: "Księgowość", amount: 10000, category: "kategoria 2" },
  { name: "Transport", amount: 5000, category: "kategoria 3" }
];

const defaultIncomeState = [
  { name: "Zwrot podatku", amount: 5000, category: "kategoria 1" },
  { name: "Sprzedaż", amount: 10000, category: "kategoria 2" },
  { name: "Premia Q4", amount: 15000, category: "kategoria 3" }
];

const Budget = () => {
  const [expenses, setExpenses] = useState(defaultExpenseState);
  const [incomes, setIncomes] = useState(defaultIncomeState);

  const addIncome = (entry) => {
    setIncomes((prev) => [...prev, entry]);
  };

  const addExpense = (entry) => {
    setExpenses((prev) => [...prev, entry]);
  };

  const calculateBudget = () => {
    const expensesArray = [];
    const incomeArray = [];

    expenses.forEach((expense) =>
      expensesArray.push(parseInt(expense.amount, 10))
    );
    incomes.forEach((income) => incomeArray.push(parseInt(income.amount, 10)));

    const expenseSum = expensesArray.reduce((prev, curr) => prev + curr);
    const incomeSum = incomeArray.reduce((prev, curr) => prev + curr);

    const budget = incomeSum - expenseSum;

    return budget;
  };

  return (
    <>
      <h1>Kalkulator wydatków</h1>
      <p className="budget">
        Budżet:{" "}
        <span
          className={calculateBudget() > 0 ? "green" : "red"}
        >{`${calculateBudget()} zł`}</span>
      </p>
      <Form addIncome={addIncome} addExpense={addExpense} />
      <section className="listWrapper">
        <ExpenseList expenses={expenses} />
        <IncomeList incomes={incomes} />
      </section>
    </>
  );
};

export default Budget;
