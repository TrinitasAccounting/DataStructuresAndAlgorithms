import ToDoCard from "./ToDoCard";

import { useState } from "react";




function ToDo() {

    // let toDoArray = ['item 1', 'item 2'];

    const [toDoArray, setToDoArray] = useState(['item 1', 'item 2']);
    const [newItem, setNewItem] = useState('');

    // handle change of the update to the input box
    function handleChange(event) {
        event.preventDefault();
        setNewItem(event.target.value)
    }

    // onSubmit that pushes the newly added todo item to an array
    function handleSubmit(event) {
        event.preventDefault();
        // console.log(newItem)

        // toDoArray.push(newItem)

        let newArray = [...toDoArray, newItem];
        setToDoArray(newArray);

        setNewItem('');
    }

    // handleDeleteClick that receives an item and then removes that item from the toDoArray
    function handleDeleteClick(item) {
        let filteredArray = toDoArray.filter((arrayItem) => {
            return (arrayItem !== item)
        })

        setToDoArray(filteredArray)


    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={newItem} onChange={handleChange} />
                <button type='submit' value='Submit'>Submit</button>
            </form>

            <ToDoCard toDoArray={toDoArray} setNewItem={setNewItem} handleDeleteClick={handleDeleteClick} />



        </>
    )
}

export default ToDo;