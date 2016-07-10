
var find = function(testString, test){  
//return  testString.search(/test/); 
    var i;
    var b = false;
    for (i = 0; i < testString.length; i++) {
        if (testString[i] === test){
             b = true; 
             return i;
        }
    }
    if (b === false){
        return -1;
    }
}
alert(find('abc', 'u'));
