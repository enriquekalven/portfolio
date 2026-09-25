export type Language = 'en' | 'es' | 'zh';

export interface Translations {
  banner: {
    tag: string;
    text: string;
  };
  nav: {
    about: string;
    analyst: string;
    services: string;
    experience: string;
    author: string;
    work: string;
    speaking: string;
    articles: string;
    awards: string;
    media: string;
    comic: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    quote: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaContact: string;
    copyEmail: string;
    emailCopied: string;
    socialProof: string;
    executivePills: {
      role: string;
      deals: string;
      analyst: string;
      experience: string;
    };
    endorsement: {
      quote: string;
      author: string;
      role: string;
      tag: string;
      awardTag: string;
    };
    metrics: {
      devs: string;
      tokens: string;
      deals: string;
      viewers: string;
      analystWins: string;
    };
  };
  sections: {
    analystTag: string;
    analystTitle: string;
    analystSubtitle: string;
    servicesTag: string;
    servicesTitle: string;
    collaborateBtn: string;
    experienceTag: string;
    experienceTitle: string;
    authorTag: string;
    authorTitle: string;
    authorSubtitle: string;
    authorBadge: string;
    launchAppBtn: string;
    workTag: string;
    workTitle: string;
    collapseFeatured: string;
    viewAllProjects: string;
    showMoreProjects: string;
    collapseProjects: string;
    caseStudyBtn: string;
    visitBtn: string;
    speakingTag: string;
    speakingTitle: string;
    collapseRecentSpeaking: string;
    viewAllKeynotes: string;
    showAllKeynotes: string;
    collapseKeynotes: string;
    articlesTag: string;
    articlesTitle: string;
    readPublication: string;
    awardsTag: string;
    awardsTitle: string;
    certsSubtitle: string;
    testimonialsTag: string;
    testimonialsTitle: string;
    contactTag: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  modal: {
    caseStudySuffix: string;
    highlights: string;
    strategy: string;
    team: string;
    visitProject: string;
    close: string;
  };
  footer: {
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    banner: {
      tag: 'NEWS',
      text: 'Enrique won a Silver Google AI Award (SWIFTY, 2026 Q3) for Advent of Agents & drove 4x Gartner/Forrester Leader wins 🏆'
    },
    nav: {
      about: 'About',
      analyst: 'Analyst Relations',
      services: 'Capabilities',
      experience: 'Career',
      author: 'Author',
      work: 'Work',
      speaking: 'Speaking',
      articles: 'Writing',
      awards: 'Trophies',
      media: 'Media 🎥',
      comic: 'Comic 🕵️‍♂️',
      contact: 'Get in Touch'
    },
    hero: {
      badge: 'Staff AI Technical Deployment Lead @ Google Cloud Delta',
      titleLine1: 'Architecting the',
      titleHighlight: 'Agentic Enterprise',
      quote: '"I listen, I take ownership to get things done, and I care about making people\'s lives easier."',
      subtitle: '15+ years transforming Enterprise Cloud, Data & AI into production-grade Agentic Workflows. Husband, father of 3, and Real Estate Investor in Seattle, WA.',
      ctaPrimary: 'Explore Career Journey',
      ctaSecondary: 'View Key Work',
      ctaContact: 'Quick Connect',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied enriq@google.com!',
      socialProof: 'Impact Across Industry Giants & Global Platforms',
      executivePills: {
        role: 'L6 Staff TDL & Outbound PM',
        deals: '$2B+ Multi-Year Deal Scope',
        analyst: '4x Gartner & Forrester Leader',
        experience: '15+ Yrs Enterprise Cloud & AI'
      },
      endorsement: {
        quote: "Thank you for your work and commitment to leading with customer empathy. Your team's story is a great example of how we work together to best support our customers and support each other.",
        author: 'Thomas Kurian',
        role: 'CEO, Google Cloud',
        tag: 'Executive Recognition',
        awardTag: 'Verified Leadership Commendation'
      },
      metrics: {
        devs: 'Developers Engaged (Advent of Agents)',
        tokens: 'Tokens Driven to Gemini',
        deals: 'Enterprise AI Pipeline & Deals',
        viewers: 'Olympic Viewers Served (NBC OLI)',
        analystWins: 'Gartner® & Forrester™ Leader Wins'
      }
    },
    sections: {
      analystTag: 'Analyst Relations & Market Leadership',
      analystTitle: '4x Gartner® & Forrester™ AI Leader Wins 📊',
      analystSubtitle: 'Dissecting hundreds of deeply technical RFI prompts, translating architectural reality into proof points, and building live demo environments across Product, Engineering, Field & AR teams.',
      servicesTag: 'Core Capabilities',
      servicesTitle: 'Enterprise AI Strategy & Execution ⚡',
      collaborateBtn: 'Collaborate',
      experienceTag: 'Professional Ledger',
      experienceTitle: 'Career Experience 💎',
      authorTag: 'Author & Creator Spotlight',
      authorTitle: 'Original Platforms & Applied Research 💡',
      authorSubtitle: 'Beyond enterprise cloud deployments, Enrique envisions, authors, and ships full-stack autonomous platforms, AI research agents, and family-first digital wellness architectures from scratch.',
      authorBadge: 'Author & Lead Architect',
      launchAppBtn: 'Launch App',
      workTag: 'Featured Delivery',
      workTitle: 'Marquee Projects & Innovations 🚀',
      collapseFeatured: 'Collapse to Featured (4)',
      viewAllProjects: 'View All Projects',
      showMoreProjects: 'Show More Projects',
      collapseProjects: 'Collapse Projects',
      caseStudyBtn: 'Case Study',
      visitBtn: 'Visit',
      speakingTag: 'Thought Leadership',
      speakingTitle: 'Keynotes & Speaking 🎤',
      collapseRecentSpeaking: 'Collapse to Recent (3)',
      viewAllKeynotes: 'View All Keynotes',
      showAllKeynotes: 'Show All Keynotes & Past Talks',
      collapseKeynotes: 'Collapse Keynotes',
      articlesTag: 'Articles & Research',
      articlesTitle: 'Writing & Whitepapers ✍️',
      readPublication: 'Read Publication',
      awardsTag: 'Accreditation',
      awardsTitle: 'Awards & Certifications 🏆',
      certsSubtitle: 'Professional Multi-Cloud Certifications',
      testimonialsTag: 'Executive Endorsements',
      testimonialsTitle: 'Kind Words from Google Leadership 💬',
      contactTag: 'Connect',
      contactTitle: 'Let’s Build Something Extraordinary 🤝',
      contactSubtitle: 'Whether you are scaling enterprise AI agents, looking for a keynote speaker, or connecting on real estate and cloud strategy — reach out below.'
    },
    modal: {
      caseStudySuffix: 'Case Study',
      highlights: 'Key Highlights',
      strategy: 'Strategic Win',
      team: 'Delivery Team',
      visitProject: 'Launch Live Experience',
      close: 'Close'
    },
    footer: {
      rights: '© 2026 ENRIQUE CHAN PORTFOLIO. BUILT FOR THE AGENTIC AGE.'
    }
  },
  es: {
    banner: {
      tag: 'NOVEDAD',
      text: 'Enrique ganó el premio Silver Google AI (SWIFTY, 2026 Q3) por Advent of Agents y lideró 4 victorias como Líder en Gartner/Forrester 🏆'
    },
    nav: {
      about: 'Perfil',
      analyst: 'Analistas',
      services: 'Capacidades',
      experience: 'Trayectoria',
      author: 'Autor',
      work: 'Proyectos',
      speaking: 'Conferencias',
      articles: 'Publicaciones',
      awards: 'Trofeos',
      media: 'Videos 🎥',
      comic: 'Cómic 🕵️‍♂️',
      contact: 'Contacto'
    },
    hero: {
      badge: 'Staff AI Technical Deployment Lead @ Google Cloud Delta',
      titleLine1: 'Arquitectando la',
      titleHighlight: 'Empresa Agéntica',
      quote: '"Escucho, asumo la responsabilidad para lograr resultados y me importa hacer la vida de las personas más sencilla."',
      subtitle: 'Más de 15 años transformando Nube Empresarial, Datos e IA en flujos de trabajo agénticos de producción. Esposo, padre de 3 e inversionista inmobiliario en Seattle, WA.',
      ctaPrimary: 'Ver Trayectoria Profesional',
      ctaSecondary: 'Ver Proyectos Clave',
      ctaContact: 'Contacto Rápido',
      copyEmail: 'Copiar Email',
      emailCopied: '¡Copiado enriq@google.com!',
      socialProof: 'Impacto en Gigantes de la Industria y Plataformas Globales',
      executivePills: {
        role: 'L6 Staff TDL y PM Rotador',
        deals: 'Alcance de Acuerdos $2B+',
        analyst: '4x Líder Gartner y Forrester',
        experience: 'Más de 15 Años Nube e IA Empresarial'
      },
      endorsement: {
        quote: 'Gracias por tu trabajo y compromiso al liderar con empatía hacia el cliente. La historia de tu equipo es un gran ejemplo de cómo trabajamos juntos para apoyar mejor a nuestros clientes y apoyarnos mutuamente.',
        author: 'Thomas Kurian',
        role: 'CEO, Google Cloud',
        tag: 'Reconocimiento Ejecutivo',
        awardTag: 'Felicitación de Liderazgo Verificada'
      },
      metrics: {
        devs: 'Desarrolladores (Advent of Agents)',
        tokens: 'Tokens Generados en Gemini',
        deals: 'Acuerdos Empresariales IA Capturados',
        viewers: 'Espectadores Olímpicos (NBC OLI)',
        analystWins: 'Victorias como Líder en Gartner® y Forrester™'
      }
    },
    sections: {
      analystTag: 'Relaciones con Analistas y Liderazgo de Mercado',
      analystTitle: '4x Victorias como Líder en Gartner® y Forrester™ 📊',
      analystSubtitle: 'Analizando cientos de preguntas técnicas RFI, traduciendo la arquitectura real en pruebas sólidas y construyendo demostraciones en vivo junto a Producto, Ingeniería y AR.',
      servicesTag: 'Capacidades Clave',
      servicesTitle: 'Estrategia y Ejecución de IA Empresarial ⚡',
      collaborateBtn: 'Colaborar',
      experienceTag: 'Registro Profesional',
      experienceTitle: 'Experiencia Profesional 💎',
      authorTag: 'Autor y Creador',
      authorTitle: 'Plataformas Originales e Investigación 💡',
      authorSubtitle: 'Más allá de implementaciones empresariales en la nube, Enrique diseña, programa y publica plataformas autónomas, agentes de investigación de IA y arquitecturas familiares de bienestar digital desde cero.',
      authorBadge: 'Autor y Arquitecto Líder',
      launchAppBtn: 'Abrir App',
      workTag: 'Portafolio Destacado',
      workTitle: 'Proyectos e Innovaciones Clave 🚀',
      collapseFeatured: 'Ver Destacados (4)',
      viewAllProjects: 'Ver Todos los Proyectos',
      showMoreProjects: 'Mostrar Más Proyectos',
      collapseProjects: 'Colapsar Proyectos',
      caseStudyBtn: 'Caso de Estudio',
      visitBtn: 'Visitar',
      speakingTag: 'Liderazgo de Opinión',
      speakingTitle: 'Conferencias y Charlas Magistrales 🎤',
      collapseRecentSpeaking: 'Ver Recientes (3)',
      viewAllKeynotes: 'Ver Todas las Charlas',
      showAllKeynotes: 'Mostrar Todas las Charlas y Conferencias',
      collapseKeynotes: 'Colapsar Conferencias',
      articlesTag: 'Artículos e Investigación',
      articlesTitle: 'Publicaciones y Whitepapers ✍️',
      readPublication: 'Leer Publicación',
      awardsTag: 'Acreditaciones y Reconocimientos',
      awardsTitle: 'Premios y Certificaciones 🏆',
      certsSubtitle: 'Certificaciones Profesionales Multi-Nube',
      testimonialsTag: 'Respaldo Ejecutivo',
      testimonialsTitle: 'Palabras de Líderes de Google 💬',
      contactTag: 'Conectar',
      contactTitle: 'Construyamos Algo Extraordinario 🤝',
      contactSubtitle: 'Ya sea que estés escalando agentes de IA empresariales, buscando un conferencista principal o conectando sobre estrategia en la nube — contáctame.'
    },
    modal: {
      caseStudySuffix: 'Caso de Estudio',
      highlights: 'Logros Clave',
      strategy: 'Estrategia de Arquitectura',
      team: 'Equipo de Entrega',
      visitProject: 'Abrir Proyecto en Vivo',
      close: 'Cerrar'
    },
    footer: {
      rights: '© 2026 PORTAFOLIO DE ENRIQUE CHAN. DISEÑADO PARA LA ERA AGÉNTICA.'
    }
  },
  zh: {
    banner: {
      tag: '最新荣誉',
      text: 'Enrique 荣获 Google AI 银奖 (SWIFTY, 2026 Q3 - Advent of Agents)，并主导 4 项 Gartner/Forrester 领导者象限大满贯 🏆'
    },
    nav: {
      about: '关于我',
      analyst: '分析师报告',
      services: '核心能力',
      experience: '职业履历',
      author: '原创作品',
      work: '精选作品',
      speaking: '演讲动态',
      articles: '技术专栏',
      awards: '荣誉与认证',
      media: '视频中心 🎥',
      comic: '漫画 🕵️‍♂️',
      contact: '联系合作'
    },
    hero: {
      badge: 'Google Cloud Delta 首席 AI 技术部署负责人 (Staff TDL)',
      titleLine1: '构建面向未来的',
      titleHighlight: '智能体企业架构',
      quote: '“倾听需求，担当尽责，致力于用技术让人们的工作与生活更轻松。”',
      subtitle: '深耕企业级云架构、数据与 AI 领域逾 15 年，专注将前沿大模型转化为生产级智能体 (Agentic) 工作流。定居西雅图，三个孩子的父亲与地产投资者。',
      ctaPrimary: '查看职业轨迹',
      ctaSecondary: '浏览代表作品',
      ctaContact: '即时联络',
      copyEmail: '复制邮箱',
      emailCopied: '已复制 enriq@google.com！',
      socialProof: '赋能全球科技巨头与行业领军平台',
      executivePills: {
        role: 'L6 Staff TDL & 跨职能产品负责人 (PM)',
        deals: '主导 $2B+ 商业合同架构',
        analyst: '4x Gartner 与 Forrester 领军象限',
        experience: '15+ 年企业级云与 AI 经验'
      },
      endorsement: {
        quote: '感谢你的杰出工作以及坚持以客户同理心为导向的担当。你团队的故事展示了我们如何紧密协作、全力支持客户并相互成就的最佳典范。',
        author: 'Thomas Kurian',
        role: 'CEO, Google Cloud',
        tag: '高管特别嘉奖',
        awardTag: 'Google Cloud 最高领导层官方评语'
      },
      metrics: {
        devs: '赋能开发者 (Advent of Agents)',
        tokens: '驱动 Gemini Token 消耗',
        deals: '主导企业级 AI 商业合同规模',
        viewers: '服务奥运观众 (NBC OLI 助手)',
        analystWins: 'Gartner® 与 Forrester™ 领导者象限大满贯'
      }
    },
    sections: {
      analystTag: '分析师关系与市场领导力',
      analystTitle: '4x Gartner® 与 Forrester™ 领导者象限大满贯 📊',
      analystSubtitle: '深入剖析数百项高难度技术 RFI 质询，将底层架构转化为权威实证，并跨产品、工程与分析师团队构建高可用现场演示环境。',
      servicesTag: '核心专长',
      servicesTitle: '企业级 AI 战略与工程落地 ⚡',
      collaborateBtn: '探讨合作',
      experienceTag: '职业档案',
      experienceTitle: '职业履历与关键成就 💎',
      authorTag: '作者与独立创造者',
      authorTitle: '原创智能体平台与前沿研究 💡',
      authorSubtitle: '除企业级大规模云与智能体部署外，Enrique 独立主导研发了多个端到端全栈自主平台、AI 经济研究智能体与数字健康守护体系。',
      authorBadge: '作者与首席架构师',
      launchAppBtn: '体验应用',
      workTag: '精选项目',
      workTitle: '生产级 AI 与标杆项目 🚀',
      collapseFeatured: '收起至精选 (4)',
      viewAllProjects: '查看全部项目',
      showMoreProjects: '展开更多项目',
      collapseProjects: '收起项目列表',
      caseStudyBtn: '案例剖析',
      visitBtn: '在线访问',
      speakingTag: '行业影响力',
      speakingTitle: '全球峰会演讲与技术布道 🎤',
      collapseRecentSpeaking: '收起至最新 (3)',
      viewAllKeynotes: '查看全部演讲',
      showAllKeynotes: '展开全部主题演讲与技术分享',
      collapseKeynotes: '收起演讲列表',
      articlesTag: '技术文章与研究',
      articlesTitle: '专栏文章与官方白皮书 ✍️',
      readPublication: '阅读原文',
      awardsTag: '荣誉殿堂',
      awardsTitle: '奖项与专业认证 🏆',
      certsSubtitle: '跨云架构与 AI 专业认证',
      testimonialsTag: '高管评价',
      testimonialsTitle: '来自 Google 高管与同行的认可 💬',
      contactTag: '保持联系',
      contactTitle: '携手打造非凡的 AI 解决方案 🤝',
      contactSubtitle: '无论您正在扩展企业级 AI 智能体、寻求峰会主题演讲嘉宾，还是探讨云架构与投资策略，欢迎随时与我联系。'
    },
    modal: {
      caseStudySuffix: '案例深度解析',
      highlights: '核心亮点与成果',
      strategy: '架构与战略思考',
      team: '交付团队',
      visitProject: '访问在线项目',
      close: '关闭'
    },
    footer: {
      rights: '© 2026 ENRIQUE CHAN 个人作品集 · 为智能体时代而生'
    }
  }
};
