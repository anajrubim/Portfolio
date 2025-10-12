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

const disciplinas = [
    "Desenvolvimento Web II",
    "Engenharia de Software II",
    "Técnicas de Programação",
    "Banco de Dados Relacional",
    "Matemática para Computação",
    "Estrutura de Dados",
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