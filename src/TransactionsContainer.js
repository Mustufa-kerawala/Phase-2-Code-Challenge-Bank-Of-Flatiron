import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";


function TransactionsContainer() {
    const [transactions, setTransactions] = useState([]);
    const [query, setQuery] = useState("");

    
    function handleSearch(e) {
        setQuery(e.target.value)
      }
    
    
    useEffect(() => {
        fetch(" http://localhost:3000/transactions" + query)
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    });

    return (
        <>
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <TransactionList transaction={transactions} />
            
        </>
    );


}

export default TransactionsContainer;