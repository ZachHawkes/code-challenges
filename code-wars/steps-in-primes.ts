export class G964 {
   // g = step size
   // m = lower number range
   // n = upper number range
   public step = (g, m, n) => {
      for(let i = m; i < n; i++){
         if(this.isPrime(i)){
            if(this.isPrime(i + g)){
               return [i, i + g];
            }
         }
      }
   }
   public isPrime = (num): boolean =>{
      if(num % 2 === 0 || num % 3 === 0) return false; 
      for(let i = 5; i*i< num; i=i + 6){
         if(num % i === 0 || num % i + 2 === 0){
            return false;
         }
      }
      return true; 
   }
}

// console.log("13 is prime ", G964.isPrime(13));
// console.log("2029 is prime ", G964.isPrime(2029));
let test = new G964();
// console.log(test.step(8,300,400));
console.log(test.isPrime(361))
