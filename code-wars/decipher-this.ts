// First letter is replaced by its char code, 2nd and last letter are switched
export function decipherThis(str: string): string {
	const listOfWords = str.split(' ');
	const result = listOfWords.map(value=>{
		const wordArray = replaceCharCodeWithChar(value).split('');
		return switchPlaces(wordArray).join('');
	});
	return result.join(' ');
}

// ideally this function will let you switch any two places in the array. 
function switchPlaces(arr: string[]): string[] {
	const temp = arr[1];
	arr[1] = arr[arr.length - 1];
	arr[arr.length - 1] = temp;
	return arr
}

function replaceCharCodeWithChar(word: string): string{
	const regex = new RegExp("[0-9]{1,3}")
	const charValue = word.match(regex).shift();
	return word.replace(regex, String.fromCharCode(parseInt(charValue)))
}

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), "----",decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') == 'Have a go at this and see how you do' ? "Pass" : "Fail");


