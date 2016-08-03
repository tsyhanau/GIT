//Write a JavaScript function to check if in a given expression 
//the brackets are put correctly.
//    * Example of correct expression: `((a+b)/5-d)`.
 //   * Example of incorrect expression: `)(a+b))`.
function checkBrackets(expr){	
 	var arr1 = [], arr2 = [], p = 0, j;
 	for(var i = 0; i < expr.length; i++){
  		if(expr.charAt(i) === '(' ){
      arr1[i] = 1;
      }
      else {arr1[i] = 0;}
      if(expr.charAt(i) === ')' ){
      arr2[i] = 1;
      }
      else {arr2[i] = 0;}
  	}
  	document.write(arr1 +'<br>');
  	document.write(arr2 +'<br>');  
  	stop:  
  	for(i = 0; i < expr.length; i++){
  		if (arr1[i] < arr2[i]) {
    		p--;
    		if (p < 0){
    			document.write('Error! Check bracket on position: ' + i +'<br>');
    			break stop;
    		}
    	}
    	else if (arr1[i] > arr2[i]){
    		p++;
    	}
    	else {continue};
  	}
    if (p === 0) {
    	document.write('Your brackets are OK.' + '<br>');
    }
    else if ( p > 0 ) {
    	document.write('Error! You have ' + p + ' excess brackets.' + '<br>');
    }
}
checkBrackets(")(a+b))");
