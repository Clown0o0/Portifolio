/**

 *
 *  GET    /api/projects          → lista todos os projetos
 *  GET    /api/projects/:id      → retorna um projeto pelo id
 *  POST   /api/projects          → cria um novo projeto
 *  PUT    /api/projects/:id      → atualiza um projeto existente
 *  DELETE /api/projects/:id      → remove um projeto
 *
 *  GET    /api/skills            → lista todas as competências técnicas
 *  POST   /api/skills            → adiciona uma competência
 *  PUT    /api/skills/:id        → atualiza uma competência
 *  DELETE /api/skills/:id        → remove uma competência
 *
 *  GET    /api/profile           → retorna os dados públicos do perfil
 *
 * Instalação:
 *   npm install express cors
 *   node server.js
 *
 * O servidor sobe em http://localhost:3000
 */

const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ═══════════════════════════════════════════════════════════
//  Dados em memória
// ═══════════════════════════════════════════════════════════

let projects = [
    {
        id: 1,
        title: "Banana Website",
        description: "Site institucional / demonstração hospedado no Vercel. Criado para praticar Next.js com deploy automatizado.",
        category: "web",
        tech: ["Next.js", "Vercel"],
        links: {
            demo: "https://site-da-banana-qk1g.vercel.app",
            github: null
        }
    },
    {
        id: 2,
        title: "API de Processamento — Censo SJC",
        description: "Pipeline ETL que coleta, processa e expõe dados do censo de São José dos Campos via API Flask. Projeto desenvolvido na FATEC no 1º semestre.",
        category: "api",
        tech: ["Python", "Flask", "ETL"],
        links: {
            demo: null,
            github: "https://github.com/FATCK06/ProjectAPI_FirstSemester"
        }
    }
];

let skills = [
    { id: 1, title: "Frontend",                  items: "HTML5, CSS3, JavaScript (ES6+), React, TypeScript" },
    { id: 2, title: "Backend",                   items: "Node.js, Python (Flask/Django), REST APIs" },
    { id: 3, title: "Banco de Dados",            items: "PostgreSQL, MySQL, MongoDB" },
    { id: 4, title: "Outros",                    items: "Git, Docker, AWS, CI/CD" },
    { id: 5, title: "Competências Linguísticas", items: "Inglês Avançado C1, Alemão Básico A1" }
];

const profile = {
    name:     "Rodolfo F Venâncio",
    role:     "Desenvolvedor de Software",
    location: "Brasil, São José dos Campos",
    email:    "rocraftr@gmail.com",
    whatsapp: null,          // preencha se quiser expor
    bio:      "Desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário. Estou cursando Desenvolvimento de Sistemas na FATEC de São José dos Campos, onde aprimoro continuamente minhas habilidades técnicas e interpessoais.",
    github:   "https://github.com/Clown0o0",
    linkedin: "https://br.linkedin.com/in/rodolfo-ferreira-836b5b229"
};

// ─── helpers ──────────────────────────────────────────────
let nextProjectId = 3;
let nextSkillId   = 6;

function findProject(id) { return projects.find(p => p.id === Number(id)); }
function findSkill(id)   { return skills.find(s => s.id === Number(id));   }

// ═══════════════════════════════════════════════════════════
//  ROTAS — PERFIL
// ═══════════════════════════════════════════════════════════

/**
 * GET /api/profile
 * Retorna os dados públicos do desenvolvedor.
 *
 * Exemplo de resposta:
 * {
 *   "name": "Rodolfo F Venâncio",
 *   "role": "Desenvolvedor de Software",
 *   ...
 * }
 */
app.get('/api/profile', (req, res) => {
    res.json(profile);
});

// ═══════════════════════════════════════════════════════════
//  ROTAS — PROJETOS
// ═══════════════════════════════════════════════════════════

/**
 * GET /api/projects
 * Lista todos os projetos. Aceita query ?category=web ou ?category=api
 *
 * Exemplos:
 *   GET /api/projects
 *   GET /api/projects?category=api
 */
app.get('/api/projects', (req, res) => {
    const { category } = req.query;
    const result = category
        ? projects.filter(p => p.category === category)
        : projects;
    res.json({ total: result.length, projects: result });
});

/**
 * GET /api/projects/:id
 * Retorna um projeto pelo id numérico.
 *
 * Exemplo:
 *   GET /api/projects/1
 */
app.get('/api/projects/:id', (req, res) => {
    const project = findProject(req.params.id);
    if (!project) return res.status(404).json({ error: 'Projeto não encontrado.' });
    res.json(project);
});

/**
 * POST /api/projects
 * Cria um novo projeto.
 *
 * Body (JSON) obrigatório:
 * {
 *   "title":       "Nome do projeto",
 *   "description": "O que o projeto faz",
 *   "category":    "web" | "api",
 *   "tech":        ["React", "Node.js"],
 *   "links": {
 *     "demo":   "https://...",   (opcional)
 *     "github": "https://..."    (opcional)
 *   }
 * }
 */
