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
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: {
      devs: string;
      tokens: string;
      deals: string;
      viewers: string;
    };
  };
  sections: {
    analystTag: string;
    analystTitle: string;
    analystSubtitle: string;
    servicesTag: string;
    servicesTitle: string;
    experienceTag: string;
    experienceTitle: string;
    workTag: string;
    workTitle: string;
    speakingTag: string;
    speakingTitle: string;
    articlesTag: string;
    articlesTitle: string;
    awardsTag: string;
    awardsTitle: string;
    testimonialsTag: string;
    testimonialsTitle: string;
    contactTag: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  modal: {
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
      subtitle: '15+ years transforming Enterprise Cloud, Data & AI into production-grade Agentic Workflows. Husband, father of 3, and Real Estate Investor in Seattle, WA.',
      ctaPrimary: 'Explore Career Journey',
      ctaSecondary: 'View Key Work',
      metrics: {
        devs: 'Developers Engaged (Advent of Agents)',
        tokens: 'Tokens Driven to Gemini',
        deals: 'Enterprise AI Pipeline & Deals',
        viewers: 'Olympic Viewers Served (NBC OLI)'
      }
    },
    sections: {
      analystTag: 'Analyst Relations & Market Leadership',
      analystTitle: '4x Gartner® & Forrester™ AI Leader Wins 📊',
      analystSubtitle: 'Dissecting hundreds of deeply technical RFI prompts, translating architectural reality into proof points, and building live demo environments across Product, Engineering, Field & AR teams.',
      servicesTag: 'Core Capabilities',
      servicesTitle: 'Enterprise AI Strategy & Execution ⚡',
      experienceTag: 'Career Ledger',
      experienceTitle: '15+ Years of High-Scale Impact 📈',
      workTag: 'Featured Portfolio',
      workTitle: 'Production AI & Marquee Systems 🚀',
      speakingTag: 'Global Keynotes & Enablement',
      speakingTitle: 'Speaking & Technical Evangelism 🎙️',
      articlesTag: 'Architect’s Ledger',
      articlesTitle: 'Writing & Thought Leadership ✍️',
      awardsTag: 'Accreditation & Honors',
      awardsTitle: 'Awards & Certifications 🏆',
      testimonialsTag: 'Social Capital',
      testimonialsTitle: 'What Leaders & Peers Say 💬',
      contactTag: 'Connect',
      contactTitle: 'Let’s Build Something Extraordinary 🤝',
      contactSubtitle: 'Whether you are scaling enterprise AI agents, looking for a keynote speaker, or connecting on real estate and cloud strategy — reach out below.'
    },
    capabilities: [
      {
        title: 'Enterprise Agentic Systems (ADK & A2A)',
        description: 'Architecting multi-agent swarms, Governance-as-Code (AgentOps Cockpit), and end-to-end OAuth security for Fortune 500 deployments.'
      },
      {
        title: 'High-Scale Cloud & MLOps',
        description: 'Proven track record scaling platforms from 0 to 100M+ users (Disney+, NBC Olympics 40M viewers) with Vertex AI, BigQuery, and RLHF.'
      },
      {
        title: 'Analyst Relations & Evangelism',
        description: '4x Gartner® & Forrester™ AI Leader contributor, keynote speaker at Google Cloud Next & Build with Gemini, co-author of Intro to Agents (1.5M+ readers).'
      }
    ],
    modal: {
      highlights: 'Key Highlights & Impact',
      strategy: 'Architectural Strategy',
      team: 'Core Team',
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
      analyst: 'Analistas (Gartner/Forrester)',
      services: 'Capacidades',
      experience: 'Trayectoria',
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
      subtitle: 'Más de 15 años transformando Nube Empresarial, Datos e IA en flujos de trabajo agénticos de producción. Esposo, padre de 3 e inversionista inmobiliario en Seattle, WA.',
      ctaPrimary: 'Ver Trayectoria',
      ctaSecondary: 'Ver Proyectos Clave',
      metrics: {
        devs: 'Desarrolladores (Advent of Agents)',
        tokens: 'Tokens Generados en Gemini',
        deals: 'Ventas e Impacto Empresarial IA',
        viewers: 'Espectadores Olímpicos (NBC OLI)'
      }
    },
    sections: {
      analystTag: 'Relaciones con Analistas y Liderazgo de Mercado',
      analystTitle: '4x Victorias como Líder en Gartner® y Forrester™ 📊',
      analystSubtitle: 'Analizando cientos de preguntas técnicas RFI, traduciendo la arquitectura real en pruebas sólidas y construyendo demostraciones en vivo junto a Producto, Ingeniería y AR.',
      servicesTag: 'Capacidades Clave',
      servicesTitle: 'Estrategia y Ejecución de IA Empresarial ⚡',
      experienceTag: 'Trayectoria Profesional',
      experienceTitle: '15+ Años de Impacto a Gran Escala 📈',
      workTag: 'Portafolio Destacado',
      workTitle: 'IA en Producción y Sistemas Críticos 🚀',
      speakingTag: 'Conferencias Globales',
      speakingTitle: 'Charlas y Evangelismo Técnico 🎙️',
      articlesTag: 'Bitácora del Arquitecto',
      articlesTitle: 'Publicaciones y Liderazgo de Opinión ✍️',
      awardsTag: 'Acreditaciones y Reconocimientos',
      awardsTitle: 'Premios y Certificaciones 🏆',
      testimonialsTag: 'Capital Social',
      testimonialsTitle: 'Lo Que Dicen los Líderes 💬',
      contactTag: 'Conectar',
      contactTitle: 'Construyamos Algo Extraordinario 🤝',
      contactSubtitle: 'Ya sea que estés escalando agentes de IA empresariales, buscando un conferencista principal o conectando sobre estrategia en la nube — contáctame.'
    },
    capabilities: [
      {
        title: 'Sistemas Agénticos Empresariales (ADK y A2A)',
        description: 'Arquitectura de enjambres multi-agente, Gobernanza como Código (AgentOps Cockpit) y seguridad OAuth de extremo a extremo para empresas Fortune 500.'
      },
      {
        title: 'Nube a Gran Escala y MLOps',
        description: 'Experiencia comprobada escalando plataformas de 0 a más de 100M de usuarios (Disney+, Juegos Olímpicos NBC 40M espectadores) con Vertex AI, BigQuery y RLHF.'
      },
      {
        title: 'Relaciones con Analistas y Evangelismo',
        description: 'Contribuidor clave en 4 victorias como Líder en Gartner® y Forrester™, orador principal en Google Cloud Next y Build with Gemini, coautor de Intro to Agents (1.5M+ lectores).'
      }
    ],
    modal: {
      highlights: 'Logros e Impacto Clave',
      strategy: 'Estrategia de Arquitectura',
      team: 'Equipo Principal',
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
      analyst: '分析师报告 (Gartner/Forrester)',
      services: '核心能力',
      experience: '职业履历',
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
      subtitle: '深耕企业级云架构、数据与 AI 领域逾 15 年，专注将前沿大模型转化为生产级智能体 (Agentic) 工作流。定居西雅图，三个孩子的父亲与地产投资者。',
      ctaPrimary: '查看职业轨迹',
      ctaSecondary: '查看核心项目',
      metrics: {
        devs: '赋能开发者 (Advent of Agents)',
        tokens: '驱动 Gemini Token 消耗',
        deals: '主导企业级 AI 商业合同规模',
        viewers: '服务奥运观众 (NBC OLI 助手)'
      }
    },
    sections: {
      analystTag: '分析师关系与市场领导力',
      analystTitle: '4x Gartner® 与 Forrester™ 领导者象限大满贯 📊',
      analystSubtitle: '深入剖析数百项高难度技术 RFI 质询，将底层架构转化为权威实证，并跨产品、工程与分析师团队构建高可用现场演示环境。',
      servicesTag: '核心专长',
      servicesTitle: '企业级 AI 战略与工程落地 ⚡',
      experienceTag: '职业轨迹',
      experienceTitle: '15+ 年超大规模系统交付经验 📈',
      workTag: '代表作与案例',
      workTitle: '生产级 AI 与标杆项目 🚀',
      speakingTag: '全球主题演讲',
      speakingTitle: '技术布道与峰会演讲 🎙️',
      articlesTag: '架构师专栏',
      articlesTitle: '技术文章与行业白皮书 ✍️',
      awardsTag: '荣誉殿堂',
      awardsTitle: '奖项与专业认证 🏆',
      testimonialsTag: '同行评价',
      testimonialsTitle: '来自高管与合作伙伴的评价 💬',
      contactTag: '保持联系',
      contactTitle: '携手打造非凡的 AI 解决方案 🤝',
      contactSubtitle: '无论您正在扩展企业级 AI 智能体、寻求峰会主题演讲嘉宾，还是探讨云架构与投资策略，欢迎随时与我联系。'
    },
    capabilities: [
      {
        title: '企业级智能体系统 (ADK & A2A)',
        description: '为世界 500 强企业设计多智能体协同网络、代码化治理平台 (AgentOps Cockpit) 以及端到端 OAuth 安全架构。'
      },
      {
        title: '超大规模云架构与 MLOps',
        description: '拥有从 0 到 1 亿+ 用户的平台扩展实战经验（Disney+ 全球架构、NBC 奥运 4000 万观众 AI 助手），精通 Vertex AI、BigQuery 与 RLHF。'
      },
      {
        title: '分析师关系与技术布道',
        description: '主导 Google Cloud 连续 4 项 Gartner® 与 Forrester™ 领导者象限评测；Google Cloud Next 与 Build with Gemini 演讲嘉宾；《Intro to Agents》合著者（150 万+ 读者）。'
      }
    ],
    modal: {
      highlights: '核心亮点与业务影响力',
      strategy: '架构与战略思考',
      team: '核心团队',
      visitProject: '访问在线项目',
      close: '关闭'
    },
    footer: {
      rights: '© 2026 ENRIQUE CHAN 个人作品集 · 为智能体时代而生'
    }
  }
};
