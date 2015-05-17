var Sequelize = require('sequelize');
var Db = require('../setup/db');

var categorySchema = {
  name: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(300),
    defaultValue: ''
  }
};

var CategoryModel = Db.define('categories', categorySchema, { underscored: true });

module.exports = CategoryModel;
