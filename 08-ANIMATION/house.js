/**
 * Created by ZYG on 16.08.2016.
 */
"use strict";
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#975B5B";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 5;

        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.fillRect(0,250,450,350);
        ctx.strokeRect(0,250,450,350);

        ctx.beginPath();
        ctx.arc(95,545,10,(Math.PI/180)*0,(Math.PI/180)*360, false);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.arc(132,545,10,(Math.PI/180)*0,(Math.PI/180)*360, false);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(0,250);
        ctx.lineTo(450,250);
        ctx.lineTo(450,250);
        ctx.lineTo(225,0);
        ctx.lineTo(0,250);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.fillRect(315,50,50,140);

        ctx.beginPath();
        ctx.moveTo(315,190);
        ctx.lineTo(315,50);
        ctx.moveTo(365,190);
        ctx.lineTo(365,50);
        ctx.stroke();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(315,50);
        ctx.bezierCurveTo(315,40,365,40,365,50);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(315,50);
        ctx.bezierCurveTo(315,60,365,60,365,50);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(63,500);
        ctx.bezierCurveTo(73,480,153,480,163,500);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(63,600);
        ctx.lineTo(63,500);
        ctx.moveTo(113,600);
        ctx.lineTo(113,485);
        ctx.moveTo(163,600);
        ctx.lineTo(163,500);
        ctx.stroke();
        ctx.endPath;

        ctx.fillStyle = "#000000";

        ctx.fillRect(40,300,75,50);
        ctx.fillRect(120,300,75,50);
        ctx.fillRect(40,355,75,50);
        ctx.fillRect(120,355,75,50);

        ctx.fillRect(250,300,75,50);
        ctx.fillRect(330,300,75,50);
        ctx.fillRect(250,355,75,50);
        ctx.fillRect(330,355,75,50);

        ctx.fillRect(250,450,75,50);
        ctx.fillRect(330,450,75,50);
        ctx.fillRect(250,505,75,50);
        ctx.fillRect(330,505,75,50);





    }
}