/**
 * Created by ZYG on 21.08.2016.
 */
"use strict";
var pcNumber = [];
var i = 0, j = 0, k = 1;
var count1 = 0, count2 = 0, pointsSum = 0;
//localStorage['gameComplited'] = 0;
var h1 = document.getElementsByTagName("h1")[0];
if (localStorage['userName']){
    h1.innerHTML = ("Hi " + localStorage['userName'] +"!");
}
else {
    h1.innerHTML = ("Hi User!");
}
for (i = 0; i < 4; i++){
    pcNumber[i] = Math.ceil(Math.random()*9);
    if (i > 0) {
        while (pcNumber[i] === pcNumber[i-1]) {
            pcNumber[i] = Math.ceil(Math.random()*9);
        }
    }
}

for (j = 0; j < pcNumber.length; j++) {
    k = j + 1;
    for (i = 1; i < pcNumber.length; i++) {
        if (pcNumber[j] === pcNumber[k]) {
            pcNumber[k] = Math.ceil(Math.random()*9);
            i = 1;
        }
        else {
            k++;
        }
    }
}

function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

document.getElementById("enterNumber").addEventListener("click", function() {
    var pcNumberToString = pcNumber.join('');
    localStorage['pcNumber'] = pcNumberToString;
    var pcNumberSaved = +(localStorage.getItem('pcNumber'));//

    var userNumber = document.getElementById("myNumber").value;
    localStorage['userNumber'] = userNumber;
    var userNumberSaved = +(localStorage.getItem('userNumber'));

    if (pcNumberSaved) {
        pcNumber = pcNumberSaved;
    }
    alert("My number is " + pcNumber + " .");
    if (userNumberSaved) {
        userNumber = userNumberSaved;
    }

    function repeatingDigits(num) {
        var numArr = (num + '').split('');
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    if (i != j) {
                        if (numArr[i] == numArr[j])
                            return false;
                    }
                }
            }
    }

    try {
        if(typeof userNumber == "number" && userNumber >= 1000 && userNumber < 10000 && repeatingDigits(userNumber) != false) {
            pcNumber = (pcNumber + '').split('');
            userNumber = (userNumber + '').split('');
            for (i = 0; i < 4; i++){
                if(pcNumber[i] == userNumber[i]) count1++;
            }
            for (i = 0; i < 4; i++){
                for (j = 0; j < 4; j++) {
                    if (pcNumber[i] == userNumber[j]) count2++;
                }
            }
            pointsSum = count1 + count2;
            alert("You have " + count1 + " rams and " + count2 + " sheeps. Your points quantity is " + pointsSum + " !");
            localStorage['gameComplited'] = 1;

            localStorage['pointsSum'] = pointsSum;
        }
        else {
            throw new Error("Value is invalid. You can use only not repeating digits. The quantity of digits shall be 4.");
        }
    }
    catch (er) {
        alert(er.message);
    }
}, false);

if (localStorage['gameComplited'] == "1"){
    document.getElementById("form").innerHTML = '<p><h2>Your  name?</h2></p> <input id="inp"  type="text" name="name" value="" placeholder="input name"><button id="enterName" type = "submit">Submit</button>';

    document.getElementById("enterName").addEventListener("click", function () {
            try {
                var userName = document.getElementById("inp").value;
                localStorage['userName'] = userName;
                if (typeof userName == "string" && !(/[а-яА-Я0-9]/.test(userName))) {
                    localStorage['userName'] = userName;
                    h1.innerHTML = ("Hi " + userName +"!");
                    localStorage['changedName'] = 1;
                }
                else {
                    throw new Error("Value is invalid. You can use only latin letters.");
                }
            }
            catch (er) {
                alert(er.message);
            }
     }, false)

}

    var gamerList = localStorage.gamerList ? JSON.parse(localStorage.gamerList) : [];
if (localStorage['changedName'] == "0" || null){
    gamerList[gamerList.length] = (localStorage['userName'] + ': ' + localStorage['pointsSum']);
}
for (i = gamerList.length - 1; i > 0 ;  i--){
        var li = document.createElement("li");
        li.innerHTML = gamerList[i];
        var list = document.getElementById("GamerList");
        list.appendChild(li);
        if(i == (gamerList.length - 9)) break;
}
localStorage.gamerList = JSON.stringify(gamerList);

alert(gamerList);

localStorage['gameComplited'] = 0;
localStorage['changedName'] = 0;


