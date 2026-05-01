document.addEventListener('DOMContentLoaded', () => {

    const root = document.documentElement;
    const skillsContainer = document.getElementById("skills-container");
    const addBtn = document.getElementById("add-skill-btn");
    const langToggle = document.getElementById("lang-toggle");

    // ───────────────────────────────────────────────
    //  Traduções
    // ───────────────────────────────────────────────
    const translations = {
        pt: {
            title_main:               "Rodolfo — Portfólio",
            meta_description:         "Portfólio profissional de desenvolvedor — projetos, competências e contato.",
            nav_menu:                 "Menu",
            nav_sobre:                "Sobre",
            nav_formacao:             "Formação",
            nav_cursos:               "Cursos",
            nav_competencias:         "Competências",
            nav_projetos:             "Projetos",
            nav_docs:                 "Docs",
            hero_greeting:            "Olá — eu sou",
            hero_lead:                "Desenvolvedor de software",
            hero_lead_2:              "Frontend & Backend",
            hero_lead_3:              "Aplicações web modernas e escaláveis.",
            hero_cta:                 "Ver Projetos",
            profile_role:             "Desenvolvedor de Software",
            profile_location:         "📍 Brasil, São José dos Campos",
            profile_whatsapp:         "📱 WhatsApp disponível",
            social_email:             "✉️ E-mail",
            social_github:            "💻 GitHub",
            social_linkedin:          "🔗 LinkedIn",
            social_whatsapp:          "💬 WhatsApp",
            section_about:            "Sobre",
            about_text:               "Sou um desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário. Estou cursando Desenvolvimento de Sistemas na FATEC de São José dos Campos, onde aprimoro continuamente minhas habilidades técnicas e interpessoais.",
            // Formação
            section_formacao:         "Formação Acadêmica",
            formacao_curso_title:     "Desenvolvimento de Sistemas",
            formacao_tipo:            "Curso Técnico",
            formacao_inst:            "🏫 FATEC — Faculdade de Tecnologia de São José dos Campos",
            formacao_periodo:         "📅 2025 – em andamento",
            formacao_ensino_title:    "Ensino Médio",
            formacao_ensino_tipo:     "Concluído",
            formacao_ensino_inst:     "🏫 Brasil",
            formacao_ensino_periodo:  "📅 Concluído em 2024",
            // Cursos
            section_cursos:           "Cursos Complementares e Certificações",
            cursos_subtitle:          "Formações adicionais relevantes para a área.",
            curso_scrum_title:        "SCRUM — Metodologia Ágil",
            curso_scrum_inst:         "🏛️ Escola de Inovadores INOVA CPS",
            curso_ingles_title:       "Inglês Avançado — C1",
            curso_ingles_inst:        "🌎 Formação independente / autodidata",
            curso_alemao_title:       "Alemão Básico — A1",
            curso_alemao_inst:        "🌎 Formação independente / autodidata",
            // Competências
            section_skills:           "Competências",
            skills_tech_title:        "🛠️ Técnicas",
            skills_soft_title:        "🤝 Interpessoais (Soft Skills)",
            soft_comunicacao:         "Comunicação",
            soft_comunicacao_desc:    "Clareza ao transmitir ideias técnicas e colaborar em equipe.",
            soft_organizacao:         "Organização",
            soft_organizacao_desc:    "Gestão de tarefas, prazos e prioridades com disciplina.",
            soft_trabalho_equipe:     "Trabalho em Equipe",
            soft_trabalho_equipe_desc:"Colaboração ativa em projetos ágeis e multidisciplinares.",
            soft_resolucao:           "Resolução de Problemas",
            soft_resolucao_desc:      "Análise crítica e criatividade para encontrar soluções eficientes.",
            soft_aprendizado:         "Aprendizado Contínuo",
            soft_aprendizado_desc:    "Curiosidade e proatividade para aprender novas tecnologias.",
            soft_gestao_tempo:        "Gestão do Tempo",
            soft_gestao_tempo_desc:   "Equilíbrio entre qualidade e prazo em ambientes dinâmicos.",
            // Projetos
            section_projects:         "Projetos em destaque",
            filter_all:               "Todos",
            // Links
            section_links:            "Links Profissionais",
            links_subtitle:           "Encontre-me nas plataformas abaixo.",
            link_github_desc:         "Repositórios e projetos open source.",
            link_linkedin_desc:       "Perfil profissional e experiências.",
            link_email_desc:          "Entre em contato diretamente.",
            link_whatsapp_desc:       "Envie uma mensagem pelo WhatsApp.",
            // Docs
            section_docs:             "Currículo e Documentos",
            docs_subtitle:            "Acesse meus documentos profissionais.",
            doc_cv_title:             "Currículo (PDF)",
            doc_cv_desc:              "Experiência e formação completa.",
            doc_cert_title:           "Certificado SCRUM",
            doc_cert_desc:            "Certificação pela Escola de Inovadores INOVA CPS. (40h)",
            // Projects page
            proj_title_page:          "Projetos — Rodolfo",
            proj_title:               "Projetos detalhados",
            proj_banana_h3:           "Site da Banana — Demo hospedada no Vercel",
            proj_banana_desc_detail:  "Site institucional / demonstração hospedada em Vercel. Acesse o site completo clicando no botão abaixo.",
            proj_banana_cta:          "Abrir Demo",
            footer_copy:              "©",
            footer_text:              "RodolfoFerreira",
            proj_footer:              "Projetos",
            back_home:                "Voltar",
        },
        en: {
            title_main:               "Rodolfo — Portfolio",
            meta_description:         "Professional developer portfolio — projects, skills & contact.",
            nav_menu:                 "Menu",
            nav_sobre:                "About",
            nav_formacao:             "Education",
            nav_cursos:               "Courses",
            nav_competencias:         "Skills",
            nav_projetos:             "Projects",
            nav_docs:                 "Docs",
            hero_greeting:            "Hi — I'm",
            hero_lead:                "Software Developer",
            hero_lead_2:              "Frontend & Backend",
            hero_lead_3:              "Modern and scalable web applications.",
            hero_cta:                 "View Projects",
            profile_role:             "Software Developer",
            profile_location:         "📍 Brazil, São José dos Campos",
            profile_whatsapp:         "📱 WhatsApp available",
            social_email:             "✉️ Email",
            social_github:            "💻 GitHub",
            social_linkedin:          "🔗 LinkedIn",
            social_whatsapp:          "💬 WhatsApp",
            section_about:            "About",
            about_text:               "I'm a developer focused on delivering practical, efficient, high-performance solutions. I master modern technologies and value clean code, good practices, and great user experience. I'm currently studying Systems Development at FATEC São José dos Campos.",
            // Education
            section_formacao:         "Academic Background",
            formacao_curso_title:     "Systems Development",
            formacao_tipo:            "Technical Course",
            formacao_inst:            "🏫 FATEC — Faculty of Technology of São José dos Campos",
            formacao_periodo:         "📅 2025 – ongoing",
            formacao_ensino_title:    "High School",
            formacao_ensino_tipo:     "Completed",
            formacao_ensino_inst:     "🏫 Brazil",
            formacao_ensino_periodo:  "📅 Completed in 2024",
            // Courses
            section_cursos:           "Complementary Courses & Certifications",
            cursos_subtitle:          "Additional training relevant to the field.",
            curso_scrum_title:        "SCRUM — Agile Methodology",
            curso_scrum_inst:         "🏛️ Escola de Inovadores INOVA CPS",
            curso_ingles_title:       "Advanced English — C1",
            curso_ingles_inst:        "🌎 Self-taught / independent",
            curso_alemao_title:       "Basic German — A1",
            curso_alemao_inst:        "🌎 Self-taught / independent",
            // Skills
            section_skills:           "Skills",
            skills_tech_title:        "🛠️ Technical",
            skills_soft_title:        "🤝 Interpersonal (Soft Skills)",
            soft_comunicacao:         "Communication",
            soft_comunicacao_desc:    "Clarity in conveying technical ideas and collaborating with teams.",
            soft_organizacao:         "Organization",
            soft_organizacao_desc:    "Task management, deadlines, and priorities with discipline.",
            soft_trabalho_equipe:     "Teamwork",
            soft_trabalho_equipe_desc:"Active collaboration in agile and multidisciplinary projects.",
            soft_resolucao:           "Problem Solving",
            soft_resolucao_desc:      "Critical thinking and creativity to find efficient solutions.",
            soft_aprendizado:         "Continuous Learning",
            soft_aprendizado_desc:    "Curiosity and proactivity to learn new technologies.",
            soft_gestao_tempo:        "Time Management",
            soft_gestao_tempo_desc:   "Balancing quality and deadlines in dynamic environments.",
            // Projects
            section_projects:         "Featured Projects",
            filter_all:               "All",
            // Links
            section_links:            "Professional Links",
            links_subtitle:           "Find me on the platforms below.",
            link_github_desc:         "Repositories and open source projects.",
            link_linkedin_desc:       "Professional profile and experience.",
            link_email_desc:          "Get in touch directly.",
            link_whatsapp_desc:       "Send me a message on WhatsApp.",
            // Docs
            section_docs:             "Resume & Certificates",
            docs_subtitle:            "Access my professional documents.",
            doc_cv_title:             "Resume (PDF)",
            doc_cv_desc:              "Full experience and education.",
            doc_cert_title:           "SCRUM Certificate",
            doc_cert_desc:            "Certification by Escola de Inovadores INOVA CPS. (40h)",
            // Projects page
            proj_title_page:          "Projects — Rodolfo",
            proj_title:               "Detailed Projects",
            proj_banana_h3:           "Banana Website — Hosted Demo on Vercel",
            proj_banana_desc_detail:  "Institutional/demo website hosted on Vercel. Click the button below to open it.",
            proj_banana_cta:          "Open Demo",
            footer_copy:              "©",
            footer_text:              "RodolfoFerreira",
            proj_footer:              "Projects",
            back_home:                "Back",
        }
    };

    function setLanguage(lang) {
        document.documentElement.setAttribute("data-lang", lang);
        document.body.setAttribute("data-lang", lang);
        localStorage.setItem("preferredLang", lang);

        document.querySelectorAll("[data-translate-key]").forEach(el => {
            const key = el.getAttribute("data-translate-key");
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === "TITLE") {
                    document.title = translations[lang][key];
                } else if (el.tagName === "META") {
                    el.setAttribute("content", translations[lang][key]);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    const savedLang = localStorage.getItem("preferredLang") || "pt";
    setLanguage(savedLang);

    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const current = document.body.getAttribute("data-lang") || "pt";
            setLanguage(current === "pt" ? "en" : "pt");
        });
    }

    // Botão lang na página de projetos (id diferente)
    const langToggle2 = document.getElementById("lang-toggle-2");
    if (langToggle2) {
        langToggle2.addEventListener("click", () => {
            const current = document.body.getAttribute("data-lang") || "pt";
            setLanguage(current === "pt" ? "en" : "pt");
        });
    }

    // ───────────────────────────────────────────────
    //  Competências técnicas (editáveis via localStorage)
    // ───────────────────────────────────────────────
    let skills = JSON.parse(localStorage.getItem("skills")) || [
        { title: "Frontend",                 items: "HTML5, CSS3, JavaScript (ES6+), React, TypeScript" },
        { title: "Backend",                  items: "Node.js, Python (Flask/Django), REST APIs" },
        { title: "Banco de Dados",           items: "PostgreSQL, MySQL, MongoDB" },
        { title: "Outros",                   items: "Git, Docker, AWS, CI/CD" },
        { title: "Competências linguísticas",items: "Inglês avançado C1, Alemão Básico A1" }
    ];

    function saveSkills() {
        localStorage.setItem("skills", JSON.stringify(skills));
    }

    function renderSkills() {
        if (!skillsContainer) return;
        skillsContainer.innerHTML = "";

        skills.forEach((skill, index) => {
            const card = document.createElement("div");
            card.className = "skill";
            card.dataset.index = index;

            const title = document.createElement("h4");
            title.textContent = skill.title;

            const text = document.createElement("p");
            text.textContent = skill.items;

            card.appendChild(title);
            card.appendChild(text);

            card.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                if (confirm(`Deseja realmente remover a competência "${skill.title}"?`)) {
                    skills.splice(index, 1);
                    saveSkills();
                    renderSkills();
                }
            });

            skillsContainer.appendChild(card);
        });
    }

    if (addBtn) {
        addBtn.onclick = () => {
            const title = prompt("Nome da competência");
            if (!title) return;
            const items = prompt("Tecnologias / descrição");
            if (!items) return;
            skills.push({ title, items });
            saveSkills();
            renderSkills();
        };
    }

    // ───────────────────────────────────────────────
    //  Projetos
    //  ADICIONADO: campo "description" em cada projeto
    // ───────────────────────────────────────────────
    const projectsData = [
        {
            title: "Banana Website",
            description: "Site institucional / demonstração hospedado no Vercel. Criado para praticar Next.js com deploy automatizado e integração contínua.",
            category: "web",
            tech: "Next.js · Vercel",
            image: "assets/site_da_banana_placeholder.png.png",
            links: [
                { text: "Abrir Site", href: "https://site-da-banana-qk1g.vercel.app", className: "btn small" }
            ]
        },
        {
            title: "API de Processamento — Censo SJC",
            description: "Pipeline ETL que coleta, processa e expõe dados do censo de São José dos Campos por meio de uma API desenvolvida em Flask. Projeto do 1º semestre da FATEC.",
            category: "api",
            tech: "Python · Flask · ETL",
            image: "assets/sjc_ponto_turistico.png",
            links: [
                { text: "Abrir Projeto", href: "https://github.com/FATCK06/ProjectAPI_FirstSemester", className: "btn small" }
            ]
        }
    ];

    function renderProjects(filter = "all") {
        const container = document.getElementById("projects-container");
        if (!container) return;
        container.innerHTML = "";

        projectsData.forEach(project => {
            if (filter !== "all" && project.category !== filter) return;

            const article = document.createElement("article");
            article.className = "project-card";

            const img = document.createElement("img");
            img.src = project.image;
            img.alt = project.title;
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";

            const title = document.createElement("h3");
            title.textContent = project.title;

            // ── NOVO: descrição do projeto ──
            const description = document.createElement("p");
            description.className = "muted";
            description.style.fontSize = "0.9rem";
            description.style.margin = "0 0 8px";
            description.textContent = project.description;

            const tech = document.createElement("p");
            tech.className = "muted";
            tech.style.fontWeight = "600";
            tech.style.fontSize = "0.85rem";
            tech.textContent = "🛠️ " + project.tech;

            const actions = document.createElement("div");
            actions.className = "project-actions";

            project.links.forEach(link => {
                const a = document.createElement("a");
                a.className = link.className;
                a.href = link.href;
                a.target = "_blank";
                a.rel = "noopener";
                a.textContent = link.text;
                actions.appendChild(a);
            });

            article.appendChild(img);
            article.appendChild(title);
            article.appendChild(description);   // descrição antes das techs
            article.appendChild(tech);
            article.appendChild(actions);

            container.appendChild(article);
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // ───────────────────────────────────────────────
    //  Footer — ano
    // ───────────────────────────────────────────────
    document.querySelectorAll('#year, #year-2').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // ───────────────────────────────────────────────
    //  Menu mobile
    // ───────────────────────────────────────────────
    document.getElementById('nav-toggle')?.addEventListener('click', () => {
        document.getElementById('main-nav')?.classList.toggle('open');
    });
    document.getElementById('nav-toggle-2')?.addEventListener('click', () => {
        document.getElementById('main-nav-2')?.classList.toggle('open');
    });

    // ───────────────────────────────────────────────
    //  Tema claro / escuro
    // ───────────────────────────────────────────────
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    document.querySelectorAll('.theme-toggle').forEach(toggle => {
        toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
        toggle.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            document.querySelectorAll('.theme-toggle').forEach(t => {
                t.textContent = next === 'dark' ? '☀️' : '🌙';
            });
        });
    });

    // ───────────────────────────────────────────────
    //  Inicializa conteúdo dinâmico
    // ───────────────────────────────────────────────
    renderSkills();
    renderProjects("all");

});