//1. Write a function that returns the last digit of given integer as an English word.
 //Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"
function lastDigit(num){
	switch(num%10){
		case 0:
    		alert( 'zero' );
    		break;
  		case 1:
    		alert( 'one' );
    		break;
  		case 2:
    		alert( 'two' );
    		break;
    	case 3:
    		alert( 'three' );
    		break;
  		case 4:
    		alert( 'four' );
    		break;
  		case 5:
    		alert( 'five' );
    		break;
    	case 6:
    		alert( 'six' );
    		break;
  		case 7:
    		alert( 'seven' );
    		break;
  		case 8:
    		alert( 'eight' );
    		break;
     	default:
    		alert( 'nine' );
	}
}
lastDigit(199);


//2. Write a function that reverses the digits of given decimal number. 
//Example: 256 -> 652



//3. Write a function that finds all the occurrences of word in a text
    //* The search can case sensitive or case insensitive
    //* Use function overloading



//4. Write a function to count the number of divs on the web page

