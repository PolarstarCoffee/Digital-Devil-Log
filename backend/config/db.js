//imporitng sequelize 
const { Sequelize } = require('sequelize');
//initalizing the sequelize instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
});
module.exports = sequelize;