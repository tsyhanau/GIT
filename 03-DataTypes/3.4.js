 //Write a function that finds the youngest person in a given array of persons and 
 //prints his/hers full name
 var persons = [
     { firstName : "Willy", lastName: "Petrov", age: 32 },
     { firstName : "James", lastName: "Ivanov", age: 16 },
     { firstName : "Bill", lastName: "Adams", age: 81 },
     { firstName : "Franz", lastName: "Svenson", age: 35 }
   ];
 function findYoungest(arr){
 	var min = 100;
 	for (var i = 0; i < arr.length; i++) {
 		if (arr[i].age < min) {
 			min = arr[i].age;
 		}
 	}
 	for (var i = 0; i < arr.length; i++) {
 		if (arr[i].age === min) {
 			alert(arr[i].firstName + ' ' + arr[i].lastName + ' is very young and strong.');
 			break;
 		}
 	}
 }
 findYoungest(persons);