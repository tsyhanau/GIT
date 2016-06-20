var  m = 10;
var mas = [];
//rectangle
  for (var i = 0; i < m; i++){
    mas[i] = [];

    for (var j = 0; j < m; j++){
        mas[i][j] = "* ";
        document.write(mas[i][j] + ' ' );       
    }
  document.write('<br>');  
  }

//rectangular triangle
  for (var i = 0; i < m; i++){
    mas[i] = [];

    for (var j = i+1; j > 0; j--){
        mas[i][j] = "* ";
        document.write(mas[i][j] + ' ' );       
    }
  document.write('<br>');  
  }
//equilateral triangle
     for(var row = 1; row < m; row++){
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }

        var astericksCounter = (row * 2) - 1;
        for( var ast  = 0; ast < astericksCounter; ast++){
          document.write("* ");
        }
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }
        document.write("<br>");
      }
//rhombus
      for(var row = 1; row < m; row++){
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }

        var astericksCounter = (row * 2) - 1;
        for( var ast  = 0; ast < astericksCounter; ast++){
          document.write("* ");
        }
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }
        document.write("<br>");
      }

      for(var row = m; row > 0; row--){
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }

        var astericksCounter = (row * 2) - 1;
        for( var ast  = 0; ast < astericksCounter; ast++){
          document.write("* ");
        }
        for (var j = 0; j < (m-row); j++){
          document.write("0 ");
        }
        document.write("<br>");
      }
