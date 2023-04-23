import React, { Component } from "react";

class Transactions extends Component {
    // Creating a constructor for the component
    constructor() {
        super();
        this.state = {
            transactions: []
        };
    }
   
    
    // Creating a getData function to fetch the data from the API
    getData() {
        fetch(" http://localhost:3000/transactions")
        .then(response => response.json())
        .then( data => {
            this.setState({ transactions: data });
        });
    }
    
    // Creating a render function for rendering each transaction
    render() {
        let transactions = this.state.transactions.map( transaction => {
            return (
                <tr key={transaction.id}>
                    <td>{transaction.posted_at}</td>
                    <td> {transaction.description} </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                </tr>
            );
        });

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
                <tbody>
                    {transactions}
                </tbody>
                
            </table>)

    }


}


export default Transactions;