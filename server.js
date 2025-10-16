const express = require("express");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const { estudante, disciplinas, projetos, certificados, galeria } = require("./data");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("pages/index", { 
    title: "Home",
    estudante,
    activePage: "home"
  });
});

app.get("/sobre", (req, res) => {
  res.render("pages/sobre", { 
    title: "Sobre Mim",
    estudante,
    activePage: "sobre"
  });
});

app.get("/disciplinas", (req, res) => {
  res.render("pages/disciplinas", { 
    title: "Disciplinas",
    estudante,
    disciplinas,
    activePage: "disciplinas"
  });
});

app.post("/disciplinas", (req, res) => {
  const { nome, professor, semestre, status } = req.body;
  
  if (nome && !disciplinas.find(d => d.nome === nome)) {
    const novaDisciplina = {
      id: disciplinas.length > 0 ? Math.max(...disciplinas.map(d => d.id)) + 1 : 1,
      nome,
      professor: professor || "Professor não informado",
      semestre: parseInt(semestre) || 1,
      status: status || "cursando",
      dataCriacao: new Date().toISOString().split('T')[0]
    };
    
    disciplinas.push(novaDisciplina);
  }
  
  res.redirect("/disciplinas");
});

app.delete("/disciplinas/:id", (req, res) => {
  const { id } = req.params;
  const index = disciplinas.findIndex(d => d.id === parseInt(id));
  
  if (index !== -1) {
    disciplinas.splice(index, 1);
  }
  
  res.redirect("/disciplinas");
});

app.get("/projetos", (req, res) => {
  res.render("pages/projetos", { 
    title: "Projetos",
    estudante,
    projetos,
    certificados,
    galeria,
    activePage: "projetos"
  });
});

app.post("/projetos", (req, res) => {
  const { titulo, tipo, descricao, tecnologias, imagem, link } = req.body;
  
  if (titulo && !projetos.find(p => p.titulo === titulo)) {
    const tecnologiasArray = tecnologias ? tecnologias.split(',').map(t => t.trim()) : [];
    
    const novoProjeto = {
      id: projetos.length > 0 ? Math.max(...projetos.map(p => p.id)) + 1 : 1,
      titulo,
      tipo: tipo || "Projeto",
      descricao: descricao || "Descrição não informada",
      tecnologias: tecnologiasArray,
      imagem: imagem || "src/default.jpg",
      concluido: false,
      link: link || "#",
      dataCriacao: new Date().toISOString().split('T')[0]
    };
    
    projetos.push(novoProjeto);
  }
  
  res.redirect("/projetos");
});

app.get("/projetos/editar/:id", (req, res) => {
  const { id } = req.params;
  const projeto = projetos.find(p => p.id === parseInt(id));
  
  if (!projeto) {
    return res.status(404).send("Projeto não encontrado");
  }
  
  res.render("pages/editar-projeto", { 
    title: "Editar Projeto",
    estudante,
    projeto,
    activePage: "projetos"
  });
});

app.put("/projetos/:id", (req, res) => {
  const { id } = req.params;
  const { titulo, tipo, descricao, tecnologias, imagem, concluido, link } = req.body;
  
  const index = projetos.findIndex(p => p.id === parseInt(id));
  
  if (index !== -1) {
    const tecnologiasArray = tecnologias ? tecnologias.split(',').map(t => t.trim()) : [];
    
    projetos[index] = {
      ...projetos[index],
      titulo: titulo || projetos[index].titulo,
      tipo: tipo || projetos[index].tipo,
      descricao: descricao || projetos[index].descricao,
      tecnologias: tecnologiasArray.length > 0 ? tecnologiasArray : projetos[index].tecnologias,
      imagem: imagem || projetos[index].imagem,
      concluido: concluido === "true",
      link: link || projetos[index].link
    };
  }
  
  res.redirect("/projetos");
});

app.delete("/projetos/:id", (req, res) => {
  const { id } = req.params;
  const index = projetos.findIndex(p => p.id === parseInt(id));
  
  if (index !== -1) {
    projetos.splice(index, 1);
  }
  
  res.redirect("/projetos");
});

app.post("/certificados", (req, res) => {
  const { titulo, imagem } = req.body;
  
  if (titulo && !certificados.find(c => c.titulo === titulo)) {
    const novoCertificado = {
      id: certificados.length > 0 ? Math.max(...certificados.map(c => c.id)) + 1 : 1,
      titulo,
      imagem: imagem || "src/default-certificate.jpg",
      dataCriacao: new Date().toISOString().split('T')[0]
    };
    
    certificados.push(novoCertificado);
  }
  
  res.redirect("/projetos");
});

app.delete("/certificados/:id", (req, res) => {
  const { id } = req.params;
  const index = certificados.findIndex(c => c.id === parseInt(id));
  
  if (index !== -1) {
    certificados.splice(index, 1);
  }
  
  res.redirect("/projetos");
});

app.post("/galeria", (req, res) => {
  const { titulo, imagem } = req.body;
  
  if (titulo && !galeria.find(g => g.titulo === titulo)) {
    const novoItem = {
      id: galeria.length > 0 ? Math.max(...galeria.map(g => g.id)) + 1 : 1,
      titulo,
      imagem: imagem || "src/default-gallery.jpg",
      dataCriacao: new Date().toISOString().split('T')[0]
    };
    
    galeria.push(novoItem);
  }
  
  res.redirect("/projetos");
});

app.delete("/galeria/:id", (req, res) => {
  const { id } = req.params;
  const index = galeria.findIndex(g => g.id === parseInt(id));
  
  if (index !== -1) {
    galeria.splice(index, 1);
  }
  
  res.redirect("/projetos");
});

app.get("/dashboard", (req, res) => {
  const stats = {
    totalDisciplinas: disciplinas.length,
    projetosConcluidos: projetos.filter(p => p.concluido).length,
    tecnologias: [...new Set(projetos.flatMap(p => p.tecnologias))],
    totalCertificados: certificados.length,
    totalProjetosGaleria: galeria.length
  };
  
  res.render("pages/dashboard", { 
    title: "Dashboard",
    estudante,
    stats,
    projetos,
    activePage: "dashboard"
  });
});

app.get("/contato", (req, res) => {
  res.render("pages/contato", { 
    title: "Contato",
    estudante,
    activePage: "contato"
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});