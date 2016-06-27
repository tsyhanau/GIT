  // Write functions for working with shapes in standard Planar coordinate system
  //  * Points are represented by coordinates `P(X, Y)`
   // * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
   // * Calculate the distance between two points
   // * Check if three segment lines can form a triangle


	    var p1 = point(4, 6);
	    var p2 = point(3, 3);
	    var p3 = point(1, 5);
	    var l1 = line(p1, p2);
	    var l2 = line(p2, p3);
	    var l3 = line(p1, p3);
	    var n = calculateDistance(p3, p2);
	    jsConsole.writeLine(n);
	    triangle(l1, l2, l3);
	    function point(x, y) {
	        return {x: x, y: y};
	    }
				   
	    function line(point1, point2) {
	        return { pointA: point1, pointB: point2 };
	    }
	    function calculateDistance(point1, point2) {
	        return parseInt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2));
	    }
	    function triangle(line1, line2, line3) {
	        var a = calculateDistance(line1.pointA, line1.pointB);
	        var b = calculateDistance(line2.pointA, line2.pointB);
	        var c = calculateDistance(line3.pointA, line3.pointB);
	        if ((a + b > c) && (a + c > b) && (b + c > a)) {
	            jsConsole.writeLine("Formation of triangle is possible");
	        }
	        else {
	            document.write("Formation of triangle is impossible.");
	        }
	    } 




