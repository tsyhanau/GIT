/**
 * Created by ZYG on 25.08.2016.
 */
  var i = 1;
  for(i = 1; i < 5; i++) {
      setTimeout(function () {
          
          var request = new XMLHttpRequest();
          var url = ("data" + i + ".json");
          request.open("GET", url, true);
          request.send();
          request.onreadystatechange = function () {
              if (request.readyState != 4) return;
              if (request.status == 200) {

                  var returnData = request.responseText;
                  var li = document.createElement("li");
                  var obj = (JSON.parse(returnData));
                  var str = JSON.parse(returnData, function (key, value) {
                      if (key) li.innerHTML = (value);
                  });
                  document.getElementById("todolist").appendChild(li);
                  
              }
              else {
                  alert("Server Error: " + request.status);
              }
          }
          
      }, i * 1000);
  }