


import Card from "./IndividualCard";
import './CardDesign.css';


function PaymentCards({ paymentValues }) {

    // map through the number of payments and create a card (potentially using a for loop since the number of payments may change)


    // console.log(paymentValues);

    // const data = [
    //     { title: "Card 1", description: "This is the first card" },
    //     { title: "Card 2", description: "This is the second card" },
    //     { title: "Card 3", description: "This is the third card" },
    // ];

    // const test = [
    //     {Date: }
    // ]


    // const date = moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
    // console.log(date);

    // Creating our data array and handling the date parsing_________________________
    function addWeeks(date, weeks) {
        date.setDate(date.getDate() + 7 * weeks);
        return date;
    }
    function addDays(date, days) {
        date.setDate(date.getDate() + days)
        return date;
    }

    const data = []
    let newDate = new Date(paymentValues.purchaseDate)
    let correctDate = addDays(newDate, 0)
    let monthlyPayments = paymentValues.amount / paymentValues.numberOfPayments;
    for (let i = 0; i < paymentValues.numberOfPayments; i++) {
        data.push({ date: correctDate.toISOString().slice(0, 10), amount: monthlyPayments })
        correctDate = addWeeks(newDate, 2)
    }

    // _________________________________________________________________________

    // console.log(newDate);



    return (
        <div className='card-container-large'>
            <div className="card-list">
                {data.map((item, index) => (
                    <Card key={index} date={item.date} amount={item.amount} />
                ))}

            </div>
        </div>
    )
}

export default PaymentCards;