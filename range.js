/* function range(start, end, step) {
	let newArray = [];
	if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step <= 0)) {
		return [];
	} else {
	for (let i = start; i <= end; i += step) {
		newArray.push(i);
	}
}
return newArray;
}

console.log(range(10, 30, -1));
console.log(range(20, 5, 5));
console.log(range(10, 5));

*/

function lastIndexOf(arr, value) {
	let match = false;
	let result = 0;
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] === value) {
			result = i;
			match = true;
		}
	} 
	if (match) {
		return result;
	} else {
		return -1;
	}
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);