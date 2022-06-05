import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
