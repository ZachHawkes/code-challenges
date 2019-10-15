export function addLetters(...letters: string[]) {
   if(letters.length === 0){
     return 'z';
   }
   const referenceArray: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let count: number = 0; 
   letters.forEach(letter=>{
     count += referenceArray.indexOf(letter) + 1; // assuming we are only getting letters in letters array
     console.log("Letter is - ", letter, " number is -- ", referenceArray.indexOf(letter) + 1);
   });
   if(count > 26){
     count = count % 26;
     if(count === 0){
       count = 26;
     } 
   };
   return referenceArray[count - 1];
 }

const letters = [ 'm', 'a', 'z', 'l', 'i', 'w', 't' ];
console.log(addLetters(...letters));