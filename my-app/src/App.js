import logo from './logo.svg';
import './App.css';

function App() {

  let payments = [{ amount: 29.87 }, { amount: 29.87 }, { amount: 29.87 }, { amount: 29.87 }];

  const listOfPayments = payments.map((payment) => {
    return (<li >{payment.amount}</li>)
  })

  console.log(listOfPayments);

  // Create two drop downs with the first selecting the country.And the second drop down updating to show the cities of the first dropdown. 

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <div>
        <ul>
          {listOfPayments}
        </ul>
      </div>
    </div>
  );
}

export default App;
