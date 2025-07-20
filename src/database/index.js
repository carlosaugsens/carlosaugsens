const Sequelize = require('sequelize')
const databaseConfig = require('../config/databaseConfig')


const models = []

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))