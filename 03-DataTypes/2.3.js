//3. Write a function that finds all the occurrences of word in a text
    //* The search can case sensitive or case insensitive
    //* Use function overloading
function findWord(inf, word){
	var infCase = inf.toLowerCase();
	var wordCase = word.toLowerCase();
	var infArr = infCase.split(" "),
        p = 0;
	for(var i = 0; i < infArr.length; i++){ 
		if ( infArr[i] === wordCase) {
   			document.write('required word is on position ' + i + '<br>');
        	p = 1;
		}
  	}
  	if ( p === 0) {
   		document.write('required word was not found!' + '<br>');
	}
}
findWord('Only fools rush in!', 'only', 124);

//4. Write a function to count the number of divs on the web page






