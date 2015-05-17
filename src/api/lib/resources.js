// Provides the resources defined in api/setup/resources.json and a getByName function
var resources = require('../setup/resources.json');

var Ressources = {

  resources: resources,
  getResourceByName: function(name){

    for(var i in resources){
      var resource = resources[i];
      if(resource['name'] === name){
        return resource;
      }
    }

    return null;

  }

};

module.exports = Ressources;
