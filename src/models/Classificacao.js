const { Sequelize, Model } = require("sequelize");

class Clasificacao extends Model {
    static init(sequelize){
        super.init({
            codigo: {
                type:Sequelize.STRING,
                defaultValue: ''
            },
            admissao: {
                type: Sequelize.DATE,
               defaultValue: ''
            },
            cnes: {
                type: Sequelize.INTEGER,
              defaultValue: ''
            },
            coren: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            profissional: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            tipo_fluxo: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            cod_fluxo: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            cod_descritor:{
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            texto_risco: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            fc: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            fr: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            hgt: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            pa: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            sao2: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            tax: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            ecg: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            peso: {
                type: Sequelize.INTEGER,
                defaultValue: ''
            },
            anamnese: {
                type: Sequelize.STRING,
                defaultValue: ''
            },
            fluxo: {
                type: Sequelize.STRING,
                defaultValue: ''
            }
            ,
            descritor: {
                type: Sequelize.STRING,
                defaultValue: ''
            }
        },{
            sequelize
        })
    }   
}

module.exports = Clasificacao