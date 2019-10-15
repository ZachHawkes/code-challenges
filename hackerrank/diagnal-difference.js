const inputArray = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

/*
* 11 2 4
*  4 5 6 
* 10 8 -12 
*/

function diagnalDifference(arr){
    const length = arr.length;
    let total1 = 0;
    let total2 = 0;  
    for(let i = 0; i < length; i++){
            total1 += arr[i][i];
    }
    for(let i = length - 1; i >= 0; i--){
        total2 += arr[Math.abs(i - (length - 1))][i];
    }
    console.log(Math.abs(total1 - total2));
}

diagnalDifference(inputArray);