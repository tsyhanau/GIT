/**
 * Created by ZYG on 16.08.2016.
 */
"use strict";
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#90CAD7";
        ctx.strokeStyle = "#22545F";
        ctx.lineWidth = 8;
        
        ctx.beginPath();
        ctx.arc(100,250,100,(Math.PI/180)*0,(Math.PI/180)*360, false);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.beginPath();
        ctx.arc(450,250,100,(Math.PI/180)*0,(Math.PI/180)*360, false);
        ctx.stroke();
        ctx.fill();
        ctx.endPath;

        ctx.lineWidth = 3;

        ctx.beginPath();
        ctx.arc(250,240,25,(Math.PI/180)*0,(Math.PI/180)*360, false);
        ctx.stroke();
        ctx.endPath;

        ctx.beginPath();
        ctx.moveTo(135,80);
        ctx.lineTo(215,80);

        ctx.moveTo(200,125);
        ctx.lineTo(425,125);
        ctx.lineTo(250,240);
        ctx.lineTo(90,240);
        ctx.lineTo(200,125);

        ctx.moveTo(340,85);
        ctx.lineTo(415,60);
        ctx.lineTo(465,0);

        ctx.moveTo(415,60);
        ctx.lineTo(450,240);

        ctx.moveTo(175,80);
        ctx.lineTo(250,240);

        ctx.moveTo(220,200);
        ctx.lineTo(235,220);

        ctx.moveTo(267,257);
        ctx.lineTo(285,280);

        ctx.stroke();
        ctx.endPath;
    }
}