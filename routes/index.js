const express = require('express');
const router = express.Router();

// ✅ CORRETO: Importar apenas os models necessários
const { Disciplina, Projeto, Certificado, Galeria } = require('../models');
const { estudante } = require('../data');

// ❌ NÃO use 'sequelize' diretamente aqui, a menos que você realmente precise

// Página Inicial
router.get('/', (req, res) => {
  res.render('pages/index', {
    estudante
  });
});

// Sobre
router.get('/sobre', (req, res) => {
  res.render('pages/sobre', {
    estudante
  });
});

// Disciplinas
router.get('/disciplinas', async (req, res) => {
  try {
    const disciplinas = await Disciplina.findAll({
      order: [['semestre', 'ASC']]
    });
    res.render('pages/disciplinas', {
      estudante,
      disciplinas
    });
  } catch (error) {
    console.error('❌ Erro:', error);
    res.status(500).send('Erro ao buscar disciplinas');
  }
});

// Projetos
router.get('/projetos', async (req, res) => {
  try {
    console.log('📦 Buscando projetos...');
    const projetos = await Projeto.findAll({
      order: [['id', 'ASC']]
    });
    console.log(`✅ ${projetos.length} projetos encontrados`);
    
    console.log('🏆 Buscando certificados...');
    const certificados = await Certificado.findAll({
      order: [['id', 'ASC']]
    });
    console.log(`✅ ${certificados.length} certificados encontrados`);
    
    console.log('🖼️ Buscando galeria...');
    const galeria = await Galeria.findAll({
      order: [['id', 'ASC']]
    });
    console.log(`✅ ${galeria.length} itens da galeria encontrados`);
    
    res.render('pages/projetos', {
      estudante,
      projetos,
      certificados,
      galeria  // ← Adicione esta linha
    });
  } catch (error) {
    console.error('❌ Erro ao buscar projetos:', error);
    res.status(500).send(`Erro ao buscar projetos: ${error.message}`);
  }
});

// Contato
router.get('/contato', (req, res) => {
  res.render('pages/contato', {
    estudante
  });
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const totalDisciplinas = await Disciplina.count();
    const disciplinasConcluidas = await Disciplina.count({
      where: { status: 'concluído' }
    });
    const projetosConcluidos = await Projeto.count({
      where: { concluido: true }
    });
    const totalProjetos = await Projeto.count();
    
    // Tecnologias mais usadas
    const projetos = await Projeto.findAll();
    const tecnologias = {};
    projetos.forEach(projeto => {
      if (projeto.tecnologias && Array.isArray(projeto.tecnologias)) {
        projeto.tecnologias.forEach(tech => {
          tecnologias[tech] = (tecnologias[tech] || 0) + 1;
        });
      }
    });
    
    const tecnologiasOrdenadas = Object.entries(tecnologias)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    res.render('pages/dashboard', {
      estudante,
      stats: {
        totalDisciplinas,
        disciplinasConcluidas,
        projetosConcluidos,
        totalProjetos,
        tecnologiasPopulares: tecnologiasOrdenadas
      }
    });
  } catch (error) {
    console.error('❌ Erro:', error);
    res.status(500).send('Erro ao carregar dashboard');
  }
});

module.exports = router;
