
import Card from "./IndividualCard";
import './CardDesign.css';


function PaymentCards({ paymentValues }) {

    // map through the number of payments and create a card (potentially using a for loop since the number of payments may change)


    console.log(paymentValues);

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


    const data = []
    for (let i = 0; i < paymentValues.numberOfPayments; i++) {
        data.push({ date: paymentValues.purchaseDate, amount: paymentValues.amount })
    }




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