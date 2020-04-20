

var canvas1 = document.getElementById("myCanvas1");
var ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "#FF0000";
ctx1.fillRect(0, 150, 150, 150);

var canvas2 = document.getElementById("myCanvas2");
var ctx2 = canvas2.getContext("2d");
ctx2.fillStyle = "#FF0000";
ctx2.beginPath();
ctx2.arc(150, 150, 100, 0, 2 * Math.PI);
//ctx2.stroke();
ctx2.fill();

var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");
ctx3.fillStyle = "#ff0000";
ctx3.fillRect(75,75,150,150);