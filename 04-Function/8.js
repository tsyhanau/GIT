
str = function (par){      
        if (par.length !== 0) alert("String is non empty");        
        else alert("String is empty");
}   
str.isNonEmptyStr = function(prm){
    if (prm.length !== 0 && typeof prm === "string") return true;        
        else return false;
    }
str('');
alert(str.isNonEmptyStr('123'));