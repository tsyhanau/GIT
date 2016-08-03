try
{
    alert(conc('abc', 'u'));
    var conc = function(a, b){      
        if (b === a){
            return +true;
        }
        else return 0;
    }    
}
catch (er)
{
    document.write(er);
}