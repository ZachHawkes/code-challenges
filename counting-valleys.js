const steps = "UDUUUDUDDD";
const n = steps.length;

function countingValleys(n, s){
    const stepArray = s.split('');
    let highestPoint = 0;
    let valleys = 0;
    let currentHeight = 0;
    stepArray.forEach((step, index) => {
        if(step == 'U'){
            currentHeight += 1;
            if(currentHeight > highestPoint){
                highestPoint = currentHeight;
            }
        } else {
            currentHeight -= 1;
            if(currentHeight + 1 == 0 && index + 1 < stepArray.length){
                valleys += 1;
            }
        }
    });
    console.log(valleys);
    return valleys;
}

countingValleys(n, steps);
