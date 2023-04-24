import React from 'react';
import './index.css';
import TransactionsContainer from './TransactionsContainer';



// class App extends Component {
  
//  render() {
//     return (
//       <div className="App">

//         <header className="App-header">   
//           <h2>The Royal Bank of Flatiron</h2>
//         </header>

//         <div className='transaction-container'>
//           {/* <TransactionList /> */}
//           <TransactionList />
          
//         </div>
//       </div>
//     );
//   }
  
  
// }



function App() {
  return (
    <div className="App">
      <header className="App-header">
           
      <h2>The Royal Bank of Flatiron</h2>
        
      </header>

      <TransactionsContainer />
    </div>
  );
}

export default App;
