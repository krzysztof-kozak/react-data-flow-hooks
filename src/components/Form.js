import React from "react";

import { useInput } from "../hooks";

const Form = ({ addIncome, addExpense }) => {
  const categories = ["kategoria 1", "kategoria 2", "kategoria 3"];

  const [type, setType] = useInput("Przychód");
  const [name, setName] = useInput("Transakcja 1");
  const [amount, setAmount] = useInput(1000);
  const [category, setCategory] = useInput(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "Przychód") {
      addIncome({ name: name, amount: amount, category: category });
    } else if (type === "Koszt") {
      addExpense({ name: name, amount: amount, category: category });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__entry">Dodaj wpis</h2>

        <div className="separator">
          <label className="form__label" htmlFor="income">
            Przychód
          </label>
          <input
            className="form__input"
            type="radio"
            name="type"
            id="income"
            defaultChecked
            onChange={setType}
            value="Przychód"
          />

          <label className="form__label" htmlFor="expense">
            Koszt
          </label>
          <input
            className="form__input"
            type="radio"
            name="type"
            id="expense"
            onChange={setType}
            value="Koszt"
          />
        </div>

        <div className="separator">
          <label className="form__label" htmlFor="name">
            Nazwa:
          </label>
          <input
            onChange={setName}
            className="form__input"
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>

        <div className="separator">
          <label className="form__label" htmlFor="amount">
            Kwota:
          </label>
          <input
            className="form__input"
            type="number"
            name="amount"
            id="amount"
            onChange={setAmount}
            value={amount}
          />
        </div>

        <div className="separator">
          <label className="form__label" htmlFor="entry-type">
            Kategoria:
          </label>

          <select
            className="form__select"
            name="category"
            id="category-type"
            onChange={setCategory}
            value={category}
          >
            <option value="">Wybierz kategorię...</option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <button className="form__button" type="submit">
            Dodaj
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
