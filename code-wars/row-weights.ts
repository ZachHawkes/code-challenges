// add the total weights of each team, even number indexes are team 1 others are team 2
export function rowWeights(arr: number[]): [number, number] {
   let team1 = [];
   let team2 = [];
   arr.forEach((value, index)=>{
      if(index % 2 === 0){
         team1.push(value);
      } else {
         team2.push(value);
      }
   });
   const total1 = team1.reduce((total, currentValue)=>total + currentValue)
   const total2 = team2.reduce((total, currentValue)=>total + currentValue)
   return [total1, total2];
 }

 console.log(rowWeights([70, 58, 75, 34, 91]))