const bigPackages = -1; 
const littlePackages = 8;
const goal = 5;

function getSmallPackages(small, big, goal){
   const BIG_KGS = 5;
   const numberOfBigUsed = Math.floor(goal / BIG_KGS);
   let whatsLeft; 
   if(numberOfBigUsed < big){
      whatsLeft = goal - (numberOfBigUsed * BIG_KGS);
   } else {
      whatsLeft = goal - (big * BIG_KGS);
   }
   if(whatsLeft <= small){
      return whatsLeft;
   } else {
      return -1;
   }
}

console.log(getSmallPackages(littlePackages, bigPackages, goal));