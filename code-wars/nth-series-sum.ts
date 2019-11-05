export function SeriesSum(n:number): string {
   let sum = 1;
   let denominator = 4
   for(let i = 1; i < n; i++){
      sum += (1 / denominator);
      denominator += 3;
   }
   return sum.toFixed(2);
}

console.log(SeriesSum(4))