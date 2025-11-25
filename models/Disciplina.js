const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Disciplina = sequelize.define('Disciplina', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  professor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  semestre: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('concluído', 'cursando'),
    defaultValue: 'cursando'
  },
  dataCriacao: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: 'disciplinas',
  timestamps: true
});

module.exports = Disciplina;
