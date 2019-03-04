// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// This program fails for large amounts of data. Still do not know why for sure. 
function arrayManipulation(n, queries){
    let array = createArrayWithZeros([], n);
    queries.forEach((value)=>{
        const length = (value[1] - value[0]) + 1;
        array = addNumberToIndexes(array, value[0] - 1, length, value[2]);
    });
    console.log(array);
    console.log("Final Value", returnGreatestNumber(array));
}

function returnGreatestNumber(arr){
    let highest = 0; 
    arr.forEach((value)=>{
        if(value > highest) highest = value;
    });
    return highest; 
}

function createArrayWithZeros(arr, length){
    if(length < 0){
        return arr;
    }
    arr.push(0);
    return createArrayWithZeros(arr, length - 1);
}

function addNumberToIndexes(arr, beginning, length, value){
    if(length == 0){
        return arr;
    }
    arr[beginning] += value;
    return addNumberToIndexes(arr, beginning + 1, length - 1, value);
}


const queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
]

arrayManipulation(9, queries);