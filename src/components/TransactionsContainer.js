import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";


function TransactionsContainer() {
    const [transactions, setTransactions] = useState([]);
    const [query, setQuery] = useState("");

    
    
    
    useEffect(() => {
        fetch(" http://localhost:3001/transactions")
            .then((response) => response.json())
            .then((data) => setTransactions(data));
    }, [query]);


    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(query.toLowerCase());
    }   
    );
   

    return (
        <>
        
        <Search setQuery={setQuery} query={query} />


        <AddTransactionForm />

        <div className="table">
            
            <TransactionList transaction={filteredTransactions} />
            
        </div>
        
        </>

        
    );


}

export default TransactionsContainer;