/* Binary search--search array

/*
This is linear search 
*/
var doSearch = function(array, targetValue) {
	var attempts = 0;
	for (var guess = 0; guess < array.length; guess++) {
		++attempts;
		if (targetValue === array[guess]) {
			//document.writeln(guess + 1);
			var r = {
				index: guess,
				attempts: attempts
			}
			return r;
		} 
	}

	return -1;

}

/* This is binary search */
var binarySearch = function(array, target) {
	var min = 0;
	var max = array.length - 1;
	var guess;
	var attempts = 0;
	while (min <= max) {
		guess = Math.floor((max + min) / 2);
		++attempts;
		//document.writeln(guess);
		if (array[guess] === target) {
			var r = {
				index: guess,
				attempts: attempts
			}
			return r;
		} else if (array[guess] < target) {
			min = guess + 1;
		} else if (array[guess] > target) {
			max = guess - 1;
		}
	}

	return -1;

}