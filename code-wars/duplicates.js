const testString = "IndiviSibilitiesZZ11245672"

function findDuplicates(inputString){
   const stringArray = inputString.split('').map(x=>x.toLowerCase());
   let duplicates = [];
   let searchArray = stringArray.slice(0); // cloning array so we can modify search without touching string array.
   stringArray.forEach((value)=>{
      searchArray.shift();
      if(duplicates.indexOf(value) === -1 && searchArray.indexOf(value) !== -1){
         duplicates.push(value);
      };
   });
   return duplicates.length;
}


console.log(findDuplicates(testString));