const query = require('./index').query;
module.exports = 
{
	"query": {
		"Singular" : {
			"Eltern - kein Singular": function(test) {
				test.equal(query('Eltern'),
					'Kein Singular.' +
					' ' +
					'Plural: die Eltern, der Eltern, den Eltern, die Eltern.'
				);
				test.done();
			},
			"Haus - eine singulare Form": function(test) {
				test.equal(query('Haus'),
					'Singular, sächlich: das Haus, des Hauses, dem Haus oder dem Hause, das Haus.' + 
					' ' +
					'Plural: die Häuser, der Häuser, den Häusern, die Häuser.'
				);
				test.done();
			},
			"Chronometer - zwei singulare Formen": function(test) {
				test.equal(query('Chronometer'),
					'Singular, maskulin: der Chronometer, des Chronometers, dem Chronometer, den Chronometer.' +
					' Alternative: ' +
					'Singular, sächlich: das Chronometer, des Chronometers, dem Chronometer, das Chronometer.' +
					' ' +
					'Plural: die Chronometer, der Chronometer, den Chronometern, die Chronometer.'
				);
				test.done();
			},
			"Dschungel - drei singulare Formen": function(test) {
				test.equal(query('Dschungel'),
					'Singular, sächlich: das Dschungel, des Dschungels, dem Dschungel, das Dschungel.' +
					' Alternative: ' +
					'Singular, maskulin: der Dschungel, des Dschungels, dem Dschungel, den Dschungel.' +
					' Alternative: ' +
					'Singular, feminin: die Dschungel, der Dschungel, der Dschungel, die Dschungel.' +
					' ' +
					'Plural: die Dschungeln, der Dschungeln, den Dschungeln, die Dschungeln.' +
					' Alternative: ' +
					'Plural: die Dschungel, der Dschungel, den Dschungeln, die Dschungel.'
				);
				test.done();
			},
			"Avis - vier singulare Formen": function(test) {
				test.equal(query('Avis'),
					'Singular, sächlich: das Avis, des Avis, dem Avis, das Avis.' +
					' Alternative: ' +
					'Singular, maskulin: der Avis, des Avis, dem Avis, den Avis.' +
					' Alternative: ' +
					'Singular, sächlich: das Avis, des Avises, dem Avis, das Avis.' +
					' Alternative: ' +
					'Singular, maskulin: der Avis, des Avises, dem Avis, den Avis.' +
					' ' +
					'Plural: die Avise, der Avise, den Avisen, die Avise.' +
					' Alternative: ' +
					'Plural: die Avis, der Avis, den Avis, die Avis.'
				);
				test.done();
			}
		},
		"Plural" : {
			"Rauch - kein Plural": function(test) {
				test.equal(query('Rauch'),
					'Singular, maskulin: der Rauch, des Rauchs oder des Rauches, dem Rauch oder dem Rauche, den Rauch.' +
					' ' +
					'Kein Plural.'
				);
				test.done();
			},
			"Seite - eine plurale Form": function(test) {
				test.equal(query('Seite'),
					'Singular, feminin: die Seite, der Seite, der Seite, die Seite.' + 
					' ' +
					'Plural: die Seiten, der Seiten, den Seiten, die Seiten.'
				);
				test.done();
			},
			"Ross - zwei plurale Formen": function(test) {
				test.equal(query('Ross'),
					'Singular, sächlich: das Ross, des Rosses, dem Ross oder dem Rosse, das Ross.' + 
					' ' +
					'Plural: die Rösser, der Rösser, den Rössern, die Rösser.' +
					' Alternative: ' +
					'Plural: die Rosse, der Rosse, den Rossen, die Rosse.'
				);
				test.done();
			},
			"Kumpel - drei plurale Formen": function(test) {
				test.equal(query('Kumpel'),
					'Singular, maskulin: der Kumpel, des Kumpels, dem Kumpel, den Kumpel.' + 
					' ' +
					'Plural: die Kumpels, der Kumpels, den Kumpels, die Kumpels.' +
					' Alternative: ' +
					'Plural: die Kumpeln, der Kumpeln, den Kumpeln, die Kumpeln.' +
					' Alternative: ' +
					'Plural: die Kumpel, der Kumpel, den Kumpeln, die Kumpel.'
				);
				test.done();
			},
			"Staat - vier plurale Formen": function(test) {
				test.equal(query('Staat'),
					'Singular, maskulin: der Staat, des Staats oder des Staates, dem Staat oder dem Staate, den Staat.' + 
					' ' +
					'Plural: die Stäte, der Stäte, den Stäten, die Stäte.' +
					' Alternative: ' +
					'Plural: die Staat, der Staat, den Staaten, die Staat.' +
					' Alternative: ' +
					'Plural: die Staaten, der Staaten, den Staaten, die Staaten.' +
					' Alternative: ' +
					'Plural: die Staate, der Staate, den Staaten, die Staate.'
				);
				test.done();
			}
		}
	}
}