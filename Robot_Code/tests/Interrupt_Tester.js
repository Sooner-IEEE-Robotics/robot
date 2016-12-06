var bone = require('bonescript');

var inputPin = "P8_12";

bone.pinMode(inputPin, bone.INPUT);

bone.attachInterrupt(inputPin, true, bone.CHANGE, interruptCallback);
//setTimeout(detach, 12000);

function interruptCallback(x) {
	//var j = JSON.parse(x);
	var val = x.value;
    console.log(val);
}

function detach() {
    bone.detachInterrupt(inputPin);
    console.log('Interrupt detached');
}

process.on('SIGINT', function () {
	detach();
});