'use strict';
var APP_ID = 'amzn1.ask.skill.558a0429-eab4-4e1b-b7fd-0066954fc372';
var Alexa = require("alexa-sdk");
var dataset = require("./dataset");
const entryByWord = {};
const GRAMMATICAL_GENDERS = {
	"MASCULINE": "maskulin",
	"FEMININE": "feminin",
	"NEUTER": "sächlich"
};

const GRAMMATICAL_GENDER_ARTICLES = {
	"MASCULINE": {
	      "nominative" : "der",
	      "genitive" : "des",
	      "dative" : "dem",
	      "accusative" : "den"
	},
	"FEMININE": {
	      "nominative" : "die",
	      "genitive" : "der",
	      "dative" : "der",
	      "accusative" : "die"
	},
	"NEUTER": {
	      "nominative" : "das",
	      "genitive" : "des",
	      "dative" : "dem",
	      "accusative" : "das"
	}
};


exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var renderWordForm = function(article, root, suffixes) {
	var result = '';
	for (var suffixIndex = 0; suffixIndex < suffixes.length; suffixIndex++) {
		var suffix = suffixes[suffixIndex];
		if (suffixIndex > 0) {
			result = result + ' oder ';
		}
		result = result + article + ' ' + root + suffix;
	}
	return result;
}

var renderSingularInflectionGroup = function(inflectionGroup) {
	var text = "Singular";
	var gender = inflectionGroup.gender;
	text = text + ", " + GRAMMATICAL_GENDERS[gender];
	var root = inflectionGroup.root;
	var suffixes = inflectionGroup.sufficies || {};

	var articles = GRAMMATICAL_GENDER_ARTICLES[gender];
	console.log(suffixes);

	text = text + ': ' + renderWordForm(articles['nominative'], root, (suffixes.nominative || [""]));
	text = text + ', ' + renderWordForm(articles['genitive'], root, (suffixes.genitive || [""]));
	text = text + ', ' + renderWordForm(articles['dative'], root, (suffixes.dative || [""]));
	text = text + ', ' + renderWordForm(articles['accusative'], root, (suffixes.accusative || [""]));
	return text;
};

var declineIntent = function (word) {
	console.log("Querying for [" + word + "].");
	var entry = entryByWord[word];
	console.log("Querying for [" + word + "] finished.");

	console.log(entry);

	if (entry) {
		var result = "";
		if (entry.singular && entry.singular.length > 0) {
			for (var sindex = 0; sindex < entry.singular.length; sindex++) {
				var inflectionGroup = entry.singular[sindex];
				result = result + renderSingularInflectionGroup(inflectionGroup);
			}
		}

		return result;
	} else {
		return "Das Wort " + word + " ist mir leider nicht bekannt";
	}
};

exports.query = declineIntent;

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

console.log("Dataset contains [" + dataset.length + "] entries.");

console.log("Indexing dataset by word.");
for (var index = 0; index < dataset.length; index++) {
	var entry = dataset[index];
	if (entry.word) {
		entryByWord[entry.word] = entry;
	}
	else {
		console.log("Invalid entry:");
		console.log(entry);
	}
}
console.log("Indexing finished.");