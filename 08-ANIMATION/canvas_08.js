/**
 * Created by ZYG on 14.08.2016.
 */
"use strict";
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath(); //face
            ctx.moveTo(20,255);
            ctx.bezierCurveTo(20,400,300,400,295,255);
            ctx.lineWidth = 8;
            ctx.strokeStyle = "#22545F";
            ctx.stroke();
            ctx.fillStyle = "#90CAD7";
            ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(20,255);
        ctx.bezierCurveTo(20,110,300,110,295,255);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath(); //left eye
        ctx.moveTo(45,215);
        ctx.bezierCurveTo(45,235,85,235,85,215);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(45,215);
        ctx.bezierCurveTo(45,195,85,195,85,215);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath(); //right eye
        ctx.moveTo(135,215);
        ctx.bezierCurveTo(135,235,175,235,175,215);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(135,215);
        ctx.bezierCurveTo(135,195,175,195,175,215);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(65,295); //mouth
        ctx.bezierCurveTo(70,280,155,290,150,310);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(65,295);
        ctx.bezierCurveTo(60,320,150,340,150,310);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.lineJoin = "bevel"; //nouse
        ctx.moveTo(110,215);
        ctx.lineTo(85,265);
        ctx.lineTo(110,265);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.fillStyle = "#22545F";

        ctx.beginPath();
        ctx.moveTo(60,200); //left pupil
        ctx.bezierCurveTo(50,200,50,227,60,227);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(60,200); //left pupil
        ctx.bezierCurveTo(70,200,70,227,60,227);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath(); // right pupil
        ctx.moveTo(150,205);
        ctx.bezierCurveTo(140,200,140,227,150,227);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(150,205);
        ctx.bezierCurveTo(160,200,160,227,150,227);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.fillStyle = "#396693";

        ctx.beginPath(); // cap footer
        ctx.moveTo(5,165);
        ctx.bezierCurveTo(5,195,295,195,295,165);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(5,165);
        ctx.bezierCurveTo(5,135,295,135,295,165);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;



        ctx.beginPath();
        ctx.moveTo(80,140);
        ctx.bezierCurveTo(80,170,210,170,210,140);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(80,140);
        ctx.lineTo(80,25);
        ctx.moveTo(210,25);
        ctx.lineTo(210,140);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;


        ctx.fillRect(80,25,130,115);

        ctx.beginPath();  // cap header
        ctx.moveTo(80,25);
        ctx.bezierCurveTo(80,0,210,0,210,25);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(80,25);
        ctx.bezierCurveTo(80,50,210,50,210,25);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

    }
}



/*ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill;*/
