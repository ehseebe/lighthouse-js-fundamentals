const amounts = [61.00, 52.25, 112.99, 5.00];

/*
let total = 0;

for (let i = 0; i < amounts.length; i++) {
	total += amounts[i];
}

console.log("Order total is: ", total);
*/

let total = 0;
for (let amount of amounts) {
	total += amount;
}

console.log("Order total is: ", total)
 
/*works with objects that are iterable
ex. let data = [1,2,3,4]
for (let val of data) {
	console.log(val);
}

you define the [i] without assignment operator 
*/