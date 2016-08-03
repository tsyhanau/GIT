 //Write a function that groups an array of persons by age, first or last name.
 <!DOCTYPE html>
<html>
<head>
        <title>zero</title>
</head>
<body>
        <h1>one</h1>
        <p> two </p>
        <p>three</p>
        <script type="text/javascript">
          var persons = [
               { firstName : "Willy", lastName: "Petrov", age: 32, group: "A" },
               { firstName : "James", lastName: "Ivanov", age: 16, group: "A" },
               { firstName : "Bill", lastName: "Adams", age: 81, group: "B" },
               { firstName : "Franz", lastName: "Svenson", age: 35, group: "B" }
             ];

              function dynamicSort(property) {
                  var sortOrder = 1;
                  if(property[0] === "-") {
                      sortOrder = -1;
                      property = property.substr(1);
                  }
                  return function (a,b) {
                      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                      return result * sortOrder;
                  }
              }


              persons.sort(dynamicSort("age"));
              alert(JSON.stringify(persons));
              persons.sort(dynamicSort("-age"));
              alert(JSON.stringify(persons));

              persons.sort(dynamicSort("firstName"));

              alert(JSON.stringify(persons));

        </script>
</body>
</html>