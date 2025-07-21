const Sequelize = require('sequelize')
const databaseConfig = require('../config/database')

const classificacao = require('../models/Classificacao')


const models = [classificacao]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))