function Person(firstname, lastname, age){
	try {
		if(typeof(firstname)=="string" && firstname.length >= 3 && firstname.length < 21 && !(/[а-яА-Я0-9]/.test(firstname))) {
			this.firstname = firstname;
		}
		else {
	    throw new Error("You can use only latin letters. The quantity of characters shall be from 3 to 20." + " " + firstname);
		}
	}
	catch (er) {
      alert(er.message);
  	}
  	try {
	  	if(typeof(lastname)=="string" && lastname.length >= 3 && lastname.length < 21 && !(/[а-яА-Я0-9]/.test(lastname))) {
			this.lastname = lastname;
		}
		else {
	    throw new Error("You can use only latin letters. The quantity of characters shall be from 3 to 20." + " " + lastname);
		}
	}
	catch (er) {
      alert(er.message);
  	}
  	try {
		if(typeof(age)!=="number"){
	  		age = parseInt(age, 10);
		    if(typeof(age)=="number" && age >= 0 && age < 151){
		    	this.age = age;
		    }
		  	 else {
		    	throw new Error("You can use unly digits from 0 to 150." + " " + age);
			}
	    } 
	}
	catch (er) {
      alert(er.message);
  	}
    var fullname;
	

}

Person.prototype = {

	getFullname: function() {
		return (this.fullname = (this.firstname + " " + this.lastname).toUpperCase()); 
	},
	setFullname: function(name) {
		var separate = name.split(" ");
		this.firstname = separate[0].toUpperCase(); 
		this.lastname = separate[1].toUpperCase(); 
	},
	introduce: function(fullname, age){ return ("Hello! My name is " + this.fullname + " and I am " + this.age + " years old");}
}


var ivan = new Person("Ivan", "Petrov", "25");
ivan.setFullname("Mary Karry");
alert(ivan.getFullname());
alert(ivan.introduce());




