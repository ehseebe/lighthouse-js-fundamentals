// trash = string of what is being submitted
// bins = object containing 3 properties (waste, rcycling, compost) which hold some numerical value
//function increases value of bins object and return updated object

const smartGarbage = function(trash, bins) {
	let keys = Object.keys(bins);
	if (trash === 'waste') {
		bins.waste += 1;
	} else if (trash === 'recycling') {
		bins.recycling += 1;
	} else if (trash === 'compost') {
		bins.compost += 1;
	}
	return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));