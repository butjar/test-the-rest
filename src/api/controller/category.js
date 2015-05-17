var CrudController = require('../lib/crudController');
var Resources = require('../lib/resources');

var crudController = new CrudController(Resources.getResourceByName('category'));

var CategoryController = {

  dispatcher: crudController.dispatcher

};

module.exports = CategoryController;
