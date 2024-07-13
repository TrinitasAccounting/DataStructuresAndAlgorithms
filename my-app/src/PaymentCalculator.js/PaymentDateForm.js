
import { useState } from 'react';


function PaymentDataForm() {
    const [paymentFormData, setPaymentFormData] = useState({
        puchaseDate: '',
        numberOfPayments: 4,
        amount: 100
    })

    function handleFormChange(event) {
        event.preventDefault()
        let newPaymentFormData = { ...paymentFormData, [event.target.name]: event.target.value }
        // if (event.target.name === 'numberOfPayments' || event.target.name === 'amount') {
        //     newPaymentFormData = { ...paymentFormData, [event.target.name]: Number(event.target.value) }
        // }
        // else {
        //     newPaymentFormData = { ...paymentFormData, [event.target.name]: event.target.value }

        // }

        setPaymentFormData(newPaymentFormData)
    };

    console.log(paymentFormData);




    return (
        <>
            <form>
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