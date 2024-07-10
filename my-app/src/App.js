import logo from './logo.svg';
import './App.css';
import TimerAndClicks from './TimerAndClicks';

import { useState } from 'react';

const countries = [
  {
    country: 'USA',
    cities: ['New York', 'Miami', 'Los Angeles']
  },
  {
    country: 'Spain',
    cities: ['Alicante', 'Barcelona', 'Valencia']
  },
  {
    country: 'Japan',
    cities: ['Tokyo', 'Sapparo', 'Okinawa']
  }
]


function App() {

  const [selected, setSelected] = useState(countries[0].country)
  const [cities, setCities] = useState(countries[0].cities)

  // Looping through the countries array to create a select option for each item in the array
  const countriesLoop = countries.map((item) => {
    return (<option key={item.country} value={item.country}>{item.country}</option>)
  })

  // onChange for the first dropdown select box
  function changeSelected(e) {

    setSelected((selected) => { return (e.target.value) })
  }

  // Filtering the cities shown by the selected 
  const filteredCountriesList = countries.filter((item) => {
    return (item.country === selected)
  })

  const filteredCitiesList = filteredCountriesList[0].cities.map((city) => {
    return (<option key={city}>{city}</option>)
  })





  let payments = [{ amount: 29.87 }, { amount: 29.87 }, { amount: 29.87 }, { amount: 29.87 }];

  const listOfPayments = payments.map((payment) => {
    return (<div>
      <li >{payment.amount}</li>
      <button>Delete</button>
    </div>)
  })

  // console.log(listOfPayments);

  // Create two drop downs with the first selecting the country.And the second drop down updating to show the cities of the first dropdown. 

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <select onChange={changeSelected}>
          {countriesLoop}

        </select>
      </div>

      <div>
        <select >
          {filteredCitiesList}

        </select>
      </div>


      <div>
        <TimerAndClicks />
      </div>
    </div>
  );
}

export default App;
