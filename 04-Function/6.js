var cutSubstr = function(strArr){  
    var i, newStr;
    var arrResult = new Array(strArr.length);
    for (i = 0; i < strArr.length; i++) {
        newStr = strArr[i].split(':');
        arrResult[i] = '"' + newStr[1].replace(/\./g, '') + '" ';
    }    
    return (arrResult);    
}
alert(cutSubstr(["This is the first sentence: LL2, 34, case, tank.", "This is: a, sentence, with.", "a list of items: cherries, oranges, apples, bananas."]));