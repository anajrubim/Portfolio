const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const { estudante, disciplinas, projetos, certificados, galeria } = require('./data');

app.get('/', (req, res) => {
    res.render('pages/index', { 
        title: 'Home',
        estudante,
        activePage: 'home'
    });
});

app.get('/sobre', (req, res) => {
    res.render('pages/sobre', { 
        title: 'Sobre Mim',
        estudante,
        activePage: 'sobre'
    });
});

app.get('/disciplinas', (req, res) => {
    res.render('pages/disciplinas', { 
        title: 'Disciplinas',
        estudante,        
        disciplinas,
        activePage: 'disciplinas'
    });
});

app.get('/projetos', (req, res) => {
    res.render('pages/projetos', { 
        title: 'Projetos',
        estudante,        
        projetos,
        certificados,
        galeria,
        activePage: 'projetos'
    });
});

app.get('/contato', (req, res) => {
    res.render('pages/contato', { 
        title: 'Contato',
        estudante,
        activePage: 'contato'
    });
});

app.get('/dashboard', (req, res) => {
    const stats = {
        totalDisciplinas: disciplinas.length,
        projetosConcluidos: projetos.filter(p => p.concluido === true).length,
        tecnologias: [...new Set(projetos.flatMap(p => p.tecnologias))],
        totalCertificados: certificados.length,
        totalProjetosGaleria: galeria.length
    };
    
    res.render('pages/dashboard', { 
        title: 'Dashboard',
        estudante,        
        stats,
        projetos,
        activePage: 'dashboard'
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});