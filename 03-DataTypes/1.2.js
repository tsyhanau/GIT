//Write a script that compares two char arrays lexicographically (letter by letter).
var arr1 = ['b', 'i', 'l', 'l'], 
    arr2 = ['b', 'i', 'l', 'l', 'y'];   
function compArr(arr1, arr2){
 	var len, p = 0;
 	if (arr1.length < arr2.length){
 	len = arr2.length;
 	}
 	else{
 	len = arr1.length;
 	} 
  	for(var i = 0; i < len; i++){  	
   	 	if(arr1[i] === arr2[i]){
    	document.write('chars ' + i + ' are equal' + '<br>');
    	continue;
    	}
    	else{
      	document.write('chars ' + i + ' are unequal!' + '<br>');
      	p = -1;   	
        }
  	}
  	if (p === -1){
  	document.write('Arrays are unequal!');
  	}
  	else {
  	document.write('Arrays are equal.');
  	}
}
compArr(arr1, arr2);
