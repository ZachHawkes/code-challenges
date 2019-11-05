// Any letter that is not within a - m counts as an error, errors/total letters 
export class G964 {
   public static printerError(s: string): string {
     const letters = 'abcdefjklm'.split('');
     let errors = 0;
     s.split('').forEach(value=>{
        if(letters.indexOf(value) === -1){
           errors +=1
        }
     });
     return `${errors}/${s.length}`;
   }
 }


 console.log(G964.printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))