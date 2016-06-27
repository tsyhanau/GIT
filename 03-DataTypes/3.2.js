
//Write a function that removes all elements with a given value
//	* var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
 //   * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];
 var sonObj =  {
 arrMix: [1, 2, 1, 4, 1, 3, 6, 7,  4, 1, 111, 3, 2, 1, "1"]
 };
 
var obj = {
	 arrOb: [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"],  
 	remove: function(arr, x){
 		var i, j;
 		for (i = 0; i < arr.length; i++) {
 			if (arr[i] == x) {
            	arr.splice( i, 1); 
 			}		
 		} 
 	  document.write(arr);
    }
};
 
 obj.remove(obj.arrOb, 1);
 
 sonObj.__prototype__ = obj;
 sonObj.remove(sonObj.arrMix, 1);