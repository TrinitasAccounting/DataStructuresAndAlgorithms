

// Deepening my knowledge of Data Structures and Algorithms

// Question 1: Log all pairs of the array below ___________________________

// const array = [1, 2, 3, 4, 5]


// O(n^2) method that I hate
// function logPairs(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             console.log(array[i], array[j])
//         }
//     }
// }

// logPairs(array);



//  Question 2: Remove the value from the given array and return a destructured array__________________________________________________
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


function removeValue(array, value) {
    let valueCount = 0;
    if (array.length < 2) {
        console.log('not an array')

    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                array[i] = '_'
            }
            else {
                valueCount = valueCount + 1

            }
        }
        console.log(valueCount)
        // console.log(array.sort())

    }
}

removeValue(2, 3)


const removeValues = (array1, value1) => {
    let valueCount1 = 0
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === value1) {
            array1[i] = '_'
        }
        else {
            valueCount1++

        }
    }
    console.log(valueCount1)
    console.log(array1.sort())
}

removeValues([0, 1, 2, 2, 3, 0, 4, 2], 2)