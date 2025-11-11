document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // --- Translation Data ---
  const TRANSLATIONS = {
    'pt': {
      // General & Nav
      'title_main': 'Rodolfo — Portfólio',
      'meta_description': 'Portfólio profissional de desenvolvedor — projetos, competências e contato.',
      'nav_menu': 'Menu',
      'nav_sobre': 'Sobre',
      'nav_competencias': 'Competências',
      'nav_projetos': 'Projetos',
      'nav_docs': 'Docs',
      // Hero
      'hero_greeting': 'Olá — eu sou',
      'hero_lead_full_wrapper': '', // Chave Wrapper não traduzida diretamente
      'hero_lead': 'Desenvolvedor de software',
      'hero_lead_2': 'Frontend & Backend',
      'hero_lead_3': 'Aplicações web modernas e escaláveis.',
      'hero_cta': 'Ver Projetos',
      'profile_role': 'Desenvolvedor de Software',
      'profile_location': '📍 Brasil, São José dos Campos',
      'social_email': '✉️ E-mail',
      'social_github': '💻 GitHub',
      'social_linkedin': '🔗 LinkedIn',
      // Sobre
      'section_about': 'Sobre',
      'about_text': 'Sou um desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário.',
      // Competências
      'section_skills': 'Competências',
      'skill_frontend_title': 'Frontend',
      'skill_backend_title': 'Backend',
      'skill_db_title': 'Banco de Dados',
      'skill_other_title': 'Outros',
      'skill_lang_title': 'Competencias linguísticas',
      // Projetos
      'section_projects': 'Projetos em destaque',
      'project_banana_title': 'Site da Banana',
      'project_banana_desc': 'Preview real do projeto “Site da Banana”.',
      'project_banana_cta_site': 'Abrir Site',
      'project_banana_cta_details': 'Detalhes',
      'project_api_title': 'API de Processamento — Censo SJC',
      'project_api_desc': 'API de processamento de dados do censo de São José dos Campos.',
      // Downloads
      'section_docs': 'Currículo e Documentos',
      'docs_subtitle': 'Acesse meus documentos profissionais.',
      'doc_cv_title': 'Currículo (PDF)',
      'doc_cv_desc': 'Experiência e formação completa. (Aberto em nova aba)',
      'doc_cv_cta': '📄 Baixar / Visualizar',
      'doc_cert_title': 'Certificado SCRUM',
      'doc_cert_desc': 'Certificação pela Escola de Inovadores INOVA CPS. (40h)',
      'doc_cert_cta': '🏆 Visualizar Certificado',
      // Footer
      'footer_text': '©RodolfoFerreira',
      // projects.html specific
      'proj_title_page': 'Projetos — Rodolfo',
      'proj_title': 'Projetos detalhados',
      'proj_banana_h3': 'Site da Banana — Demo hospedada no Vercel',
      'proj_banana_desc_detail': 'Descrição: Site institucional / demonstração hospedada em Vercel. Acesse o site completo clicando no botão abaixo.',
      'proj_banana_cta': 'Abrir Demo',
      'proj_footer': 'Projetos',
      'footer_copy': '©',
      'back_home': 'Voltar',
    },
    'en': {
      // General & Nav
      'title_main': 'Rodolfo — Portfolio',
      'meta_description': 'Professional developer portfolio — projects, skills, and contact.',
      'nav_menu': 'Menu',
      'nav_sobre': 'About',
      'nav_competencias': 'Skills',
      'nav_projetos': 'Projects',
      'nav_docs': 'Docs',
      // Hero
      'hero_greeting': 'Hello — I am',
      'hero_lead_full_wrapper': '', // Chave Wrapper não traduzida diretamente
      'hero_lead': 'Software Developer',
      'hero_lead_2': 'Frontend & Backend',
      'hero_lead_3': 'Modern and scalable web applications.',
      'hero_cta': 'View Projects',
      'profile_role': 'Software Developer',
      'profile_location': '📍 Brazil, São José dos Campos',
      'social_email': '✉️ E-mail',
      'social_github': '💻 GitHub',
      'social_linkedin': '🔗 LinkedIn',
      // About
      'section_about': 'About',
      'about_text': 'I am a developer focused on delivering practical, efficient, and high-performance solutions. I master modern technologies and value good practices, clean architecture, and user experience.',
      // Skills
      'section_skills': 'Skills',
      'skill_frontend_title': 'Frontend',
      'skill_backend_title': 'Backend',
      'skill_db_title': 'Database',
      'skill_other_title': 'Other',
      'skill_lang_title': 'Language Skills',
      // Projects
      'section_projects': 'Featured Projects',
      'project_banana_title': 'Banana Website',
      'project_banana_desc': 'Live preview of the "Banana Website" project.',
      'project_banana_cta_site': 'Open Site',
      'project_banana_cta_details': 'Details',
      'project_api_title': 'Processing API — SJC Census',
      'project_api_desc': 'Data processing API for the São José dos Campos census.',
      // Downloads
      'section_docs': 'Résumé and Documents',
      'docs_subtitle': 'Access my professional documents.',
      'doc_cv_title': 'Résumé (PDF)',
      'doc_cv_desc': 'Complete experience and education. (Opens in new tab)',
      'doc_cv_cta': '📄 Download / View',
      'doc_cert_title': 'SCRUM Certificate',
      'doc_cert_desc': 'Certification by INOVA CPS Innovators School. (40h)',
      'doc_cert_cta': '🏆 View Certificate',
      // Footer
      'footer_text': '©RodolfoFerreira',
      // projects.html specific
      'proj_title_page': 'Projects — Rodolfo',
      'proj_title': 'Detailed Projects',
      'proj_banana_h3': 'Banana Website — Demo hosted on Vercel',
      'proj_banana_desc_detail': 'Description: Institutional site / demo hosted on Vercel. Access the full site by clicking the button below.',
      'proj_banana_cta': 'Open Demo',
      'proj_footer': 'Projects',
      'footer_copy': '©',
      'back_home': 'Back',
    }
  };


  // --- Year Display ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const yearEl2 = document.getElementById('year-2');
  if (yearEl2) yearEl2.textContent = new Date().getFullYear();


  // --- Mobile Nav Toggle (Funciona em index.html e projects.html) ---
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  }
  const navToggle2 = document.getElementById('nav-toggle-2');
  const mainNav2 = document.getElementById('main-nav-2');
  if (navToggle2 && mainNav2) {
    navToggle2.addEventListener('click', () => mainNav2.classList.toggle('open'));
  }


  // --- Language Toggle Logic (Corrigido) ---
  const savedLang = localStorage.getItem('lang');
  // Se não houver idioma salvo, usa o atributo 'lang' do HTML ou 'pt' como padrão.
  let currentLang = savedLang || root.getAttribute('lang') || 'pt';

  const applyLanguage = (lang) => {
    currentLang = lang;
    root.setAttribute('lang', lang);
    localStorage.setItem('lang', lang);

    // 1. Atualiza o ícone de todos os botões de idioma
    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      toggle.textContent = lang === 'en' ? '🇧🇷' : '🌐';
    });

    // 2. Itera e atualiza o texto de todos os elementos traduzíveis
    document.querySelectorAll('[data-translate-key]').forEach(el => {
      const key = el.getAttribute('data-translate-key');
      const translation = TRANSLATIONS[lang] ? TRANSLATIONS[lang][key] : null;

      if (translation !== null) {
        if (el.tagName === 'META') {
          // Trata a meta tag de descrição
          el.setAttribute('content', translation);
        } else if (key === 'hero_greeting') {
            // Trata o H1 (Olá — eu sou Rodolfo) mantendo o span de destaque (Rodolfo)
            const accentSpan = el.parentElement.querySelector('.accent');
            el.textContent = translation + ' '; 
            // Se o span de destaque existir, o JS precisa recolocá-lo, pois el.textContent o remove.
            if (accentSpan) {
                el.parentElement.appendChild(accentSpan);
            }
        } else if (key === 'hero_lead_full_wrapper') {
            // Ignora o elemento wrapper, pois o conteúdo será preenchido pelos spans filhos
        }
        else {
          // Atualização de texto simples para a maioria dos elementos
          el.textContent = translation;
        }
      }
    });
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLanguage(newLang);
  };

  // Inicializa o idioma e adiciona listeners para todos os botões de idioma
  applyLanguage(currentLang);
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.addEventListener('click', toggleLanguage);
  });


  // --- Theme Toggle Logic (Manutenção do código original) ---
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) root.setAttribute('data-theme', savedTheme);

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(toggle => {
      if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
  };

  document.querySelectorAll('.theme-toggle').forEach(toggle => {
    if (toggle) {
        applyTheme(savedTheme || 'light');
        toggle.addEventListener('click', () => {
          const current = root.getAttribute('data-theme');
          applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }
  });
});