var  m = 5;
var mas = [];
  for (var i = 0; i < m; i++){
    mas[i] = [];
    for (var j = 0; j < m; j++){
      mas[i][j] = Math.round(Math.random()*9 - 5); 
      document.write(mas[i][j] + ' ' );       
    }
  document.write('<br>');  
  } 
document.write('<br>');  
  for (var i = 0; i < m; i++){
    for (var j = 0; j < m; j++){
      if(j===i){
        if(mas[i][j] < 0){
        mas[i][j] = 0;
        }
        else {mas[i][j] = 1;}
        }
       document.write(mas[i][j] + ' ' );
    }
     document.write('<br>'); 
  } 