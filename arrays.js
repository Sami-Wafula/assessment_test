// Given an array of integers, find the sum of its elements. 

// For example, if the array, [1,2,4,7], so return 14. 

//using a for loop

var array = [1,2,4,7];

function sumArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray(array))


//Using array.reduce() method

const sumOfArray = (arr) => {
    return arr.reduce((total, current) => {
        return total + current;
    }, 0)
}

console.log(sumOfArray(array))

//Using a for/of loop 

let sum = 0;
for (let i of array){
    sum += i;
}

console.log(sum)



let arr=[[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr){
    var n = arr.length;
    
}