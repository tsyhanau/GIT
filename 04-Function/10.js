
function copyright(){
    var sign = '\u00A9';
    return function(par){
        return (sign + ' ' + par);
    }    
}
alert( copyright()("EPAM"));

