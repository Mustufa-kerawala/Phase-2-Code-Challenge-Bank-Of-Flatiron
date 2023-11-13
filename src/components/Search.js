import React from "react";

function Search({ setQuery }) {
    function handleSearch(e) {
        setQuery(e.target.value);
        
    }
    
    return (
        <div className="searchTransactions">
            <input onChange={handleSearch} type="text" placeholder="Search Transactions" />
        </div>
    );
    }

export default Search;