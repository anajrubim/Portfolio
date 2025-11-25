const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Projeto = sequelize.define('Projeto', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tecnologias: {
    type: DataTypes.JSON, // Armazena array como JSON
    allowNull: true
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
  concluido: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'projetos',
  timestamps: true
});

module.exports = Projeto;
