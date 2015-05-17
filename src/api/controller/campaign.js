var CrudController = require('../lib/crudController');
var Resources = require('../lib/resources');

var crudController = new CrudController(Resources.getResourceByName('campaign'));

var CampaignController = {

  dispatcher: crudController.dispatcher

};

module.exports = CampaignController;
