import React from "react";

function Search({ transactions }) {
    function handleSearch(e) {
        const filteredTransactions = transactions.filter((transaction) => transaction.description.includes(e.target.value));
        console.log(filteredTransactions);
        // console.log(e.target.value);
        // console.log(query);
        // return filteredTransactions;
        
    }
    
    return (
        <div className="searchTransactions">
            <input onChange={handleSearch} type="text" placeholder="Search Transactions" />
        </div>
    );
    }

export default Search;