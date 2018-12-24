const query = require('./index').query;
module.exports = 
{
	"query": {
		"Haus": function(test) {
			test.equal(query('Haus'), 'Singular, sächlich: das Haus, des Hauses, dem Haus oder dem Hause, das Haus');
			test.done();
		}
	}
}
