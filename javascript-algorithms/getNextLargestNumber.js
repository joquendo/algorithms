function getNextLargestNumber( number ) {
	var numberArray = number.toString().split('');
 	var subArray = [];
    var index = 0;
    var nextLargestNumber = -1;
    
    if (numberArray.length <= 1 ) {
    
    	return nextLargestNumber;
    
    } else {
    
    	for (var i = numberArray.length - 1; i >= 0; i--) {

        	if (numberArray[i] > numberArray[i-1]) {

          		index = i - 1;
          		subArray = numberArray.splice(index);
          		break;
				
			}
			
		}
		
		if (subArray.length > 0) {

			var tmp = subArray[0];
			var nextLargestNumber = -1;
			subArray.sort(function(a, b) { return a - b });

			for (var i = 0; i < subArray.length; i++) {
			
				if (subArray[i] > tmp) {
				
					tmp = subArray.splice(i, 1)[0];
					subArray.unshift(tmp);
					break;
					
				}
			}

			numberArray = numberArray.concat(subArray);
			nextLargestNumber = Number( numberArray.join('') );
		}
		
		return nextLargestNumber;
    
    }

}

var numbersArray = [];
numbersArray.push(3);
numbersArray.push(13);
numbersArray.push(803);
numbersArray.push(5260);
numbersArray.push(36714);
numbersArray.push(930216);
numbersArray.push(2044020);
numbersArray.push(90784525);
numbersArray.push(372408090);
numbersArray.push(1493289080);
numbersArray.push(87029891980);
numbersArray.push(297916070492);
numbersArray.push(1308296173903);
numbersArray.push(12411638995442);
numbersArray.push(291078537105581);
numbersArray.push(4839821488999771);

for (var i = 0; i < numbersArray.length; i++) {

	console.log(getNextLargestNumber( numbersArray[i]) );
	
}
