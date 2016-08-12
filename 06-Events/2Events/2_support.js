"use strict";


var add = document.getElementById("add");
var show = document.getElementById("show");
var hide = document.getElementById("hide");
var del = document.getElementById("delete");
var inp = document.getElementById("inp");
var list = document.getElementById("list");
var listNames = document.getElementsByTagName("li");

add.addEventListener("click", function() {
    var favName = inp.value;
    try {
        if(typeof(favName)=="string" && favName.length >= 3 && favName.length < 21 && !(/[а-яА-Я0-9]/.test(favName))) {
            var li = document.createElement("li");
            li.innerHTML = '<input  type="checkbox"  name="1" value="false"  placeholder="input name"><span>Wowa</span>';
            list.appendChild(li);
            favName = favName[0].toUpperCase() + favName.substring(1);
            li.querySelector('span').innerHTML = favName;

        }
        else {
            throw new Error("Value is invalid. You can use only latin letters. The quantity of characters shall be from 3 to 20.");
        }
    }
    catch (er) {
        alert(er.message);
    }
    inp.value = "";
    var x = listNames[i].firstElementChild;
    x.checked=false;
}, false);

hide.addEventListener("click", function () {
   for(var i=0; i<listNames.length; i++){
        var x = listNames[i].firstElementChild;
        if (x.checked==true)
            x.nextElementSibling.style.display="none";
            x.checked=false;
   }
}, false);

show.addEventListener("click", function () {
    for(var i=0; i<listNames.length; i++){
        var x = listNames[i].firstElementChild;
        if (x.checked==true)
            x.nextElementSibling.style.display="";
            x.checked=false;
    }
}, false);

del.addEventListener("click", function () {
    for(var j=listNames.length; j>0; j--) {
        for (var i = 0; i < (listNames.length); i++) {
            var x = listNames[i].firstElementChild;
            if (x.checked == true)
                listNames[i].parentNode.removeChild(listNames[i]);
        }
    }
}, false);

//var oldField = (list.firstElementChild);
// var newField = oldField.cloneNode(true);
//newField.querySelector('span').innerHTML = inp.value;
// list.insertBefore(newField, list.firstElementChild);
//list.lastElementChild = document.createElement(li);


