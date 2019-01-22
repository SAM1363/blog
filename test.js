const Sequelize = require('sequelize');
const sequelize = new Sequelize('blog', 'samsonblankenship', '1363636i', {
    dialect: 'postgres',
    host: "localhost",
    port: 5432,
  })