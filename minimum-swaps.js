TestArray = [1, 3, 5, 2, 4, 6, 7];

//if value is = index + 1, it's in the right place. 
//loop through and swap the first index with the incorrect value with the correct value

function minimumSwaps(arr){
    let swapCounter = 0; 
    arr.forEach((value, index)=>{
        if(value != index + 1 && index != arr.length - 1){
            arr.forEach((val2, index2)=>{
                if(val2 == index + 1){
                    const temp = arr[index];
                    arr[index] = arr[index2];
                    arr[index2] = temp;
                    swapCounter++;
                }
            })
        }
    })
    return swapCounter;
}


const test = minimumSwaps(TestArray);
console.log(test);