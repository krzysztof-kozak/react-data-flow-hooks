import React from "react";

const IncomeList = ({ incomes }) => {
  return (
    <div className="wrapper">
      <h2>Przychody</h2>
      <ul className="list">
        {incomes.map((income, index) => {
          const { name, amount, category } = income;
          return (
            <li key={index} className="list__item green">
              {name}; {parseInt(amount, 10)} zł; {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncomeList;
