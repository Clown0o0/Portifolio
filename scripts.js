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
            title_main:              "Rodolfo — Portfólio",
            meta_description:        "Portfólio profissional de desenvolvedor — projetos, competências e contato.",
            nav_menu:                "Menu",
            nav_sobre:               "Sobre",
            nav_competencias:        "Competências",
            nav_projetos:            "Projetos",
            nav_docs:                "Docs",
            hero_greeting:           "Olá — eu sou",
            hero_lead:               "Desenvolvedor de software",
            hero_lead_2:             "Frontend & Backend",
            hero_lead_3:             "Aplicações web modernas e escaláveis.",
            hero_cta:                "Ver Projetos",
            profile_role:            "Desenvolvedor de Software",
            profile_location:        "📍 Brasil, São José dos Campos",
            social_email:            "✉️ E-mail",
            social_github:           "💻 GitHub",
            social_linkedin:         "🔗 LinkedIn",
            section_about:           "Sobre",
            about_text:              "Sou um desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário.",
            section_skills:          "Competências",
            section_projects:        "Projetos em destaque",
            section_docs:            "Currículo e Documentos",
            docs_subtitle:           "Acesse meus documentos profissionais.",
            doc_cv_title:            "Currículo (PDF)",
            doc_cv_desc:             "Experiência e formação completa.",
            doc_cert_title:          "Certificado SCRUM",
            doc_cert_desc:           "Certificação pela Escola de Inovadores INOVA CPS. (40h)",
        },
        en: {
            title_main:              "Rodolfo — Portfolio",
            meta_description:        "Professional developer portfolio — projects, skills & contact.",
            nav_menu:                "Menu",
            nav_sobre:               "About",
            nav_competencias:        "Skills",
            nav_projetos:            "Projects",
            nav_docs:                "Docs",
            hero_greeting:           "Hi — I'm",
            hero_lead:               "Software Developer",
            hero_lead_2:             "Frontend & Backend",
            hero_lead_3:             "Modern and scalable web applications.",
            hero_cta:                "View Projects",
            profile_role:            "Software Developer",
            profile_location:        "📍 Brazil, São José dos Campos",
            social_email:            "✉️ Email",
            social_github:           "💻 GitHub",
            social_linkedin:         "🔗 LinkedIn",
            section_about:           "About",
            about_text:              "I'm a developer focused on delivering practical, efficient, high-performance solutions. I master modern technologies and value clean code, good practices, and great user experience.",
            section_skills:          "Skills",
            section_projects:        "Featured Projects",
            section_docs:            "Resume & Certificates",
            docs_subtitle:           "Access my professional documents.",
            doc_cv_title:            "Resume (PDF)",
            doc_cv_desc:             "Full experience and education.",
            doc_cert_title:          "SCRUM Certificate",
            doc_cert_desc:           "Certification by Escola de Inovadores INOVA CPS. (40h)",
        }
    };

    function setLanguage(lang) {
        document.documentElement.setAttribute("data-lang", lang);
        document.body.setAttribute("data-lang", lang);
        localStorage.setItem("preferredLang", lang);

        document.querySelectorAll("[data-translate-key]").forEach(el => {
            const key = el.getAttribute("data-translate-key");
            if (translations[lang][key]) {
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

    // Inicializa idioma
    const savedLang = localStorage.getItem("preferredLang") || "pt";
    setLanguage(savedLang);

    // Botão de troca de idioma
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            const current = document.body.getAttribute("data-lang") || "pt";
            const next = current === "pt" ? "en" : "pt";
            setLanguage(next);
        });
    }

    // ───────────────────────────────────────────────
    //  Competências (Skills)
    // ───────────────────────────────────────────────
    let skills = JSON.parse(localStorage.getItem("skills")) || [
        { title: "Frontend",           items: "HTML5, CSS3, JavaScript (ES6+), React, TypeScript" },
        { title: "Backend",             items: "Node.js, Python (Flask/Django), REST APIs" },
        { title: "Banco de Dados",      items: "PostgreSQL, MySQL, MongoDB" },
        { title: "Outros",              items: "Git, Docker, AWS, CI/CD" },
        { title: "Competências linguísticas", items: "Inglês avançado C1, Alemão Básico" }
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

            // Evento de clique direito para deletar
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

    // Adicionar nova competência
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
    //  Projetos (mantido igual)
    // ───────────────────────────────────────────────
    const projectsData = [
        {
            title: "Banana Website",
            category: "web",
            tech: "Next.js · Vercel",
            image: "assets/site_da_banana_placeholder.png.png",
            links: [
                { text: "Abrir Site", href: "https://site-da-banana-qk1g.vercel.app", className: "btn small" }
            ]
        },
        {
            title: "API de Processamento — Censo SJC",
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
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";

            const title = document.createElement("h3");
            title.textContent = project.title;

            const tech = document.createElement("p");
            tech.className = "muted";
            tech.textContent = project.tech;

            article.appendChild(img);
            article.appendChild(title);
            article.appendChild(tech);

            project.links.forEach(link => {
                const a = document.createElement("a");
                a.className = link.className;
                a.href = link.href;
                a.target = "_blank";
                a.textContent = link.text;
                article.appendChild(a);
            });

            container.appendChild(article);
        });
    }

    // Filtros de projetos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // Ano no footer
    document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

    // Menu mobile
    document.getElementById('nav-toggle')?.addEventListener('click', () => {
        document.getElementById('main-nav')?.classList.toggle('open');
    });

    // Tema claro/escuro
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    document.querySelectorAll('.theme-toggle').forEach(toggle => {
        toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';

        toggle.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            toggle.textContent = next === 'dark' ? '☀️' : '🌙';
        });
    });

    // Inicializa conteúdo dinâmico
    renderSkills();
    renderProjects("all");

});