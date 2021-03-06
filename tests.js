const query = require('./index').query;
module.exports = 
{
	"query": {
		"Singular" : {
			"Eltern - kein Singular": function(test) {
				query('Eltern', function(result) {
					test.equal(result,
						'Kein Singular.' +
						' ' +
						'Plural. Nominativ - die Eltern. Genitiv - der Eltern. Dativ - den Eltern. Akkusativ - die Eltern.'
					);
					test.done();
				});
			},
			"Haus - eine singulare Form": function(test) {
				query('Haus', function(result) {
					test.equal(result,
						'Singular, sächlich. Nominativ - das Haus. Genitiv - des Hauses. Dativ - dem Haus oder dem Hause. Akkusativ - das Haus.' + 
						' ' +
						'Plural. Nominativ - die Häuser. Genitiv - der Häuser. Dativ - den Häusern. Akkusativ - die Häuser.'
					);
					test.done();
				});
			},
			"Chronometer - zwei singulare Formen": function(test) {
				query('Chronometer', function(result) {
					test.equal(result,
						'Singular, sächlich. Nominativ - das Chronometer. Genitiv - des Chronometers. Dativ - dem Chronometer. Akkusativ - das Chronometer.' +
						' Alternative: ' +
						'Singular, maskulin. Nominativ - der Chronometer. Genitiv - des Chronometers. Dativ - dem Chronometer. Akkusativ - den Chronometer.' +
						' ' +
						'Plural. Nominativ - die Chronometer. Genitiv - der Chronometer. Dativ - den Chronometern. Akkusativ - die Chronometer.'
					);
					test.done();
				});
			},
			"Dschungel - drei singulare Formen": function(test) {
				query('Dschungel', function(result) {
					test.equal(result,
						'Singular, maskulin. Nominativ - der Dschungel. Genitiv - des Dschungels. Dativ - dem Dschungel. Akkusativ - den Dschungel.' +
						' Alternative: ' +
						'Singular, sächlich. Nominativ - das Dschungel. Genitiv - des Dschungels. Dativ - dem Dschungel. Akkusativ - das Dschungel.' +
						' Alternative: ' +
						'Singular, feminin. Nominativ - die Dschungel. Genitiv - der Dschungel. Dativ - der Dschungel. Akkusativ - die Dschungel.' +
						' ' +
						'Plural. Nominativ - die Dschungel. Genitiv - der Dschungel. Dativ - den Dschungeln. Akkusativ - die Dschungel.' +
						' Alternative: ' +
						'Plural. Nominativ - die Dschungeln. Genitiv - der Dschungeln. Dativ - den Dschungeln. Akkusativ - die Dschungeln.'
					);
					test.done();
				});
			},
			"Avis - vier singulare Formen": function(test) {
				query('Avis', function(result) {
					test.equal(result,
						'Singular, maskulin. Nominativ - der Avis. Genitiv - des Avis. Dativ - dem Avis. Akkusativ - den Avis.' +
						' Alternative: ' +
						'Singular, sächlich. Nominativ - das Avis. Genitiv - des Avis. Dativ - dem Avis. Akkusativ - das Avis.' +
						' Alternative: ' +
						'Singular, maskulin. Nominativ - der Avis. Genitiv - des Avises. Dativ - dem Avis. Akkusativ - den Avis.' +
						' Alternative: ' +
						'Singular, sächlich. Nominativ - das Avis. Genitiv - des Avises. Dativ - dem Avis. Akkusativ - das Avis.' +
						' ' +
						'Plural. Nominativ - die Avis. Genitiv - der Avis. Dativ - den Avis. Akkusativ - die Avis.' +
						' Alternative: ' +
						'Plural. Nominativ - die Avise. Genitiv - der Avise. Dativ - den Avisen. Akkusativ - die Avise.'
					);
					test.done();
				});
			}
		},
		"Plural" : {
			"Rauch - kein Plural": function(test) {
				query('Rauch', function(result) {
					test.equal(result,
						'Singular, maskulin. Nominativ - der Rauch. Genitiv - des Rauchs oder des Rauches. Dativ - dem Rauch oder dem Rauche. Akkusativ - den Rauch.' +
						' ' +
						'Kein Plural.'
					);
					test.done();
				});
			},
			"Seite - eine plurale Form": function(test) {
				query('seite', function(result) {
					test.equal(result,
						'Singular, feminin. Nominativ - die Seite. Genitiv - der Seite. Dativ - der Seite. Akkusativ - die Seite.' + 
						' ' +
						'Plural. Nominativ - die Seiten. Genitiv - der Seiten. Dativ - den Seiten. Akkusativ - die Seiten.'
					);
					test.done();
				});
			},
			"Ross - zwei plurale Formen": function(test) {
				query('Ross', function(result) {
					test.equal(result,
						'Singular, sächlich. Nominativ - das Ross. Genitiv - des Rosses. Dativ - dem Ross oder dem Rosse. Akkusativ - das Ross.' + 
						' ' +
						'Plural. Nominativ - die Rosse. Genitiv - der Rosse. Dativ - den Rossen. Akkusativ - die Rosse.' +
						' Alternative: ' +
						'Plural. Nominativ - die Rösser. Genitiv - der Rösser. Dativ - den Rössern. Akkusativ - die Rösser.'
					);
					test.done();
				});
			},
			"Kumpel - drei plurale Formen": function(test) {
				query('Kumpel', function(result) {
					test.equal(result,
						'Singular, maskulin. Nominativ - der Kumpel. Genitiv - des Kumpels. Dativ - dem Kumpel. Akkusativ - den Kumpel.' + 
						' ' +
						'Plural. Nominativ - die Kumpel. Genitiv - der Kumpel. Dativ - den Kumpeln. Akkusativ - die Kumpel.' +
						' Alternative: ' +
						'Plural. Nominativ - die Kumpels. Genitiv - der Kumpels. Dativ - den Kumpels. Akkusativ - die Kumpels.' +
						' Alternative: ' +
						'Plural. Nominativ - die Kumpeln. Genitiv - der Kumpeln. Dativ - den Kumpeln. Akkusativ - die Kumpeln.'
					);
					test.done();
				});
			},
			"Staat - vier plurale Formen": function(test) {
				query('Staat', function(result) {
					test.equal(result,
						'Singular, maskulin. Nominativ - der Staat. Genitiv - des Staats oder des Staates. Dativ - dem Staat oder dem Staate. Akkusativ - den Staat.' + 
						' ' +
						'Plural. Nominativ - die Staaten. Genitiv - der Staaten. Dativ - den Staaten. Akkusativ - die Staaten.' +
						' Alternative: ' +
						'Plural. Nominativ - die Stäte. Genitiv - der Stäte. Dativ - den Stäten. Akkusativ - die Stäte.' +
						' Alternative: ' +
						'Plural. Nominativ - die Staat. Genitiv - der Staat. Dativ - den Staaten. Akkusativ - die Staat.' +
						' Alternative: ' +
						'Plural. Nominativ - die Staate. Genitiv - der Staate. Dativ - den Staaten. Akkusativ - die Staate.'
					);
					test.done();
				});
			}
		}
	}
}