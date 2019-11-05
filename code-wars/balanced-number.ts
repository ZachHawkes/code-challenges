// A number is balanced if the sum of the leftside equals the sum of the rightside. The middle of the number is not counted. 
export function balancedNum(number: number): string {
   const stringifiedNumber = number.toString();
   if(stringifiedNumber.length === 1 || stringifiedNumber.length === 2) return "Balanced"
   const [leftSide, rightSide] = sliceleftAndRightSides(stringifiedNumber.split(''));
   return addArrayContents(leftSide) === addArrayContents(rightSide) ? "Balanced" : "Not Balanced";
}

function sliceleftAndRightSides(arr: string[]): [string[], string[]] {
   const leftSide = arr.slice(0, (arr.length - 1) / 2);
   const rightSide = arr.slice((arr.length / 2 )+ 1, arr.length);
   return [leftSide, rightSide];
}

function addArrayContents(arr: string[]): number {
   return arr.map(x=>parseInt(x)).reduce((total, value)=>{
      return total + value;
   })
}


console.log(balancedNum(56239814), "--", balancedNum(56239814) === "Balanced" ? "Passed" : "Failed");
