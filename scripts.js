document.addEventListener('DOMContentLoaded', () => {
  // Adiciona um listener para garantir que o script só execute após o HTML estar completamente carregado.
  const root = document.documentElement;
  // Obtém a referência ao elemento <html> (necessário para manipulação do tema e idioma).

  // --- Translation Data ---
  const TRANSLATIONS = {
    // Objeto que armazena os dados de tradução (internacionalização) por idioma.
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
      'hero_lead_full_wrapper': '',
      'hero_lead': 'Desenvolvedor de software',
      'hero_lead_2': 'Frontend & Backend',
      'hero_lead_3': 'Aplicações web modernas e escaláveis.',
      'hero_cta': 'Ver Projetos',
      // Profile
      'profile_role': 'Desenvolvedor de Software',
      'profile_location': '📍 Brasil, São José dos Campos',
      'social_email': '✉️ E-mail',
      'social_github': '💻 GitHub',
      'social_linkedin': '🔗 LinkedIn',
      // About
      'section_about': 'Sobre',
      'about_text': 'Sou um desenvolvedor focado em entregar soluções práticas, eficientes e de alto desempenho. Domino tecnologias modernas e valorizo boas práticas, arquitetura limpa e experiência do usuário.',
      // Skills
      'section_skills': 'Competências',
      'skill_frontend_title': 'Frontend',
      'skill_frontend_desc': 'HTML5, CSS3, JavaScript (ES6+), React, TypeScript',
      'skill_backend_title': 'Backend',
      'skill_backend_desc': 'Node.js, Python (Flask/Django), REST APIs',
      'skill_db_title': 'Banco de Dados',
      'skill_db_desc': 'PostgreSQL, MySQL, MongoDB',
      'skill_other_title': 'Outros',
      'skill_other_desc': 'Git, Docker, AWS, CI/CD',
      'skill_lang_title': 'Competências linguísticas',
      'skill_lang_desc': 'Inglês avançado C1, Alemão Básico',
      // Projects
      'section_projects': 'Projetos em destaque',
      'project_banana_title': 'Site da Banana',
      'project_banana_meta': 'Next.js · Vercel',
      'project_banana_desc': 'Preview real do projeto “Site da Banana”.',
      'project_banana_cta_site': 'Abrir Site',
      'project_banana_cta_details': 'Detalhes',
      'project_api_title': 'API de Processamento — Censo SJC',
      'project_api_meta': 'Python · Flask · ETL',
      'project_api_desc': 'API de processamento de dados do censo de São José dos Campos.',
      // Downloads / Docs
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
      'hero_lead_full_wrapper': '',
      'hero_lead': 'Software Developer',
      'hero_lead_2': 'Frontend & Backend',
      'hero_lead_3': 'Modern and scalable web applications.',
      'hero_cta': 'View Projects',
      // Profile
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
      'skill_frontend_desc': 'HTML5, CSS3, JavaScript (ES6+), React, TypeScript',
      'skill_backend_title': 'Backend',
      'skill_backend_desc': 'Node.js, Python (Flask/Django), REST APIs',
      'skill_db_title': 'Database',
      'skill_db_desc': 'PostgreSQL, MySQL, MongoDB',
      'skill_other_title': 'Other',
      'skill_other_desc': 'Git, Docker, AWS, CI/CD',
      'skill_lang_title': 'Language Skills',
      'skill_lang_desc': 'Advanced English C1, Basic German',
      // Projects
      'section_projects': 'Featured Projects',
      'project_banana_title': 'Banana Website',
      'project_banana_meta': 'Next.js · Vercel',
      'project_banana_desc': 'Live preview of the "Banana Website" project.',
      'project_banana_cta_site': 'Open Site',
      'project_banana_cta_details': 'Details',
      'project_api_title': 'Processing API — SJC Census',
      'project_api_meta': 'Python · Flask · ETL',
      'project_api_desc': 'Data processing API for the São José dos Campos census.',
      // Downloads / Docs
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
  // Obtém o elemento <span> com o ID 'year' (rodapé da index.html).
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Se o elemento existir, preenche-o com o ano atual.
  const yearEl2 = document.getElementById('year-2');
  // Obtém o elemento <span> com o ID 'year-2' (rodapé da projects.html).
  if (yearEl2) yearEl2.textContent = new Date().getFullYear();
  // Se o elemento existir, preenche-o com o ano atual.


  // --- Mobile Nav Toggle (Funciona em index.html e projects.html) ---
  const navToggle = document.getElementById('nav-toggle');
  // Obtém o botão de menu mobile (hambúrguer) da index.html.
  const mainNav = document.getElementById('main-nav');
  // Obtém o elemento <nav> da index.html.
  if (navToggle && mainNav) {
    // Verifica se os elementos existem.
    navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
    // Adiciona um listener: ao clicar, alterna a classe 'open' no menu para exibi-lo/escondê-lo.
  }
  const navToggle2 = document.getElementById('nav-toggle-2');
  // Obtém o botão de menu mobile (hambúrguer) da projects.html.
  const mainNav2 = document.getElementById('main-nav-2');
  // Obtém o elemento <nav> da projects.html.
  if (navToggle2 && mainNav2) {
    // Verifica se os elementos existem.
    navToggle2.addEventListener('click', () => mainNav2.classList.toggle('open'));
    // Adiciona um listener: ao clicar, alterna a classe 'open' no menu para exibi-lo/escondê-lo.
  }


  // --- Language Toggle Logic (Corrigido) ---
  const savedLang = localStorage.getItem('lang');
  // Tenta obter o idioma salvo anteriormente no Local Storage do navegador.
  // Se não houver idioma salvo, usa o atributo 'lang' do HTML ou 'pt' como padrão.
  let currentLang = savedLang || root.getAttribute('lang') || 'pt';
  // Define o idioma atual com base na preferência salva, no atributo do HTML ou em 'pt' (Português) como fallback.

  const applyLanguage = (lang) => {
    // Função principal para aplicar as traduções e o idioma.
    currentLang = lang;
    // Atualiza a variável que armazena o idioma atual.
    root.setAttribute('lang', lang);
    // Define o atributo 'lang' no elemento <html>.
    localStorage.setItem('lang', lang);
    // Salva o idioma atual no Local Storage para persistência.

    // 1. Atualiza o ícone de todos os botões de idioma
    document.querySelectorAll('.lang-toggle').forEach(toggle => {
      // Busca e itera sobre todos os botões de alternância de idioma.
      toggle.textContent = lang === 'en' ? '🇧🇷' : '🌐';
      // Altera o emoji do botão: se o idioma atual for 'en', mostra '🇧🇷' (para trocar para 'pt'), caso contrário, mostra '🌐'.
    });

    // 2. Itera e atualiza o texto de todos os elementos traduzíveis
    document.querySelectorAll('[data-translate-key]').forEach(el => {
      // Busca e itera sobre todos os elementos que têm o atributo 'data-translate-key'.
      const key = el.getAttribute('data-translate-key');
      // Obtém a chave de tradução específica do elemento.
      const translation = TRANSLATIONS[lang] ? TRANSLATIONS[lang][key] : null;
      // Busca o texto traduzido no objeto TRANSLATIONS para o idioma e chave.

      if (translation !== null && translation !== undefined) {
        // Se uma tradução válida foi encontrada.
        if (el.tagName === 'META') {
          // Verifica se o elemento é uma meta tag.
          // Trata a meta tag de descrição
          el.setAttribute('content', translation);
          // Atualiza o atributo 'content' da meta tag (necessário para meta tags).
        } else if (key === 'hero_greeting') {
            // Se for o texto "Olá — eu sou" (parte do H1 com destaque).
            // Trata o H1 (Olá — eu sou Rodolfo) mantendo o span de destaque (Rodolfo)
            const accentSpan = el.parentElement.querySelector('.accent');
            // Procura o <span> com a classe "accent" (que contém "Rodolfo") dentro do pai (o <h1>).
            el.textContent = translation + ' ';
            // Atualiza o texto do <span> de saudação. O espaço é crucial.
            // Se o span de destaque existir, o JS precisa recolocá-lo, pois el.textContent o remove.
            if (accentSpan) {
                // Se o span de destaque foi encontrado.
                el.parentElement.appendChild(accentSpan);
                // Anexa o span de destaque de volta ao elemento pai (o <h1>).
            }
        } else if (key === 'hero_lead_full_wrapper') {
            // Se for o wrapper do texto de destaque no Hero.
            // Ignora o elemento wrapper, pois o conteúdo será preenchido pelos spans filhos
        }
        else {
          // Para a maioria dos outros elementos.
          // Se o elemento for um input/button que deve usar value ao invés de textContent, tratar
          if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.value = translation;
          } else {
            // Atualização de texto simples para a maioria dos elementos
            el.textContent = translation;
          }
        }
      }
    });

    // Atualiza também o título do documento (caso a tag <title> exista)
    const titleEl = document.querySelector('title[data-translate-key="title_main"]');
    if (titleEl && TRANSLATIONS[lang] && TRANSLATIONS[lang]['title_main']) {
      titleEl.textContent = TRANSLATIONS[lang]['title_main'];
    }
  };

  const toggleLanguage = () => {
    // Função que alterna entre os idiomas.
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    // Define o novo idioma (alterna entre 'pt' e 'en').
    applyLanguage(newLang);
    // Chama a função para aplicar o novo idioma.
  };

  // Inicializa o idioma e adiciona listeners para todos os botões de idioma
  applyLanguage(currentLang);
  // Aplica o idioma inicial (salvo ou padrão) assim que o script é carregado.
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    // Busca e itera sobre todos os botões de alternância de idioma novamente.
    toggle.addEventListener('click', toggleLanguage);
    // Adiciona o listener para a função toggleLanguage.
  });


  // --- Theme Toggle Logic (Manutenção do código original) ---
  const savedTheme = localStorage.getItem('theme');
  // Tenta obter o tema salvo no Local Storage.
  if (savedTheme) root.setAttribute('data-theme', savedTheme);
  // Se houver tema salvo, aplica o atributo 'data-theme' ao elemento <html>.

  const applyTheme = (theme) => {
    // Função que aplica um tema específico.
    root.setAttribute('data-theme', theme);
    // Define o atributo 'data-theme' no elemento <html>.
    localStorage.setItem('theme', theme);
    // Salva o tema no Local Storage.
    document.querySelectorAll('.theme-toggle').forEach(toggle => {
      // Busca e itera sobre todos os botões de alternância de tema.
      if (toggle) toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      // Altera o emoji do botão: se for 'dark', mostra '☀️' (para trocar para claro), caso contrário, mostra '🌙'.
    });
  };

  document.querySelectorAll('.theme-toggle').forEach(toggle => {
    // Busca e itera sobre todos os botões de alternância de tema.
    if (toggle) {
        // Se o botão existir.
        applyTheme(savedTheme || 'light');
        // Aplica o tema inicial (salvo ou 'light' como padrão).
        toggle.addEventListener('click', () => {
          // Adiciona o listener para alternar o tema.
          const current = root.getAttribute('data-theme');
          // Obtém o tema atual.
          applyTheme(current === 'dark' ? 'light' : 'dark');
          // Aplica o tema oposto, alternando entre 'dark' e 'light'.
        });
    }
  });
});
