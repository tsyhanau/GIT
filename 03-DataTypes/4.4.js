// You are given a text. Write a function that changes the text in all regions:
//    * `<upcase>text</upcase>` to uppercase.
 //   * `<lowcase>text</lowcase>` to lowercase
 //   * `<mixcase>text</mixcase>` to mix casing (random)


<!DOCTYPE html>
<html>
<head>
	<title>test</title>
</head>
<body>
	
		We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anythiNG</lowcase> else.
	

	<script type="text/javascript">			
		
		var all = document.getElementsByTagName("*");

		for (var i=0, max=all.length; i < max; i++) {
     

				var element = all[i];
				var tag = element.tagName.toLowerCase();
				var text = element.innerHTML;
				//console.log(tag.toLowerCase());
				switch(tag) {
			    case 'upcase':
					element.innerHTML = text.toUpperCase();
			        break;
			    case 'lowcase':
					element.innerHTML = text.toLowerCase();
			        break;
			    case 'mixcase':
					element.innerHTML = mixcase(text);
			        break;
			    default:
			        	break;
			   	}
			
		}

		function mixcase(text) {
			var mixcaseText = "";
			for (var i = 0; i < text.length; i++) {
				if(Math.floor((Math.random() * 3) + 1) % 3 === 0)
					mixcaseText+=text[i].toUpperCase();
				else
					mixcaseText+=text[i];
			}
			return mixcaseText;
			
		}

	</script>
</body>
</html>