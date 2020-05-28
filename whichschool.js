const whichSchool = function(age) {
	if (age < 13) {
		return "Elementary school";
	} else if (age >= 13 || age <= 18) {
		return "Secondary School";
	} else if (age > 18) {
		return "Lighthouse Labs";
	}
}

console.log(whichSchool(45));
