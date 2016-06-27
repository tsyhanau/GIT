//3. Write a script that finds the maximal sequence of equal elements in an array.
 //**Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 1] -> [2, 2, 2].
var arr3 = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
	arrMax = [],
    p,
    counter = 1;
    arrMax.length = counter;
for(var i = 1; i < arr3.length; i++){
     if (arr3[i] === arr3[i-1]) {
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
 for(var i = 0; i < counter; i++){
   arrMax[i] = p;
 }
 document.write('The maximal sequence of equal elements: '+ counter);
 document.write('<br>' + arrMax);

