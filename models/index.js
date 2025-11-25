const sequelize = require('../config/database');
const Disciplina = require('./Disciplina');
const Projeto = require('./Projeto');
const Certificado = require('./Certificado');
const Galeria = require('./Galeria');

module.exports = {
  sequelize,
  Disciplina,
  Projeto,
  Certificado,
  Galeria
};
