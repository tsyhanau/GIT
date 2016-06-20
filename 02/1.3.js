var a = function(rad, high){
  var r = rad;
  var h = high;
  var vol = (Math.PI) * r * 2 * h;
  var sqr = 2 * (Math.PI) * r * (r + h);
  
  var c = alert("Volume is " + vol  + "  Square is " + sqr);
   return c; 
};
a(2,7);
