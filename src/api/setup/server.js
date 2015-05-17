// Application server
 
// http://expressjs.com/ 
// https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

var express = require('express');
var bodyParser = require('body-parser');
var CrudResource = require('../lib/crudResource');
var Resources = require('../lib/resources');

var Server = function(callback){

  var app = express();
  var router = express.Router();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Creates CRUD resource for all resources defined in /api/setup/resources.json
  for(var i in Resources.resources){
    var resource = Resources.resources[i];
    router = new CrudResource(router, resource).router;
  }

  // Base route
  router.get('/', function(req, res) {
    res.json({ message: 'Campaign API' });   
  });

  app.use('/api', router);
  callback();
  
  return app
};

module.exports = Server;
