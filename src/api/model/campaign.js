var Sequelize = require('sequelize');
var Db = require('../setup/db');
var Category = require('./category');
var Creative = require('./creative');

var campaignSchema = {
  type: {
    type: Sequelize.STRING(3),
    defaultValue: null
  },
  title: {
    type: Sequelize.STRING(40),
    defaultValue: ''
  },
  start_date: {
    type: Sequelize.DATE,
    defaultValue: '0000-00-00 00:00:00',
    allowNull: false
  },
  end_date: { 
    type: Sequelize.DATE,
    defaultValue: '0000-00-00 00:00:00',
    allowNull: false
  },
  active: {
    type: Sequelize.INTEGER(1),
    defaultValue: 0,
    allowNull: false
  }
};

var CampaignModel = Db.define('campaigns', campaignSchema, { underscored: true });

CampaignModel.belongsToMany(Category, {through: 'campaigns_categories'});
CampaignModel.hasMany(Creative);

Category.belongsToMany(CampaignModel, {through: 'campaigns_categories'});

Creative.belongsTo(CampaignModel);

module.exports = CampaignModel;
