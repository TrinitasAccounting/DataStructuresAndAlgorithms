


function ToDoCard({ toDoArray, setNewItem, handleDeleteClick }) {

    // console.log(toDoArray)

    // handleDeleteClick that receives an item and then removes that item from the toDoArray
    // function handleDeleteClick(item) {
    //     let filteredArray = toDoArray.filter((arrayItem) => {
    //         return (arrayItem !== item)
    //     })

    //     toDoArray = filteredArray;
    // }



    return (
        <>
            <ul>
                {toDoArray.map((item) => {
                    return (
                        <div>
                            <li>{item}</li>
                            <button onClick={() => handleDeleteClick(item)}>X</button>

                        </div>
                    )
                })}

            </ul>
        </>
    )
}

export default ToDoCard;