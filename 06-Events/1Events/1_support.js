/**
 * Created by ZYG on 09.08.2016.
 */
"use strict";
var toLeft = document.getElementById("carouselLeft");
var toRight = document.getElementById("carouselRight");
var pictures = document.getElementById("pictures");
var images = document.getElementsByTagName("li");
var max = 0;
for(var i = 0; i < images.length; i++){max += 240;}
var counter = 0;
toLeft.addEventListener("click", function () {
    if (counter > -max/2 ) {
        counter -= 240;
        pictures.style.marginLeft = (counter + "px");
    }
}, false);
toRight.addEventListener("click", function () {
    if (counter < 0 ) {
        counter += 240;
        pictures.style.marginLeft = (counter + "px");
    }
}, false);
