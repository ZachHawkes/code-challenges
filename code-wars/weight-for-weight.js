function orderWeight(strng) {
   let array = strng.split(' ');
   array.sort((a, b)=>{
       const aWeight = sumArray(a.split(''));
       const bWeight = sumArray(b.split(''));
       if(aWeight === bWeight){
         console.log("a = ", a, " b = ", b);
         return a.localeCompare(b); 
       }
       return aWeight - bWeight;
   });
   return array.join(' ');
};

function sumArray(arr){
   return arr.reduce((x,y)=>parseInt(x)+parseInt(y));
}

function getUnicodeValue(strng){
   return strng.split('').reduce((total, current)=>{
      total + current.charCodeAt();
   })
}

const testString = "8 152 125"
const testString2 = "82147 18 302748 5 107434 32 425208 166 145316 55 160697 157 80394 13 204750 162 324029 192 366120 54 89"
console.log(orderWeight(testString2));


const testArray = ['123', '10003', '22'];
const test2Array = ['123', '10003', '22'];
