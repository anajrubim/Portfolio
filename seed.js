require('dotenv').config();
const { sequelize, Disciplina, Projeto, Certificado, Galeria } = require('./models');
const { estudante, disciplinas, projetos, certificados, galeria } = require('./data');

async function seed() {
  try {
    console.log('🌱 Iniciando seed do banco de dados...\n');
    
    // Conectar ao banco
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco!');
    
    // Sincronizar modelos (criar tabelas)
    await sequelize.sync({ force: true }); // force: true recria as tabelas
    console.log('✅ Tabelas criadas!\n');
    
    // Inserir disciplinas
    console.log('📚 Inserindo disciplinas...');
    for (const disc of disciplinas) {
      await Disciplina.create({
        nome: disc.nome,
        professor: disc.professor,
        semestre: disc.semestre,
        status: disc.status,
        dataCriacao: disc.dataCriacao
      });
    }
    console.log(`✅ ${disciplinas.length} disciplinas inseridas!\n`);
    
    // Inserir projetos
    console.log('💻 Inserindo projetos...');
    for (const proj of projetos) {
      await Projeto.create({
        titulo: proj.titulo,
        tipo: proj.tipo,
        descricao: proj.descricao,
        tecnologias: proj.tecnologias, // Array será convertido para JSON
        imagem: proj.imagem,
        concluido: proj.concluido,
        link: proj.link
      });
    }
    console.log(`✅ ${projetos.length} projetos inseridos!\n`);
    
    // Inserir certificados
    console.log('🏆 Inserindo certificados...');
    for (const cert of certificados) {
      await Certificado.create({
        titulo: cert.titulo,
        imagem: cert.imagem
      });
    }
    console.log(`✅ ${certificados.length} certificados inseridos!\n`);
    
    // Inserir galeria
    console.log('🖼️ Inserindo itens da galeria...');
    for (const item of galeria) {
      await Galeria.create({
        titulo: item.titulo,
        imagem: item.imagem
      });
    }
    console.log(`✅ ${galeria.length} itens da galeria inseridos!\n`);
    
    console.log('🎉 Seed concluído com sucesso!');
    console.log('\n📊 Resumo:');
    console.log(`   - Disciplinas: ${disciplinas.length}`);
    console.log(`   - Projetos: ${projetos.length}`);
    console.log(`   - Certificados: ${certificados.length}`);
    console.log(`   - Galeria: ${galeria.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro durante o seed:', error);
    process.exit(1);
  }
}

seed();
