var CrudController = require('../lib/crudController');
var Resources = require('../lib/resources');

var crudController = new CrudController(Resources.getResourceByName('creative'));

var CreativeController = {

  dispatcher: crudController.dispatcher

};

module.exports = CreativeController;
