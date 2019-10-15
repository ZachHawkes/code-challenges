const inputArray = [1, 2, 3, 4, 5]


function rotLeft(a, d){
    let arr = a; 
    for(let i = 0; i < d; i++){
        const lastELement = arr.shift(); 
        arr.push(lastELement);
    }
    let string = ""; 
    arr.forEach(x => {
        string += `${x} `
    })
    console.log(string);
}

rotLeft(inputArray, 4);