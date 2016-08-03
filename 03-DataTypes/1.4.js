//4. Write a script that finds the maximal increasing sequence in an array.
//**Example:** [3, 2, 3, 4, 2, 2, 4] -> [2, 3, 4].
var arr3 = [3, 2, 3, 4, 2, 2, 4],
	arrMax = [],
    p,
    counter = 1;
    arrMax.length = counter;
for(var i = 1; i < arr3.length; i++){
     if (arr3[i] - 1 === arr3[i-1]) {
     arrMax.length++;
     } 
     else {
     arrMax.length = 1;
     }
     if (arrMax.length > counter){
     counter = arrMax.length;
     p = arr3[i];
     }  
   }
 document.write('The maximal increasing sequence: '+ counter + '<br>');
 
 for(var i = counter - 1; i >= 0 ; i--){
   arrMax[i] = p - i;
   if ( i !== 0){
   document.write( arrMax[i] + ' , ');
   }
   else{
   document.write( arrMax[i] + ' .');
   }
 }
