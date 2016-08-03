
function toConsole(par){ 
    console.log(par);             
}   
function toAlert(prm){
    alert(prm);     
}

function splitToWords(msg, callback){
    if (callback === undefined){
        alert(msg.split(" "));
    }
    else{
        callback(msg);
    }    
}

splitToWords("My very long text msg", toAlert);
splitToWords("My very long text msg");