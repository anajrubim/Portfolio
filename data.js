const estudante = {
    nome: "Ana Júlia",
    nomeCompleto: "Ana Júlia Rubim Barreiros da Costa",
    curso: "Desenvolvimento de Software Multiplataforma",
    instituicao: "FATEC São José dos Campos",
    anoIngresso: 2025,
    idade: 19,
    experiencia: "Jovem Aprendiz na Nestlé",
    email: "anajrbcosta25@gmail.com",
    telefone: "(12) 99666-4754"
};

let disciplinas = [
    { 
        id: 1, 
        nome: "Algoritmos e Lógica de Programação", 
        professor: "Prof. Masanori", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 2, 
        nome: "Desenvolvimento Web I", 
        professor: "Prof. Jean", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 3, 
        nome: "Engenharia de Software I", 
        professor: "Prof. Juliana", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 4, 
        nome: "Sistemas Operacionais", 
        professor: "Prof. Dawilmar", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 5, 
        nome: "Modelagem de Banco de Dados", 
        professor: "Prof. Juliana", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 6, 
        nome: "Design Digital", 
        professor: "Prof. Jean", 
        semestre: 1, 
        status: "concluído", 
        dataCriacao: "2025-02-01" 
    },
    { 
        id: 7, 
        nome: "Técnicas de Programação", 
        professor: "Prof. Gerson", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01" 
    },
    { 
        id: 8, 
        nome: "Desenvolvimento Web II", 
        professor: "Prof. Cláudio", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01" 
    },
    { 
        id: 9, 
        nome: "Engenharia de Software II", 
        professor: "Prof. Walmir", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01" 
    },
    { 
        id: 10, 
        nome: "Matemática para computação", 
        professor: "Prof. Arakaki", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01" 
    },
    { 
        id: 11, 
        nome: "Banco de Dados Relacional", 
        professor: "Prof. Juliana", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01" 
    },
    { 
        id: 12, 
        nome: "Estrutura de Dados", 
        professor: "Prof. Masanori", 
        semestre: 2, 
        status: "cursando", 
        dataCriacao: "2025-06-01"  
    }
];

const projetos = [
    {
        id: 1,
        titulo: "Taiadinho: Além dos Corredores",
        tipo: "TCC",
        descricao: "Meu primeiro projeto foi o 'Taiadinho: Além dos Corredores', meu trabalho de conclusão de curso da Etec. Consistia num jogo inteiramente programado em C# e com design desenvolvido pelo Aseprite.",
        tecnologias: ["C#", "Aseprite", "Unity"],
        imagem: "src/Game Over.jpg",
        concluido: true,
        link: "#"
    },
    {
        id: 2,
        titulo: "API Chronos",
        tipo: "API",
        descricao: "Site de Estatísticas de Comércio Exterior do Estado de São Paulo. Desenvolvi todo o design do site e participei do desenvolvimento front-end.",
        tecnologias: ["HTML", "CSS", "Flask", "MySQL", "AWS"],
        imagem: "src/imagem.png",
        concluido: true,
        link: "https://github.com/Team-Chronos/API-DSM-1SEMESTRE-2025"
    },
    {
        id: 3,
        titulo: "API NEWE",
        tipo: "API",
        descricao: "Sistema de centralização de dados e processos da empresa NEWE. Neste projeto, desempenhei o papel de Scrum Master. Também desenvolvi todo o design do site e participei do desenvolvimento front-end.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "TypeScript", "React"],
        imagem: "src/newe.png",
        concluido: false,
        link: "https://github.com/Team-Chronos/API-DSM-2SEMESTRE-2025"
    }
];

const certificados = [
    {
        id: 1,
        titulo: "Escola de Inovadores",
        imagem: "src/IMG-20250519-WA0002.jpg"
    },
    {
        id: 2,
        titulo: "Certificado de Arduíno",
        imagem: "src/IMG-20250519-WA0003.jpg"
    },
    {
        id: 3,
        titulo: "Certificado Excel Básico",
        imagem: "src/IMG-20250519-WA0001.jpg"
    },
    {
        id: 4,
        titulo: "Certificado Excel Intermediário",
        imagem: "src/IMG-20250519-WA0004.jpg"
    },
    {
        id: 5,
        titulo: "Certificado Excel Avançado",
        imagem: "src/IMG-20250519-WA0005.jpg"
    }
];

const galeria = [
    {
        id: 1,
        titulo: "Site: Vendas de Bolhas",
        imagem: "src/bolhas.png"
    },
    {
        id: 2,
        titulo: "Site: Curso de Tecnologia",
        imagem: "src/curso.png"
    },
    {
        id: 3,
        titulo: "Site: Portal de Vendas",
        imagem: "src/portal.png"
    },
    {
        id: 4,
        titulo: "Site: Catálogo de Séries",
        imagem: "src/series.png"
    },
    {
        id: 5,
        titulo: "Site: Turismo em Belo Horizonte",
        imagem: "src/turismo.png"
    },
    {
        id: 6,
        titulo: "Site: Viagem a Porto Seguro",
        imagem: "src/viagem.png"
    }
];



module.exports = { estudante, disciplinas, projetos, certificados, galeria };