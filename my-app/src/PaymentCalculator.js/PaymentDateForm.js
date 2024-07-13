
import { useState } from 'react';


function PaymentDataForm({ paymentValues, setPaymentValues }) {
    const [paymentFormData, setPaymentFormData] = useState({
        puchaseDate: '',
        numberOfPayments: 4,
        amount: 100
    })

    // Updating the form when the input box is changed
    function handleFormChange(event) {
        event.preventDefault()
        let newPaymentFormData = { ...paymentFormData, [event.target.name]: event.target.value }

        setPaymentFormData(newPaymentFormData)
    };

    // console.log(paymentFormData);

    // Handle the submission of the form
    function handleSubmit(event) {
        event.preventDefault()
        setPaymentValues((paymentValues) => paymentFormData)
        // console.log(paymentValues)
    };





    return (
        <>
            <form onSubmit={handleSubmit}>
                <label name='purchaseDate'>
                    Date of Purchase:
                    <input type="date" name="purchaseDate" value={paymentFormData.purchaseDate} onChange={handleFormChange} />
                </label>
                <label name='numberOfPayments'>
                    # of Payments:
                    <input type="number" name="numberOfPayments" value={paymentFormData.numberOfPayments} onChange={handleFormChange} />
                </label>
                <label name='amount'>
                    Total Amount:
                    <input type="number" name="amount" value={paymentFormData.amount} onChange={handleFormChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default PaymentDataForm;