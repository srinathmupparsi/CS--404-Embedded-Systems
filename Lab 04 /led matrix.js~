var b = require('bonescript');
var port = '/dev/i2c-2'
var matrix = 0x70;
var time = 1000; 


var smile =
	[0x00, 0x3c, 0x00, 0x42, 0x28, 0x89, 0x04, 0x85, 
	 0x04, 0x85, 0x28, 0x89, 0x00, 0x42, 0x00, 0x3c];
var frown =
	[0x3c, 0x00, 0x42, 0x00, 0x85, 0x20, 0x89, 0x00, 
	 0x89, 0x00, 0x85, 0x20, 0x42, 0x00, 0x3c, 0x00];
var neutral =
	[0x3c, 0x3c, 0x42, 0x42, 0xa9, 0xa9, 0x89, 0x89,
	 0x89, 0x89, 0xa9, 0xa9, 0x42, 0x42, 0x3c, 0x3c];
	
var red = [0x00, 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,
	 	   0x00, 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff];
	 	   
var green = [ 0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,0x00,
	 	    0xff, 0x00, 0xff, 0x00, 0xff, 0x00, 0xff,0x00];
var orange = [ 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,0xff,
	 	    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,0xff];
	 
var blank = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

b.i2cOpen(port, matrix);

b.i2cWriteByte(port,  0x21); // Start oscillator (p10)
b.i2cWriteByte(port,  0x81); // Disp on, blink off (p11)
b.i2cWriteByte(port,  0xe7); // Full brightness (page 15)
//b.i2cWriteBytes(port, 0x00, blank);
while(1){
doFrown();
function doFrown() {
	b.i2cWriteBytes(port, 0x00, frown);
}
setTimeout(doNeutral, 1*time);
function doNeutral() {
	b.i2cWriteBytes(port, 0x00, neutral);
}
setTimeout(doSmile, 2*time);
function doSmile() {
	b.i2cWriteBytes(port, 0x00, smile);
}
// Fade the display
setTimeout(doFadeDown, 3*time);
var fade = 0xef;
function doFadeDown() {
    b.i2cWriteByte(port,  fade);
	fade--;
	if(fade >= 0xe0) {
		setTimeout(doFadeDown, time/10);
	} else {
		setTimeout(doFadeUp);
	}
}
function doFadeUp() {
    b.i2cWriteByte(port,  fade);
	fade++;
	if(fade <= 0xef) {
		setTimeout(doFadeUp, time/10);
	}
}
}

var b = require('bonescript');
var pos = {};
var q,w;

b.i2cWriteBytes(port, 0x01, [0x01]); 

setInterval(read , 10);
function read(){
    b.analogRead('P9_36', onX);
}

function onX(x) {
    pos.x = parseFloat(x.value * 100).toFixed(2);//conveerts string to float
   q = pos.x;
    b.analogRead('P9_38', onY);
}

function onY(x) {
	pos.y = parseFloat(x.value * 100).toFixed(2);
	w = pos.y;
	console.log(JSON.stringify(pos));
	check();
}

function check (){
    if(q <= 10 ){
        // b.i2cWriteBytes(port, 0x00, blank);
       b.i2cWriteBytes(port, 0x01, [0xFF]);   //1st column and all leds
    }
    else if(w <= 10){
        // b.i2cWriteBytes(port, 0x00, blank);
        b.i2cWriteBytes(port, 0x03, [0xff]);   //2nd column and all leds
    }
    else if(q >= 90){
        // b.i2cWriteBytes(port, 0x00, blank);
        b.i2cWriteBytes(port, 0x06, [0xff]);   //3rd column and all leds
    }
    else if(w >= 90){
        // b.i2cWriteBytes(port, 0x00, blank);
        b.i2cWriteBytes(port, 0x0A, [0xff]);   //4th column and all leds
    }
    else{
        b.i2cWriteBytes(port, 0x00, blank);  // column and all leds
    }
}


b.i2cWriteBytes(port, 0x04, [0xff]);   //3rd column and all leds*/
