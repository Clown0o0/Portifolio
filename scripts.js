document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  const projectsData = [
    {
      titleKey: "project_banana_title",
      titleEn: "Banana Website",
      descKey: "project_banana_desc",
      descEn: "Live preview of the \"Banana Website\" project.",
      category: "web",
      tech: "Next.js · Vercel",
      image: "assets/site_da_banana_placeholder.png.png",
      links: [
        { textKey: "project_banana_cta_site", textEn: "Open Site", href: "https://site-da-banana-qk1g.vercel.app", className: "btn small" },
        { text: "Detalhes", href: "projects.html#proj-banana", className: "btn ghost small" }
      ]
    },
    {
      title: "API de Processamento — Censo SJC",
      titleEn: "Processing API — SJC Census",
      descKey: "project_api_desc",
      descEn: "Data processing API for the São José dos Campos census.",
      category: "api",
      tech: "Python · Flask · ETL",
      image: "assets/sjc_ponto_turistico.png",
      links: [
        { textKey: "project_api_cta", textEn: "Open Project", href: "https://github.com/FATCK06/ProjectAPI_FirstSemester", className: "btn small" }
      ]
    }
  ];

  function renderProjects(filter = "all") {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";

    const lang = localStorage.getItem('lang') || "pt";

    projectsData.forEach(project => {
      if (filter !== "all" && project.category !== filter) return;

      const article = document.createElement("article");
      article.className = "project-card";

      if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title || project.titleKey || "Projeto";
        img.style.width = "100%";
        img.style.borderRadius = "8px";
        img.style.objectFit = "cover";
        img.style.height = "200px";
        article.appendChild(img);
      }

      const h3 = document.createElement("h3");
      if (project.titleKey) {
        h3.setAttribute("data-translate-key", project.titleKey);
      } else {
        h3.textContent = lang === "en" && project.titleEn ? project.titleEn : project.title;
      }
      article.appendChild(h3);

      const techP = document.createElement("p");
      techP.className = "muted";
      techP.textContent = project.tech;
      article.appendChild(techP);

      const descP = document.createElement("p");
      if (project.descKey) {
        descP.setAttribute("data-translate-key", project.descKey);
      } else {
        descP.textContent = lang === "en" && project.descEn ? project.descEn : "";
      }
      article.appendChild(descP);

      if (project.links && project.links.length > 0) {
        const actions = document.createElement("div");
        actions.className = "project-actions";

        project.links.forEach(link => {
          const a = document.createElement("a");
          a.className = link.className;
          a.href = link.href;
          a.target = "_blank";
          a.rel = "noopener";

          if (link.textKey) {
            a.setAttribute("data-translate-key", link.textKey);
          } else {
            a.textContent = lang === "en" && link.textEn ? link.textEn : link.text;
          }

          actions.appendChild(a);
        });

        article.appendChild(actions);
      }

      container.appendChild(article);
    });

    applyLanguage(currentLang);
  }

  const TRANSLATIONS = {
    pt: {
      title_main: "Rodolfo — Portfólio",
      meta_description: "Portfólio profissional de desenvolvedor — projetos, competências e contato.",
      nav_menu: "Menu",
      nav_sobre: "Sobre",
      nav_competencias: "Competências",
      nav_projetos: "Projetos",
      nav_docs: "Docs",
      hero_greeting: "Olá — eu sou",
      hero_lead: "Desenvolvedor de software",
      hero_lead_2: "Frontend & Backend",
      hero_lead_3: "Aplicações web modernas e escaláveis.",
      hero_cta: "Ver Projetos",
      profile_role: "Desenvolvedor de Software",
      profile_location: "📍 Brasil, São José dos Campos",
      social_email: "✉️ E-mail",
      social_github: "💻 GitHub",
      social_linkedin: "🔗 LinkedIn",
      section_about: "Sobre",
      about_text: "Sou um desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário.",
      section_skills: "Competências",
      skill_frontend_title: "Frontend",
      skill_backend_title: "Backend",
      skill_db_title: "Banco de Dados",
      skill_other_title: "Outros",
      skill_lang_title: "Competências linguísticas",
      section_projects: "Projetos em destaque",
      project_banana_title: "Site da Banana",
      project_banana_desc: "Preview real do projeto “Site da Banana”.",
      project_banana_cta_site: "Abrir Site",
      project_banana_cta_details: "Detalhes",
      project_api_title: "API de Processamento — Censo SJC",
      project_api_desc: "API de processamento de dados do censo de São José dos Campos.",
      project_api_cta: "Abrir Projeto",
      section_docs: "Currículo e Documentos",
      docs_subtitle: "Acesse meus documentos profissionais.",
      doc_cv_title: "Currículo (PDF)",
      doc_cv_desc: "Experiência e formação completa.",
      doc_cv_cta: "📄 Baixar / Visualizar",
      doc_cert_title: "Certificado SCRUM",
      doc_cert_desc: "Certificação pela Escola de Inovadores INOVA CPS. (40h)",
      doc_cert_cta: "🏆 Visualizar Certificado",
      footer_text: "RodolfoFerreira",
      footer_copy: "©",
    },
    en: {
      title_main: "Rodolfo — Portfolio",
      meta_description: "Professional developer portfolio — projects, skills, and contact.",
      nav_menu: "Menu",
      nav_sobre: "About",
      nav_competencias: "Skills",
      nav_projetos: "Projects",
      nav_docs: "Docs",
      hero_greeting: "Hello — I am",
      hero_lead: "Software Developer",
      hero_lead_2: "Frontend & Backend",
      hero_lead_3: "Modern and scalable web applications.",
      hero_cta: "View Projects",
      profile_role: "Software Developer",
      profile_location: "📍 Brazil, São José dos Campos",
      social_email: "✉️ E-mail",
      social_github: "💻 GitHub",
      social_linkedin: "🔗 LinkedIn",
      section_about: "About",
      about_text: "I am a developer focused on delivering practical, efficient, and high-performance solutions. I master modern technologies and value good practices, clean architecture, and user experience.",
      section_skills: "Skills",
      skill_frontend_title: "Frontend",
      skill_backend_title: "Backend",
      skill_db_title: "Database",
      skill_other_title: "Other",
      skill_lang_title: "Language Skills",
      section_projects: "Featured Projects",
      project_banana_title: "Banana Website",
      project_banana_desc: "Live preview of the \"Banana Website\" project.",
      project_banana_cta_site: "Open Site",
      project_banana_cta_details: "Details",
      project_api_title: "Processing API — SJC Census",
      project_api_desc: "Data processing API for the São José dos Campos census.",
      project_api_cta: "Open Project",
      section_docs: "Résumé and Documents",
      docs_subtitle: "Access my professional documents.",
      doc_cv_title: "Résumé (PDF)",
      doc_cv_desc: "Complete experience and education.",
      doc_cv_cta: "📄 Download / View",
      doc_cert_title: "SCRUM Certificate",
      doc_cert_desc: "Certification by INOVA CPS Innovators School. (40h)",
      doc_cert_cta: "🏆 View Certificate",
      footer_text: "RodolfoFerreira",
      footer_copy: "©",
    }
  };

  let currentLang = localStorage.getItem('lang') || root.getAttribute('lang') || 'pt';

  function applyLanguage(lang) {
    currentLang = lang;
    root.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      toggle.textContent = lang === 'en' ? '🇧🇷' : '🌐';
    });

    document.querySelectorAll('[data-translate-key]').forEach(el => {
      const key = el.getAttribute('data-translate-key');
      const translation = TRANSLATIONS[lang]?.[key];
      if (translation) {
        if (el.tagName === 'META') {
          el.setAttribute('content', translation);
        } else if (key === 'hero_greeting') {
          el.textContent = translation + ' ';
        } else {
          el.textContent = translation;
        }
      }
    });
  }

  function toggleLanguage() {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(newLang);
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    renderProjects(activeFilter);
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });

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

  document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

  document.getElementById('nav-toggle')?.addEventListener('click', () => {
    document.getElementById('main-nav')?.classList.toggle('open');
  });

  applyLanguage(currentLang);
  document.querySelectorAll('.lang-toggle').forEach(toggle => toggle.addEventListener('click', toggleLanguage));

  document.querySelector('[data-filter="all"]').classList.add('active');
  renderProjects("all");
});