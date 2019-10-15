export function sortTheInnerContent(words:string):string {
   let array = words.split(' ');
   return array.map(value=>{
      let singleWord = value.split('');
      const beginning = singleWord.shift();
      const end = singleWord.pop();
      singleWord.sort((a, b)=> b.localeCompare(a) - a.localeCompare(b));
      singleWord.unshift(beginning);
      singleWord.push(end);
      return singleWord.join('');
   }).join(' ')
}

/*
1. Rip out the words from the string
2. Remove beginning and end from word
3. Sort middle into descending order. 
4. Replace beginning and end. 
5. rejoin individual words into single string.
*/