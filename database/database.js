const Sequelize = require('sequelize');

const connection = new Sequelize ('dadosteste','root','123721997',{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = connection;