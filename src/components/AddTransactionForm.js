import React, { useState } from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(date, description, category, amount);
    fetch("http://localhost:3001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    });
    console.log("Transaction added!");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="inputs">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;