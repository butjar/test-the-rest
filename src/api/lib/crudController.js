// Base controller for CRUD resources
var CrudController = function(resource){

  var Model = require(['../model/', resource.model].join(''));
  var crudController = {

    dispatcher: [{

      path: resource.route,

      methods: {

        get: function(req, res){
          Model.findAll({ include:[{ all: true }] })
            .then(function(records) { res.json(records); })
            .catch(function(errors){ res.json(errors); });
        },

        post: function(req, res){
          var payload = req.body;

          Model.create(payload, { include:[{ all: true }] })
            .then(function(record) { Model.find(record.id, { include:[{ all: true }] })
              .then(function(record){ res.json(record); })
            }).catch(function(errors){ res.json(errors); });
        }

      }
    },

    {

      path: resource.route + '/:id',

      methods: {

        get: function(req, res){
          var id = req.params.id;
          Model.find(id, { include:[{ all: true }] })
            .then(function(record) { res.json(record); })
            .catch(function(errors){ res.json(errors); });
        },

        put: function(req, res){
          var id = req.params.id;
          var payload = req.body;
          Model.find(id, { include:[{ all: true }] })
            .then(function(record) { record.updateAttributes(payload)
              .then(function() { res.json(record); })
            }).catch(function(errors){ res.json(errors); });
        },

        delete: function(req, res){
          var id = req.params.id;
          Model.find(id, { include:[{ all: true }] })
            .then( function(record) { record.destroy()
              .then(function() { res.json(record); })
            }).catch(function(errors){ res.json(errors); });
        }

      }

    }]
  };

  return crudController;

};

module.exports = CrudController;
