const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Shashi@7033', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
