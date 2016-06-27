//2. Write a function that reverses the digits of given decimal number. 
//Example: 256 -> 652
function revDigit(num){
	var n = " " + num;
	var rev = n.split("").reverse().join("");
	document.write(+rev);
}
revDigit(19345785);





