

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


// function removeValue(array, value) {
//     let valueCount = 0;
//     if (array.length < 2) {
//         console.log('not an array')

//     }
//     else {
//         for (let i = 0; i < array.length; i++) {
//             if (array[i] === value) {
//                 array[i] = '_'
//             }
//             else {
//                 valueCount = valueCount + 1

//             }
//         }
//         console.log(valueCount)
//         // console.log(array.sort())

//     }
// }

// removeValue(2, 3)


// const removeValues = (array1, value1) => {
//     let valueCount1 = 0
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] === value1) {
//             array1[i] = '_'
//         }
//         else {
//             valueCount1++

//         }
//     }
//     console.log(valueCount1)
//     console.log(array1.sort())
// }

// removeValues([0, 1, 2, 2, 3, 0, 4, 2], 2)




// Question 3_____________________________________________________________________________________________________________
// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// function findSubArray(array, target) {
// let newArray = [];
// for(let i = 0; i < array.length; i++) {
//     let newArray1 = [];

// }
//     let twoSumsArray = [];
//     if (array.includes(target)) {
//         return (console.log(target))
//     }
//     else if (!array.includes(target)) {
//         for (let i = 0; i < array.length - 1; i++) {
//             let sum = array[i] + array[i + 1];
//             if (sum === target) {
//                 twoSumsArray.push(array[i])
//                 twoSumsArray.push(array[i + 1])
//                 return (console.log([array[i], array[i + 1]]))
//             }
//         }
//     }
//     else if (twoSumsArray.length < 2) {
//         for (let i = 0; i < array.length - 2; i++) {
//             let sum = array[i] + array[i + 1] + array[i + 2];
//             if (sum === target) {
//                 return (console.log([array[i], array[i + 1], array[i + 2]]))
//             }
//         }
//     }
// }

// findSubArray([1, 4, 4], 4)





// Questions 4______________________________________________________________________
// Given two arrays return true or false if the arrays contain a common element

// function commonElement(array1, array2) {
//     let set1 = new Set();
//     if (array1.length < 2 || array2.length < 2) {
//         return console.log('not an array')
//     }
//     else {
//         for (let i = 0; i < array1.length; i++) {
//             set1.add(array1[i])
//         }
//         console.log(set1);

//         for (let j = 0; j < array2.length; j++) {
//             if (set1.has(array2[j])) {
//                 return console.log(true)
//             }
//             // else {
//             //     return console.log(false)
//             // }
//         }

//     }
//     return console.log(false)
// }

// commonElement(2, [4, 5, 3])


// function commonItemCheck(array1, array2) {
//     let newObject1 = {};
//     for (let i = 0; i < array1.length; i++) {
//         newObject1[array1[i]] = true
//     }
//     console.log(newObject1)

//     for (let j = 0; j < array2.length; j++) {
//         if (newObject1[array2[j]]) {
//             return console.log(true)
//         }
//     }
//     return console.log(false)
// }

// commonItemCheck([1, 2, 3], [4, 5, 6])




// Question 5 _______________________________________________________
// Medium difficulty, if a matrix row or column contains a zero. Then 
// set that entire row to 0's and the entire column to 0's

// function setZeros(matrix) {
// let rowArray = []
// let columnArray = []
// // let matrixLength = matrix[0].length
// for(let i = 0; i < matrix[0].length; i++) {
//     columnArray.push(true)
// }

// for(let i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[i].length; j++){
//         if(columnArray[j] === false) {
//             matrix[i][j] = 0
//         }
//         if(matrix[i][j] === 0) {
//             columnArray[j] = false;

//         }
//     }
// }

// Best Answer__________________________________________
//     let rows = new Set();
//     let columns = new Set();

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === 0) {
//                 rows.add(i)
//                 columns.add(j)
//             }
//         }
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (rows.has(i)) {
//                 matrix[i][j] = 0
//             }

//             if (columns.has(j)) {
//                 matrix[i][j] = 0
//             }
//         }
//     }

//     return console.log(matrix)


// }

// setZeros([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])




// Question 6______________________________________________________________________________
// Receive an input and calculate how much payments would be 

// function paymentsCalculator(total, numberOfPayments, interestRate) {
//     interestPaid = total * ((interestRate / 100) / 12);
//     monthlyPrinciplePayments = total / numberOfPayments;

//     totalMonthlyPayments = monthlyPrinciplePayments + interestPaid;

//     return (console.log(totalMonthlyPayments))
// }

// paymentsCalculator(300, 4, 7.5)





// Question 7_______________________________________________________________________________
// Find the container with the most water


// sort array
// then take the largest value, multiply their distance from each other by height of others. Store as a value 
// continue down the array until all are multiplied

// function mostWater(array) {
//     let largestWater = 0;
//     let firstCalculator = 0;
//     let secondCalculator = 0;

//     // sortedArray = array.sort((a, b) => { return (b - a) });

//     for (let i = 0; i < array.length; i++) {
//         for (j = 0; j < array.length; j++) {
//             if (array[i] > array[j]) {
//                 // if((sortedArray[i] * Math.abs(i - j)) > water) {
//                 //     water = 
//                 // }
//                 firstCalculator = (array[j] * Math.abs(i - j));
//                 if (firstCalculator > largestWater) {
//                     largestWater = firstCalculator
//                 }
//             }
//             else if (array[i] < array[j]) {
//                 // if((sortedArray[i] * Math.abs(i - j)) > water) {
//                 //     water = 
//                 // }
//                 secondCalculator = (array[i] * Math.abs(i - j));
//                 if (secondCalculator > largestWater) {
//                     largestWater = secondCalculator
//                 }
//             }
//         }
//     }
//     console.log(largestWater);


// }

// mostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])



// Question 8_________________________________________________________________
// Finding the longest prefix string

function longestCommonPrefix(strs) {
    let commonString = '';
    let length = strs.length - 1;

    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            2 + 2
        }
    }
}


