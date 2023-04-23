import React, { Component } from "react";

class Transactions extends Component {
    // Creating a constructor for the component
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
    }
   
    
    // Creating a getData function to fetch the data from the API
    getData() {
        fetch("http://localhost:3000/transactions")
        .then(response => response.json())
        .then( data => {
            this.setState({ transactions: data.data });
        });
    }
    
    // Creating a render function for rendering each transaction
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Date</th>
                            <th> Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.amount}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    // Calling the getData function after the component has mounted
    componentDidMount() {
        this.getData();
    }

    


}


export default Transactions;