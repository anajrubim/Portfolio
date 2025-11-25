const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Certificado = sequelize.define('Certificado', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'certificados',
  timestamps: true
});

module.exports = Certificado;
