const testArray = [1, 1, 0, -1, -1];


function plusMinus(arr){
   let positive = 0;
   let negative = 0;
   let zero = 0;
   arr.forEach(value=>{
      if(value === 0){
         zero++;
      } else if(value > 0){
         positive++;
      } else {
         negative++;
      }
   })
   console.log((positive/arr.length).toFixed(6));
   console.log((negative/arr.length).toFixed(6));
   console.log((zero/arr.length).toFixed(6));
}

plusMinus(testArray);