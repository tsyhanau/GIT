var x = 6,
    y = 15,
    z = 4; 
 
x += y - x++ * z ;
alert( x );
z = -- x - y * 5 ;
alert( z );
y /= x + 5 % z ;
alert( y );
z = x++ + y * 5 ;
alert( z );
x = y - x++ * z ;
alert( x );