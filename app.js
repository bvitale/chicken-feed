var app = require('./lib/app.js');
var debug = require('debug');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	debug('Listening on port ' + server.address().port);
})