 var func = function(N){
    var arr = [],
          n = 12;
        for (var i = 0; i < n; i++) {
          arr[i] = Math.round(Math.random()*100);
          document.write(arr[i] + ', ');
        }
    document.write('<br>');
    
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max){max = arr[i];}
        }
    document.write("maximum value is: " + max);
    document.write('<br>');
    
    var min = max;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < min){min = arr[i];}
        }
    document.write("minimum value is: " + min);
    document.write('<br>');
    
    var avr,
        sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        avr = sum/arr.length;
        }
    document.write("total amount is: " + sum + '<br>');   
    document.write("arithmetic average is: " + avr);
    document.write('<br>');
    
    
    for (var i = 0; i < arr.length; i++) {
        if( arr[i] % 2 !== 0 ){document.write(arr[i] + " ,");}
        }     
}
func(12);