app.post('/api/projects', (req, res) => {
    const { title, description, category, tech, links } = req.body;

    if (!title || !description || !category) {
        return res.status(400).json({
            error: 'Campos obrigatórios: title, description, category.'
        });
    }

    const newProject = {
        id:          nextProjectId++,
        title,
        description,
        category,
        tech:        Array.isArray(tech) ? tech : [],
        links:       links || { demo: null, github: null }
    };

    projects.push(newProject);
    res.status(201).json({ message: 'Projeto criado com sucesso.', project: newProject });
});

/**
 * PUT /api/projects/:id
 * Atualiza parcialmente ou totalmente um projeto existente.
 *
 * Body (JSON) — envie apenas os campos que deseja alterar:
 * {
 *   "title":       "Novo título",
 *   "description": "Nova descrição",
 *   "tech":        ["Vue.js"]
 * }
 */
app.put('/api/projects/:id', (req, res) => {
    const project = findProject(req.params.id);
    if (!project) return res.status(404).json({ error: 'Projeto não encontrado.' });

    const allowed = ['title', 'description', 'category', 'tech', 'links'];
    allowed.forEach(field => {
        if (req.body[field] !== undefined) project[field] = req.body[field];
    });

    res.json({ message: 'Projeto atualizado com sucesso.', project });
});

/**
 * DELETE /api/projects/:id
 * Remove um projeto pelo id.
 *
 * Exemplo:
 *   DELETE /api/projects/2
 */
app.delete('/api/projects/:id', (req, res) => {
    const index = projects.findIndex(p => p.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Projeto não encontrado.' });

    const removed = projects.splice(index, 1)[0];
    res.json({ message: 'Projeto removido com sucesso.', project: removed });
});

// ═══════════════════════════════════════════════════════════
//  ROTAS — COMPETÊNCIAS TÉCNICAS
// ═══════════════════════════════════════════════════════════

/**
 * GET /api/skills
 * Lista todas as competências técnicas.
 */
app.get('/api/skills', (req, res) => {
    res.json({ total: skills.length, skills });
});

/**
 * POST /api/skills
 * Adiciona uma nova competência técnica.
 *
 * Body (JSON):
 * {
 *   "title": "DevOps",
 *   "items": "Docker, Kubernetes, CI/CD"
 * }
 */
app.post('/api/skills', (req, res) => {
    const { title, items } = req.body;
    if (!title || !items) {
        return res.status(400).json({ error: 'Campos obrigatórios: title, items.' });
    }

    const newSkill = { id: nextSkillId++, title, items };
    skills.push(newSkill);
    res.status(201).json({ message: 'Competência adicionada.', skill: newSkill });
});

/**
 * PUT /api/skills/:id
 * Atualiza uma competência técnica.
 *
 * Body (JSON):
 * {
 *   "title": "Novo nome",
 *   "items": "Nova lista de tecnologias"
 * }
 */
app.put('/api/skills/:id', (req, res) => {
    const skill = findSkill(req.params.id);
    if (!skill) return res.status(404).json({ error: 'Competência não encontrada.' });

    if (req.body.title !== undefined) skill.title = req.body.title;
    if (req.body.items !== undefined) skill.items = req.body.items;

    res.json({ message: 'Competência atualizada.', skill });
});

/**
 * DELETE /api/skills/:id
 * Remove uma competência técnica.
 */
app.delete('/api/skills/:id', (req, res) => {
    const index = skills.findIndex(s => s.id === Number(req.params.id));
    if (index === -1) return res.status(404).json({ error: 'Competência não encontrada.' });

    const removed = skills.splice(index, 1)[0];
    res.json({ message: 'Competência removida.', skill: removed });
});

// ═══════════════════════════════════════════════════════════
//  Rota raiz — resumo das rotas disponíveis
// ═══════════════════════════════════════════════════════════
app.get('/', (req, res) => {
    res.json({
        message: 'API REST — Portfólio Rodolfo F Venâncio',
        routes: {
            profile:  { 'GET /api/profile': 'Dados do desenvolvedor' },
            projects: {
                'GET    /api/projects':      'Lista todos os projetos',
                'GET    /api/projects/:id':  'Busca projeto por id',
                'POST   /api/projects':      'Cria novo projeto',
                'PUT    /api/projects/:id':  'Atualiza projeto',
                'DELETE /api/projects/:id':  'Remove projeto'
            },
            skills: {
                'GET    /api/skills':        'Lista competências técnicas',
                'POST   /api/skills':        'Adiciona competência',
                'PUT    /api/skills/:id':    'Atualiza competência',
                'DELETE /api/skills/:id':    'Remove competência'
            }
        }
    });
});

// ═══════════════════════════════════════════════════════════
//  Inicia o servidor
// ═══════════════════════════════════════════════════════════
app.listen(PORT, () => {
    console.log(`\n✅  Servidor rodando em http://localhost:${PORT}`);
    console.log(`📋  Rotas disponíveis em http://localhost:${PORT}/\n`);
});