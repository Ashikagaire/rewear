const Sequelize = require('sequelize');
require('../config/env');
const definitions = require('./definitions');

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_DATABASE } = process.env;

if (typeof DB_PASSWORD !== 'string') {
  throw new Error('DB_PASSWORD is missing. Set it in .env or config.<NODE_ENV>.env.');
}

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  ssl: true,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 180000000,
    idle: 10000,
  },
  logging: false,
});

const db = definitions(sequelize, Sequelize);

module.exports = db;
