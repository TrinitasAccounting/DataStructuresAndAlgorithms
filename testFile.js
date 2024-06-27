

// Deepening my knowledge of Data Structures and Algorithms

// Question 1: Log all pairs of the array below 

const array = [1, 2, 3, 4, 5]


// O(n^2) method that I hate
function logPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logPairs(array);