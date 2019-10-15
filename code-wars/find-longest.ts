export class Kata {
   static findLongest(array:number[]):number {
      let count: number = 0;
      let currentLongest: number;
      array.forEach((num)=>{
         const numberLength = num.toString().length;
         if(numberLength > count){
            count = numberLength;
            currentLongest = num;
         }
      })
     return currentLongest
   }
 }