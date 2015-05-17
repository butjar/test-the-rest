// Database ORM
// 
// http://sequelize.readthedocs.org/en/latest/

var Sequelize = require('sequelize');
var Config = require('./applicationProperties');

module.exports = new Sequelize(Config.dbName, Config.dbUser, Config.dbPassword);
