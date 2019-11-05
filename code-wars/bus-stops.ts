// first number is how many got on the bus, 2nd number is how many got off, returns how many are on the bus at the end. 
export function number(busStops: [number, number][]): number {
   return busStops.reduce((total, current)=>{
      return total + (current[0] - current[1]);
   }, 0)
}

console.log(number([[10,0],[3,5],[5,8]]), number([[10,0],[3,5],[5,8]]) === 5 ? 'Pass' : 'Fail');