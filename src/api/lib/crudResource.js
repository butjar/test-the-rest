// Module for creating CRUD resources
var CrudResource = function(router, resource){

  var crudResource = {
    router: createRouter(resource, router)
  };

  return crudResource;
};

// Adds the given router to the given resource 
var createRouter = function(resource, router){
  var Controller = require('../controller/' + resource.controller);
  
  // Iterates over all dispatch functions of a Controller
  for(var i in Controller.dispatcher){

    var route = Controller.dispatcher[i];
    for (var methodName in route.methods){

      // dynamically calls the dispatch function on the router and returns it afterwards
      var command = ['return router.', methodName, '("', route.path, '", Controller.dispatcher[', i, '].methods.',  methodName, ');'].join('');
      var func = new Function('router', 'Controller', command);
      router = func(router, Controller, command);

    }
  
  }

  return router;

};

module.exports = CrudResource;
