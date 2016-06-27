// You are given a text. Write a function that changes the text in all regions:
//    * `<upcase>text</upcase>` to uppercase.
 //   * `<lowcase>text</lowcase>` to lowercase
 //   * `<mixcase>text</mixcase>` to mix casing (random)


<!DOCTYPE html>
<html>
<head>
        <title>zero</title>
</head>
<body>
        <h1>one</h1> 
         <p> two </p>
         <p>three four five !!!</p>
        <script type="text/javascript">	

                var all = document.getElementsByTagName("html");
                
                var text = "";
                for (var i = 0; i < all.length; i++) {
                        text += all[i].textContent;
                }	
                document.write(text);

        </script> 
</body>
</html>