
import { useState } from 'react';


function PaymentDataForm({ paymentValues, setPaymentValues }) {
    const [paymentFormData, setPaymentFormData] = useState({
        purchaseDate: '',
        numberOfPayments: 4,
        amount: 100
    })

    // Updating the form when the input box is changed
    function handleFormChange(event) {
        event.preventDefault()
        let newPaymentFormData = {};
        if (event.target.name === 'purchaseDate') {
            // let year = event.target.value.slice(0, 4);
            // let month = event.target.value.slice(5, 7)
            // let day = event.target.value.slice(8, 10)
            // console.log(month)
            // const date = new Date(event.target.value.splice(0,4), 10, 10);
            // const date = new Date(paymentFormData.purchaseDate)

            newPaymentFormData = { ...paymentFormData, [event.target.name]: event.target.value }
        }
        else {
            newPaymentFormData = { ...paymentFormData, [event.target.name]: event.target.value }
        }


        setPaymentFormData(newPaymentFormData)

    };


    // Handling our dates and adding days to them
    // const newDate = new Date(paymentFormData.purchaseDate)
    // console.log(newDate);

    // function addWeeks(date, weeks) {
    //     date.setDate(date.getDate() + 7 * weeks);
    //     return date;
    // }

    // console.log(addWeeks(newDate, 1))



    // console.log(paymentFormData);


    // Handle the submission of the form
    function handleSubmit(event) {
        event.preventDefault()
        setPaymentValues((paymentValues) => paymentFormData)
        // console.log(paymentValues)
    };





    return (
        <>
            <form onSubmit={handleSubmit} >

                <div style={{ width: '200px' }}>
                    <label name='purchaseDate'>
                        Date of Purchase:
                        <br /><input type="date" name="purchaseDate" value={paymentFormData.purchaseDate} onChange={handleFormChange} />
                    </label>
                </div>
                <div>
                    <label name='numberOfPayments'>
                        # of Payments:
                        <input type="number" name="numberOfPayments" value={paymentFormData.numberOfPayments} onChange={handleFormChange} />
                    </label><br />

                </div>
                <div style={{ width: '100px' }}>
                    <label name='amount'>
                        Total Amount:
                        <input type="number" name="amount" value={paymentFormData.amount} onChange={handleFormChange} />
                    </label>

                </div>
                <fieldset style={{ width: '100px', height: '40px' }}>
                    <label name='amount'>
                        Total Amount:
                        <input type="number" name="amount" value={paymentFormData.amount} onChange={handleFormChange} />
                    </label>
                </fieldset>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default PaymentDataForm;