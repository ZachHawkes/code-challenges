export class Kata {
   static highAndLow(numbers: string) {
     const arrayNumbers = numbers.split(' ').map(x=> parseInt(x));
     arrayNumbers.sort((a, b)=> a - b);
     return `${arrayNumbers[0]} ${arrayNumbers[arrayNumbers.length - 1]}`
   }
 }