//Write a JavaScript function that finds how many times a substring is contained 
//in a given text (perform case insensitive search).

function findLetters(str){
 	var st = str.toLowerCase();
 	var p = 0;
 	for (var i = 1; i < st.length; i++) {
 		if (st[i] === 'n') {
 			if (st[i-1] === 'i'){
 			  p++;
 			}
 		}
 	}
  alert(p);
 }

 findLetters("We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.");