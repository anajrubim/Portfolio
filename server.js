require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Inicializar banco e servidor
async function startServer() {
  try {
    console.log('🚀 Iniciando servidor...\n');
    
    // Criar banco de dados se não existir
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`✅ Banco de dados '${process.env.DB_NAME}' verificado/criado!`);
    await connection.end();
    
    // ✅ IMPORTANTE: Importar DEPOIS de criar o banco
    const { sequelize, Disciplina, Projeto, Certificado, Galeria } = require('./models');
    
    // Testar conexão
    await sequelize.authenticate();
    console.log('✅ Conexão com MySQL estabelecida!');
    
    // Sincronizar modelos
    await sequelize.sync({ alter: true });
    console.log('✅ Modelos sincronizados com o banco!\n');
    
    // Rotas
    const routes = require('./routes');
    app.use('/', routes);
    
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`🎉 Servidor rodando em http://localhost:${PORT}`);
      console.log('\n📄 Rotas disponíveis:');
      console.log(`  - http://localhost:${PORT}/`);
      console.log(`  - http://localhost:${PORT}/sobre`);
      console.log(`  - http://localhost:${PORT}/disciplinas`);
      console.log(`  - http://localhost:${PORT}/projetos`);
      console.log(`  - http://localhost:${PORT}/contato`);
      console.log(`  - http://localhost:${PORT}/dashboard`);
    });
    
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error.message);
    console.error('Stack:', error.stack);
    process.exit(1);
  }
}

startServer();
