import React from "react";
import Transaction from "./Transaction";


function TransactionList({ transaction }) {
    const transactionList = transaction.map((transaction) => (
        <Transaction
            key={transaction.id}
            date={transaction.date}
            description={transaction.description}
            category={transaction.category}
            amount={transaction.amount}
        />));


    return (
        
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>{transactionList}</tbody>
        </table>
    );
}

export default TransactionList;