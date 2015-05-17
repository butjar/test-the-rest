var Sequelize = require('sequelize');
var Db = require('../setup/db');
var Campaign = require('./campaign');

var creativeSchema = {
  name: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(2048),
    defaultValue: ''
  },
  campaign_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false
  },
};

var CreativeModel = Db.define('creatives', creativeSchema, { underscored: true });

module.exports = CreativeModel;
