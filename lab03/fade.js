
var b = require('bonescript');
// setup starting conditions
var awValue = 0.01;
var awValue1 = 1;
var awDirection = 1;
var awDirection1 = -1
var awPin = "P9_14";
var awPin1 = "P9_16";
// configure pin
b.pinMode(awPin, b.ANALOG_OUTPUT);
b.pinMode(awPin1, b.ANALOG_OUTPUT);
// call function to update brightness every 10ms
setInterval(fade, 20);
// function to update brightness
function fade() {
b.analogWrite(awPin, awValue);
awValue = awValue + (awDirection*0.01);
if(awValue > 1.0) { awValue = 1.0; awDirection = -1; }
else if(awValue <= 0.01) { awValue = 0.01; awDirection = 1; }
b.analogWrite(awPin1, awValue1);
awValue1 = awValue1 + (awDirection1*0.01);
if(awValue1 > 1.0) { awValue1 = 1.0; awDirection1 = -1; }
else if(awValue1 <= 0.01) { awValue1 = 0.01; awDirection1 = 1; }
}
