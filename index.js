'use strict';
var APP_ID = process.env.APP_ID;
console.log("APP_ID: " + APP_ID);
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

const PLURAL_ARTICLES = {
	"nominative" : "die",
	"genitive" : "der",
	"dative" : "den",
	"accusative" : "die"
};

const CASE_NAMES = {
	"nominative" : "Nominativ",
	"genitive" : "Genitiv",
	"dative" : "Dativ",
	"accusative" : "Akkusativ"
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
		var suffix = suffixes[suffixIndex] === '-' ? '' : suffixes[suffixIndex];
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
	var suffixes = inflectionGroup.suffixes || {};

	var articles = GRAMMATICAL_GENDER_ARTICLES[gender];

	text = text + ". " + CASE_NAMES['nominative'] + ' - ' + renderWordForm(articles['nominative'], root, (suffixes.nominative || ["-"]));
	text = text + ". " + CASE_NAMES['genitive']   + ' - ' + renderWordForm(articles['genitive'], root, (suffixes.genitive || ["-"]));
	text = text + ". " + CASE_NAMES['dative']     + ' - ' + renderWordForm(articles['dative'], root, (suffixes.dative || ["-"]));
	text = text + ". " + CASE_NAMES['accusative'] + ' - ' + renderWordForm(articles['accusative'], root, (suffixes.accusative || ["-"]));
	text = text + ".";
	return text;
};

var renderPluralInflectionGroup = function(inflectionGroup) {
	var text = "Plural";
	var root = inflectionGroup.root;
	var suffixes = inflectionGroup.suffixes || {};

	var articles = PLURAL_ARTICLES;

	text = text + ". " + CASE_NAMES['nominative'] + ' - ' + renderWordForm(articles['nominative'], root, (suffixes.nominative || ["-"]));
	text = text + ". " + CASE_NAMES['genitive']   + ' - ' + renderWordForm(articles['genitive'], root, (suffixes.genitive || ["-"]));
	text = text + ". " + CASE_NAMES['dative']     + ' - ' + renderWordForm(articles['dative'], root, (suffixes.dative || ["-"]));
	text = text + ". " + CASE_NAMES['accusative'] + ' - ' + renderWordForm(articles['accusative'], root, (suffixes.accusative || ["-"]));
	text = text + ".";
	return text;
};

var queryInflection = function(word, resolve, reject) {
	let key = word.toLowerCase();
	console.log("Querying for [" + word + "] by key [" + key + "].");
	var inflection = entryByWord[key].inflections[0];
	console.log("Querying for [" + word + "] finished:", JSON.stringify(inflection, null, 2));
	resolve(inflection);
};

var declineIntent = function (word, resolve, reject) {
	let handleResult = function(entry) {
		if (entry) {
			var result = "";
			if (entry.singular && entry.singular.length > 0) {
				for (var sindex = 0; sindex < entry.singular.length; sindex++) {
					if (sindex > 0 ) {
						result = result + " Alternative: ";
					}
					var inflectionGroup = entry.singular[sindex];
					result = result + renderSingularInflectionGroup(inflectionGroup);
				}
			} else  {
				result = result + "Kein Singular.";
			}
        
			result = result + " ";
        
			if (entry.plural && entry.plural.length > 0) {
				for (var sindex = 0; sindex < entry.plural.length; sindex++) {
					if (sindex > 0 ) {
						result = result + " Alternative: ";
					}
					var inflectionGroup = entry.plural[sindex];
					result = result + renderPluralInflectionGroup(inflectionGroup);
				}
			} else  {
				result = result + "Kein Plural.";
			}
			resolve("Erfolg! " + result);
		} else {
			resolve("Das Wort " + word + " ist mir leider nicht bekannt.");
		}
	};

	queryInflection(word, handleResult, reject);
};

exports.query = declineIntent;

var handlers = {
	'LaunchRequest': function () {
		console.log("LaunchRequest");
		this.emit(':ask', 'Welches Wort soll ich deklinieren?');
	},
	'DeclineIntent': function () {
		console.log(this.event.request.intent.slots.wort);
		console.log("DeclineIntent");
		var wort = this.event.request.intent.slots.wort.value;
		let that = this;
		let resolve = function(result)
		{
			that.emit(':tell', result);
		};
		let reject = function(err) {
			console.error(err);
			that.emit(':tell', "Leider ist ein Fehler aufgetreten.");
		};
		declineIntent(wort, resolve, reject);
	}
};

console.log("Dataset contains [" + dataset.length + "] entries.");

console.log("Indexing dataset by word.");
for (var index = 0; index < dataset.length; index++) {
	var entry = dataset[index];
	if (entry.word) {
		let key = entry.word.toLowerCase();
		entryByWord[key] = entry;
	}
	else {
		console.log("Invalid entry:");
		console.log(entry);
	}
}
console.log("Indexing finished.");