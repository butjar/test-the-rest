var Server = require('./setup/server');
var Config = require('./setup/applicationProperties');

// start the server
var server = new Server(function(){ console.log('Creating server'); });
server.listen(Config.port);

