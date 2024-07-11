//imporitng sequelize 
const { Sequelize } = require('sequelize');
//initalizing the sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});
//export module, made avaliable in other parts of project 
module.exports = sequelize;