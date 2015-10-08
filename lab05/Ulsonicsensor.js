	var b = require('bonescript');
	var trigger = 'P9_16', 
	echo = 'P9_41', 	     
	ms = 250; 
	var startTime, pulseTime;
	b.pinMode(echo, b.INPUT, 7, 'pulldown', 'fast', doAttach);
	function doAttach(x) {
				if(x.err) {
					console.log('x.err = ' + x.err);
				return;
					  }

				b.attachInterrupt(echo, true, b.FALLING, pingEnd);
			      }
				b.pinMode(trigger, b.OUTPUT);
				b.digitalWrite(trigger, 1); 

	setInterval(ping, ms);

		function ping() {
				b.digitalWrite(trigger, 0);
				startTime = process.hrtime();
				}
		function pingEnd(x) {
				if(x.attached) {
						console.log("Interrupt handler attached");
						return;
						}
				if(startTime)  {
						pulseTime = process.hrtime(startTime);
						b.digitalWrite(trigger, 1);
				console.log('pulseTime = ' + (pulseTime[1]/1000000-0.8).toFixed(3));
						}
				}

 
