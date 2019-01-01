const query = require('./index').query;
module.exports = 
{
	"query": {
		"Singular" : {
			"Eltern - kein Singular": function(test) {
				test.equal(query('Eltern'),
					'Kein Singular.' +
					' ' +
					'Plural. Nominativ - die Eltern. Genitiv - der Eltern. Dativ - den Eltern. Akkusativ - die Eltern.'
				);
				test.done();
			},
			"Haus - eine singulare Form": function(test) {
				test.equal(query('Haus'),
					'Singular, sächlich. Nominativ - das Haus. Genitiv - des Hauses. Dativ - dem Haus oder dem Hause. Akkusativ - das Haus.' + 
					' ' +
					'Plural. Nominativ - die Häuser. Genitiv - der Häuser. Dativ - den Häusern. Akkusativ - die Häuser.'
				);
				test.done();
			},
			"Chronometer - zwei singulare Formen": function(test) {
				test.equal(query('Chronometer'),
					'Singular, maskulin. Nominativ - der Chronometer. Genitiv - des Chronometers. Dativ - dem Chronometer. Akkusativ - den Chronometer.' +
					' Alternative: ' +
					'Singular, sächlich. Nominativ - das Chronometer. Genitiv - des Chronometers. Dativ - dem Chronometer. Akkusativ - das Chronometer.' +
					' ' +
					'Plural. Nominativ - die Chronometer. Genitiv - der Chronometer. Dativ - den Chronometern. Akkusativ - die Chronometer.'
				);
				test.done();
			},
			"Dschungel - drei singulare Formen": function(test) {
				test.equal(query('Dschungel'),
					'Singular, sächlich. Nominativ - das Dschungel. Genitiv - des Dschungels. Dativ - dem Dschungel. Akkusativ - das Dschungel.' +
					' Alternative: ' +
					'Singular, maskulin. Nominativ - der Dschungel. Genitiv - des Dschungels. Dativ - dem Dschungel. Akkusativ - den Dschungel.' +
					' Alternative: ' +
					'Singular, feminin. Nominativ - die Dschungel. Genitiv - der Dschungel. Dativ - der Dschungel. Akkusativ - die Dschungel.' +
					' ' +
					'Plural. Nominativ - die Dschungeln. Genitiv - der Dschungeln. Dativ - den Dschungeln. Akkusativ - die Dschungeln.' +
					' Alternative: ' +
					'Plural. Nominativ - die Dschungel. Genitiv - der Dschungel. Dativ - den Dschungeln. Akkusativ - die Dschungel.'
				);
				test.done();
			},
			"Avis - vier singulare Formen": function(test) {
				test.equal(query('Avis'),
					'Singular, sächlich. Nominativ - das Avis. Genitiv - des Avis. Dativ - dem Avis. Akkusativ - das Avis.' +
					' Alternative: ' +
					'Singular, maskulin. Nominativ - der Avis. Genitiv - des Avis. Dativ - dem Avis. Akkusativ - den Avis.' +
					' Alternative: ' +
					'Singular, sächlich. Nominativ - das Avis. Genitiv - des Avises. Dativ - dem Avis. Akkusativ - das Avis.' +
					' Alternative: ' +
					'Singular, maskulin. Nominativ - der Avis. Genitiv - des Avises. Dativ - dem Avis. Akkusativ - den Avis.' +
					' ' +
					'Plural. Nominativ - die Avise. Genitiv - der Avise. Dativ - den Avisen. Akkusativ - die Avise.' +
					' Alternative: ' +
					'Plural. Nominativ - die Avis. Genitiv - der Avis. Dativ - den Avis. Akkusativ - die Avis.'
				);
				test.done();
			}
		},
		"Plural" : {
			"Rauch - kein Plural": function(test) {
				test.equal(query('Rauch'),
					'Singular, maskulin. Nominativ - der Rauch. Genitiv - des Rauchs oder des Rauches. Dativ - dem Rauch oder dem Rauche. Akkusativ - den Rauch.' +
					' ' +
					'Kein Plural.'
				);
				test.done();
			},
			"Seite - eine plurale Form": function(test) {
				test.equal(query('seite'),
					'Singular, feminin. Nominativ - die Seite. Genitiv - der Seite. Dativ - der Seite. Akkusativ - die Seite.' + 
					' ' +
					'Plural. Nominativ - die Seiten. Genitiv - der Seiten. Dativ - den Seiten. Akkusativ - die Seiten.'
				);
				test.done();
			},
			"Ross - zwei plurale Formen": function(test) {
				test.equal(query('Ross'),
					'Singular, sächlich. Nominativ - das Ross. Genitiv - des Rosses. Dativ - dem Ross oder dem Rosse. Akkusativ - das Ross.' + 
					' ' +
					'Plural. Nominativ - die Rösser. Genitiv - der Rösser. Dativ - den Rössern. Akkusativ - die Rösser.' +
					' Alternative: ' +
					'Plural. Nominativ - die Rosse. Genitiv - der Rosse. Dativ - den Rossen. Akkusativ - die Rosse.'
				);
				test.done();
			},
			"Kumpel - drei plurale Formen": function(test) {
				test.equal(query('Kumpel'),
					'Singular, maskulin. Nominativ - der Kumpel. Genitiv - des Kumpels. Dativ - dem Kumpel. Akkusativ - den Kumpel.' + 
					' ' +
					'Plural. Nominativ - die Kumpels. Genitiv - der Kumpels. Dativ - den Kumpels. Akkusativ - die Kumpels.' +
					' Alternative: ' +
					'Plural. Nominativ - die Kumpeln. Genitiv - der Kumpeln. Dativ - den Kumpeln. Akkusativ - die Kumpeln.' +
					' Alternative: ' +
					'Plural. Nominativ - die Kumpel. Genitiv - der Kumpel. Dativ - den Kumpeln. Akkusativ - die Kumpel.'
				);
				test.done();
			},
			"Staat - vier plurale Formen": function(test) {
				test.equal(query('Staat'),
					'Singular, maskulin. Nominativ - der Staat. Genitiv - des Staats oder des Staates. Dativ - dem Staat oder dem Staate. Akkusativ - den Staat.' + 
					' ' +
					'Plural. Nominativ - die Stäte. Genitiv - der Stäte. Dativ - den Stäten. Akkusativ - die Stäte.' +
					' Alternative: ' +
					'Plural. Nominativ - die Staat. Genitiv - der Staat. Dativ - den Staaten. Akkusativ - die Staat.' +
					' Alternative: ' +
					'Plural. Nominativ - die Staaten. Genitiv - der Staaten. Dativ - den Staaten. Akkusativ - die Staaten.' +
					' Alternative: ' +
					'Plural. Nominativ - die Staate. Genitiv - der Staate. Dativ - den Staaten. Akkusativ - die Staate.'
				);
				test.done();
			}
		}
	}
}