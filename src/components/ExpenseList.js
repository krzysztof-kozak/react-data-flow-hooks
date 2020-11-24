import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="wrapper">
      <h2>Koszty</h2>
      <ul className="list">
        {expenses.map((expense, index) => {
          const { name, amount, category } = expense;
          return (
            <li key={index} className="list__item red">
              {name}; {parseInt(amount, 10)} zł; {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
