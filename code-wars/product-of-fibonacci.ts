export class G964 {

   public static productFib = (prod) => {
     function recursiveFib(a: number, b: number, target: number): [number, number, boolean]{
        if(a * b === target){
           return[a, b, true]
        };
        if(a * b > target) return [a, b, false];
        return recursiveFib(b, a + b, target);
     }
     return recursiveFib(0, 1, prod);
   }
}


console.log(G964.productFib(5895));