/**
 * Created by ZYG on 21.08.2016.
 */
"use strict";
//function request() {


  //  var i = 1;
  //  for(i = 1; i < 5; i++){
setTimeout(function() {
        var request = new XMLHttpRequest();
        var url = ("data" + 1 + ".json");
        request.open("GET", url, true);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState != 4) return;
                //setTimeout(function() {
                //}, 2000);
            //clearTimeout(timeout);
            if (request.status == 200) {

                var returnData = request.responseText;
                var li = document.createElement("li");
                var obj = (JSON.parse(returnData));
                var str = JSON.parse(returnData, function(key, value) {
                    if (key) li.innerHTML = (value);
                });
                //li.innerHTML = obj.a1;
                //alert(obj.a1);
                document.getElementById("todolist").appendChild(li);
            }
            else {
                alert("Server Error: " + request.status);
            }
        }
}, 1000);
//////////////////////////////////
setTimeout(function() {
var request = new XMLHttpRequest();
var url = ("data" + 2 + ".json");
request.open("GET", url, true);
request.send();
request.onreadystatechange = function () {
    if (request.readyState != 4) return;
    //setTimeout(function() {
    //}, 2000);
    //clearTimeout(timeout);
    if (request.status == 200) {

        var returnData = request.responseText;
        var li = document.createElement("li");
        var obj = (JSON.parse(returnData));
        var str = JSON.parse(returnData, function(key, value) {
            if (key) li.innerHTML = (value);
        });
        document.getElementById("todolist").appendChild(li);
    }
    else {
        alert("Server Error: " + request.status);
    }
}
}, 2000);
/////////////////////////////////////////////
setTimeout(function() {
var request = new XMLHttpRequest();
var url = ("data" + 3 + ".json");
request.open("GET", url, true);
request.send();
request.onreadystatechange = function () {
    if (request.readyState != 4) return;
    //setTimeout(function() {
    //}, 2000);
    //clearTimeout(timeout);
    if (request.status == 200) {

        var returnData = request.responseText;
        var li = document.createElement("li");
        var obj = (JSON.parse(returnData));
        var str = JSON.parse(returnData, function(key, value) {
            if (key) li.innerHTML = (value);
        });
        document.getElementById("todolist").appendChild(li);
    }
    else {
        alert("Server Error: " + request.status);
    }
}
}, 3000);
////////////////////////////////////////////////////////////
setTimeout(function() {
    var request = new XMLHttpRequest();
    var url = ("data" + 4 + ".json");
    request.open("GET", url, true);
    request.send();
    request.onreadystatechange = function () {
        if (request.readyState != 4) return;



        if (request.status == 200) {

            var returnData = request.responseText;
            var li = document.createElement("li");
            var obj = (JSON.parse(returnData));
            var str = JSON.parse(returnData, function(key, value) {
                if (key) li.innerHTML = (value);
            });
            document.getElementById("todolist").appendChild(li);
        }
        else {
            alert("Server Error: " + request.status);
        }
    }
}, 4000);
//};
//}
   /* var timeout = setTimeout(function () {
        request.abort();
        alert("Time over")
    }, 1000); */



/*var doCount = document.getElementById("todolist").childElementCount;
 var doList = document.getElementsByName("li");
 //alert(doOne);
 function displayOne(json){
 try{
 doList[0].innerHTML = json.one;
 }
 catch(e){
 console.log("Expetion:" + e.message);
 }
 }

 //request.addEventListener("load", function () {
 function displayData(data) {
 try{
 var json = JSON.parse(data);
 displayOne(json);
 }
 catch(e){
 console.log("Expetion:" + e.message);
 }
 }
 */
/*  */
//}, false);
// displayData(request.responseText);
/*request.addEventListener("error", function () {
        console.log("Cannot Make AJAX Request");
}, false);
request.send();

AJAX

 1. Create todo-list application with simple interface. Application should look like page with 4 areas.
 Each area should load data via AJAX from 'data[N].json' file (where N - number from 1 to 4).
 Data for 1st area should load with delay in 1 sec, ...,  for 4th area - in 4 sec.
*/