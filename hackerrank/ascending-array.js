const testArray = [-1, 0, 1, 4, 4, 6, 7, 9, 10, 12];

/*
* If the array contains three numbers in ascending order in order return 1 otherwise return 0; 
*/

function doesContainAscending(a){
   let count = 1; 
   let isAscending = 0;
   a.forEach((value, index)=>{
      if(index > 0){
         if(value === (a[index - 1] + 1)){
            count++;
            if(count === 3){
               isAscending = 1;
            }
         } else {
            count = 1;
         }
      }
   });
   return isAscending;
}
console.log(doesContainAscending(testArray));