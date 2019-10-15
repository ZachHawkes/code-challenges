// https://www.hackerrank.com/challenges/2d-array/problem?h_r=next-challenge&h_v=zen

/**
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
**/


function hourglassSum(arr) {
   let currentMax;
   arr.forEach((value, index)=>{
      value.forEach((innerValue, innerIndex)=>{
         if(index + 2 < arr.length && innerIndex + 2 < value.length){
            const firstRow = arr[index][innerIndex] + arr[index][innerIndex + 1] + arr[index][innerIndex + 2];
            const secondRow = arr[index + 2][innerIndex] + arr[index + 2][innerIndex + 1] + arr[index + 2][innerIndex + 2];
            const middle = arr[index + 1][innerIndex + 1];
            const totalSum = firstRow + secondRow + middle;
            if(totalSum > currentMax || !currentMax){
               currentMax = totalSum;
            }
         }
      })
   });
   return currentMax;
}

// const testArray = [[1,1,1,0,0,0], [0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0], [0,0,0,2,0,0], [0,0,1,2,4,0]];
const testArray = [[-1, -1, 0, -9, -2, -2], [-2, -1, -6, -8, -2, -5], [-1, -1, -1, -2, -3, -4], [-1, -9, -2, -4, -4, -5], [-7, -3, -3, -2, -9, -9], [-1, -3, -1, -2, -4, -5]];
console.log(hourglassSum(testArray));