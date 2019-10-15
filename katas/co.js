
function co(genFunction){
   for(let i = 0; i < 10; i++){
      console.log(genFunction.next());
   }
}

function* test(){
   const test = yield 'hello';
   const test2 = yield 'World';
   return 'yall';
}

console.log(co(test()));
