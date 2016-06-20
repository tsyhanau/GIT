function func( num){
  var n = num,   
      nFact = 1;
  do{
    nFact *= n;
    n--;    
  }
  while( n != 0 ); 
  alert(nFact);
}             
func(5);  
