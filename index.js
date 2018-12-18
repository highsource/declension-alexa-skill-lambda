'use strict';
var APP_ID = 'amzn1.ask.skill.558a0429-eab4-4e1b-b7fd-0066954fc372';
var Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var declineIntent = function (wort) {
	console.log("declineIntent is called");
	return 'ich dekliniere '+ wort;
};

var handlers = {
	'LaunchRequest': function () {
		console.log("LaunchRequest");
		this.emit('DeclineIntent');
	},
	'DeclineIntent': function () {
		console.log(this.event.request.intent.slots.wort.value);
		console.log("DeclineIntent");
		var wort = this.event.request.intent.slots.wort.value;
		this.emit(':tell', declineIntent(wort));
	}
};