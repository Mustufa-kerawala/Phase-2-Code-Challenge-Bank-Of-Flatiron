import React, { Component } from 'react';
import './index.css';
import TransactionList from './TransactionList';


class App extends Component {
  
 render() {
    return (
      <div className="App">

        <header className="App-header">   
          <h2>The Royal Bank of Flatiron</h2>
        </header>

        <div className='transaction-container'>
          {/* <TransactionList /> */}
        </div>
      </div>
    );
  }
  
  
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//        <h3>Transactions</h3>
       
        
//       </header>
//       <Transactions />
//     </div>
//   );
// }

export default App;
