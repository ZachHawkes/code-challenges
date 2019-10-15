let createIterator = function (func, n) {
   return function iterator(num){
      if(n === 1){
         return func(num);
      }
      n--; 
      const newNum = func(num);
      return iterator(newNum);
   }
 };

function getDouble(n){
   return n + n; 
}
 const newIterator = createIterator(getDouble, 1);
 const secondIterator = createIterator(getDouble, 2);

console.log("Iterating once on 3 =>", newIterator(3));
console.log("iterating twice on 5 =>", secondIterator(5));