

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


function canv3() {
var canvas3 = document.getElementById("myCanvas3");
var ctx3 = canvas3.getContext("2d");
var grd = ctx3.createLinearGradient(0,0,150,150);
grd.addColorStop(0,'#ccc');
grd.addColorStop(1,'#525252');
ctx3.fillStyle = grd;
// ctx3.fillStyle = "#ff0000";
ctx3.fillRect(75,75,150,150);
ctx3.strokeStyle = 'red';
ctx3.lineWidth = 3;
ctx3.strokeRect(75,75,150,150);
}
canv3();

function canv4() {
    var canvas4 = document.getElementById("myCanvas4");
    var ctx4 = canvas4.getContext("2d");
    var grd = ctx4.createRadialGradient(150,150,0,150,150,75);
    grd.addColorStop(0,'#ccc');
    grd.addColorStop(1,'#525252');
    ctx4.fillStyle = grd;
    // ctx3.fillStyle = "#ff0000";
    ctx4.fillRect(75,75,150,150);
    ctx4.strokeStyle = '#fff';
    ctx4.lineWidth = 3;
    ctx4.strokeRect(75,75,150,150);
}
canv4();

function canv5() {
    var canvas5 = document.getElementById("myCanvas5");
    var ctx5 = canvas5.getContext("2d");
    ctx5.font = '30px Roboto';
    ctx5.textAlign = 'center';
    ctx5.fillStyle = 'red';
    // ctx5.strokeStyle = 'red';
    // ctx5.strokeText('Testing', 150, 150);
    ctx5.fillText('Testing', 150, 150);
    // ctx5.fillText('Testing',canvas.width/2,canvas.height/2);
    
    // var grd = ctx5.createRadialGradient(150,150,0,150,150,75);
    // grd.addColorStop(0,'#ccc');
    // grd.addColorStop(1,'#525252');
    // ctx5.fillStyle = grd;
    // // ctx3.fillStyle = "#ff0000";
    // ctx5.fillRect(75,75,150,150);
    // ctx5.strokeStyle = '#fff';
    // ctx5.lineWidth = 3;
    // ctx5.strokeRect(75,75,150,150);
}
canv5();