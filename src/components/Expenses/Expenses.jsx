import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found</p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFiltered={filteredChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
