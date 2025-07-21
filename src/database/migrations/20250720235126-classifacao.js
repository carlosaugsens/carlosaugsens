'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('classificacao', { 
      id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
      },
      codigo: {
        type:Sequelize.STRING,
        allowNull: false
      },
      admissao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cnes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      coren: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      profissional: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_fluxo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cod_fluxo: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cod_descritor:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      texto_risco: {
        type: Sequelize.STRING
      },
      fc: {
        type: Sequelize.INTEGER
      },
      fr: {
        type: Sequelize.INTEGER
      },
      hgt: {
        type: Sequelize.INTEGER
      },
      pa: {
        type: Sequelize.INTEGER
      },
      sao2: {
        type: Sequelize.INTEGER
      },
      tax: {
        type: Sequelize.INTEGER
      },
      ecg: {
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.INTEGER
      },
      anamnese: {
        type: Sequelize.STRING
      },
      fluxo: {
        type: Sequelize.STRING,
        allowNull: false
      }
      ,
      descritor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
