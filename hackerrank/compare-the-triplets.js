const array1 = [ 44, 75, 25]
const array2 = [ 36, 99, 25]

function compareTriplets(a, b){
   let arr1Score = 0;
   let arr2Score = 0;
   a.forEach((value, index)=>{
      if(value > b[index]){
         arr1Score++; 
      } else if (value < b[index]){
         arr2Score++;
      }
   })
   return [arr1Score, arr2Score];
}

console.log(compareTriplets(array1, array2));