import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";


function TransactionsContainer() {
    const [transactions, setTransactions] = useState([]);
    const [query, setQuery] = useState([]);

    
    function handleSearch(e) {
        setQuery(query.filter((transactions) => transactions.description.includes(e.target.value)));
      }
    
    
    useEffect(() => {
        fetch(" http://localhost:3000/transactions" + query)
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }, [query]);


   

    return (
        <div className="table">
            <input type="text" placeholder="Search..." onChange={handleSearch} />
            <TransactionList transaction={transactions} />
            
        </div>
    );


}

export default TransactionsContainer;