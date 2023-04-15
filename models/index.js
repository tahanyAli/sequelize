'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');
const POSTGRES_URL = process.env.DATABASE_URL;

let sequelize = new Sequelize(POSTGRES_URL);

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes)
};