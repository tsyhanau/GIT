
//Write a function that makes a deep copy of an object. 
//The function should work for both primitive and reference types.


function objCopy(obj) {
            if (obj == null || typeof obj != "object") {
                return obj;
            }
            else if (obj instanceof Array) {
                var arrayCopy = new Array();
                for (var i = 0; i < obj.length; i++) {
                    arrayCopy[i] = objCopy(obj[i]);
                }
                return arrayCopy;
            }
            else if (obj instanceof Object) {
                var objectCopy = new Object();
                for (var attribute in obj) {
                    if (obj.hasOwnProperty(attribute)) {
                        objectCopy[attribute] = objCopy(obj[attribute]);
                    }
                }
                return objectCopy;
            }
        }

var p = "225dsf";
var pp = { ppp: '1234'}
document.write(objCopy(pp)); document.write(pp.ppp);
