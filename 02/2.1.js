function func( A , B ){
  var a = A + 1, // промежуток между А и В не включает А и В
      b = B,
      arr = [],
      sum = 0,
      i;

  for (i=0; i<(b-a); i++){
    arr[i] = a + i;
    sum += arr[i];   
                    
  } 
  document.write( "Sum is: " + sum ); 
  document.write( "   Odd values: " );
  for (i=0; i<(b-a); i++){
    arr[i] = a + i;
    if( arr[i] % 2 != 0){
        document.write( arr[i] + "  ");
    }
  }    
}
func(2, 15);  