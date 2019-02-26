const sockArray = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = sockArray.length;

function pairSocks(n, ar){
    let pairs = {};
    const colors = ar.filter((sock)=>{
        if(pairs[sock]){
            pairs[sock] += 1;
        } else {
            pairs[sock] = 1;
            return sock;
        }
    });
    let totalPairs = 0;
    colors.forEach(element => {
        if(pairs[element] % 2 == 0){
            totalPairs += pairs[element] / 2;
        } else {
            const oddPairs = pairs[element] - 1;
            if(oddPairs != 0){
                totalPairs += oddPairs / 2;
            }
        }
    });
    return totalPairs;
}

console.log(pairSocks(n, sockArray));