

import { useState } from "react";

import './DoList.css';



let listArray = [
    {
        "id": 1,
        "text": "todo 1",
        "isCompleted": false
    },
    {
        "id": 2,
        "text": "todo 2",
        "isCompleted": false
    },
    {
        "id": 3,
        "text": "todo 3",
        "isCompleted": true
    }
]








function DoList() {

    const [itemsList, setItemsList] = useState([])

    let itemsListToShow = listArray.map((item) => {
        return (
            <li key={item.id}>{item.text} - {item.isCompleted ? 'Done' : 'XXX'}</li>
        )
    })








    return (
        <>
            <ul>
                {itemsListToShow}
            </ul>
        </>
    )
}

export default DoList;