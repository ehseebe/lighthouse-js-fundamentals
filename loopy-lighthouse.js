/*
prints numbers 100-200
if multiple of 3, print "Loopy"
if multiple of 4, print "Lighthouse"
if multiple of 3 and 4, print "LoopyLighthouse"
*/

for (let x = 100; x <= 200; x++) {
	if (x % 4 === 0 && x % 3 === 0) {
		console.log("LoopyLighthouse");
	}
	else if (x % 4 === 0) {
		console.log("Lighthouse");
	}
	else if (x % 3 === 0) {
		console.log("Loopy");
	}
	else {
		console.log(x);
	}
}

