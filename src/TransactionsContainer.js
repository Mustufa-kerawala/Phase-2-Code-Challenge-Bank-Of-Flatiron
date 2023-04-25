import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";


function TransactionsContainer() {
    const [transactions, setTransactions] = useState([]);
    const [query, setQuery] = useState("");

    
    
    
    useEffect(() => {
        fetch(" http://localhost:3000/transactions" + query)
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }, [query]);


   

    return (
        <>
        
        <Search transactions={transactions} setQuery={setQuery} query={query} />


        <AddTransactionForm />

        <div className="table">
            
            <TransactionList transaction={transactions} />
            
        </div>
        
        </>

        
    );


}

export default TransactionsContainer;