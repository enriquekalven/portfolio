import { type Language } from './i18n';
import { Zap, ShieldCheck, MessageSquare } from 'lucide-react';

export function getLocalizedAnalystReports(lang: Language) {
  if (lang === 'es') {
    return [
      {
        title: "Gartner® Magic Quadrant™ para Asistentes de IA Empresarial",
        badge: "Líder • Informe Inaugural",
        date: "Publicado 10 Sep 2026",
        description: "Lideró las respuestas técnicas RFI, pruebas de arquitectura y entornos de demostración en vivo, posicionando a Google Cloud como Líder en el informe inaugural.",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-is-a-leader-in-2026-gartner-magic-quadrant-for-enterprise-ai-assistants?e=48754805",
        linkLabel: "Leer Anuncio Oficial"
      },
      {
        title: "Gartner® Magic Quadrant™ para Plataformas de Aplicaciones Nativas de la Nube",
        badge: "Líder • 3er Año Consecutivo",
        date: "Publicado 20 Ago 2026",
        description: "Colaboró con los equipos de Producto, Ingeniería y Campo para elaborar narrativas técnicas y defender capacidades de la plataforma por 3er año consecutivo como Líder.",
        link: "https://www.gartner.com/doc/reprints?id=00ThR000008iZa9UAE&ct=260804&st=sb",
        linkLabel: "Ver Informe Oficial Gartner"
      },
      {
        title: "The Forrester Wave™: Plataformas de IA",
        badge: "Líder • Mayor Puntaje en Estrategia",
        date: "Publicado 10 Ago 2026",
        description: "Construyó demostraciones en vivo y resolvió evaluaciones técnicas bajo plazos estrictos, logrando el puntaje más alto en la categoría de Estrategia.",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-forrester-wave-ai-platforms",
        linkLabel: "Leer Anuncio Forrester Wave"
      },
      {
        title: "Gartner® Magic Quadrant™ para Plataformas de Desarrollo de Aplicaciones de IA",
        badge: "Líder • Mayor Capacidad de Ejecución",
        date: "Publicado 14 May 2026",
        description: "Dirigió el RFI técnico y las demostraciones en vivo para GE Agent Platform y ADK, logrando la posición más alta en Capacidad de Ejecución.",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-gartner-magic-quadrant?e=48754805",
        linkLabel: "Leer Blog Oficial AIADP"
      }
    ];
  }
  if (lang === 'zh') {
    return [
      {
        title: "Gartner® 企业级 AI 助手魔力象限",
        badge: "领导者 • 首届报告",
        date: "2026 年 9 月 10 日发布",
        description: "主导技术 RFI 答辩、底层架构实证与实时演示环境搭建，助力 Google Cloud 在首届企业级 AI 助手魔力象限中荣膺领导者。",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-is-a-leader-in-2026-gartner-magic-quadrant-for-enterprise-ai-assistants?e=48754805",
        linkLabel: "阅读官方发布博客"
      },
      {
        title: "Gartner® 云原生应用平台 (CNAP) 魔力象限",
        badge: "领导者 • 连续三年蝉联",
        date: "2026 年 8 月 20 日发布",
        description: "联合产品、工程与一线团队构建深度技术叙事并完成严苛评测，助力 Google Cloud 连续第三年蝉联云原生应用平台领导者。",
        link: "https://www.gartner.com/doc/reprints?id=00ThR000008iZa9UAE&ct=260804&st=sb",
        linkLabel: "查看 Gartner 官方报告"
      },
      {
        title: "The Forrester Wave™: AI 平台评估报告",
        badge: "领导者 • 战略维度最高分",
        date: "2026 年 8 月 10 日发布",
        description: "在极短周期内攻克数百项技术质询并完成高可用现场演示，助力 Google Cloud 斩获战略维度最高评分。",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-forrester-wave-ai-platforms",
        linkLabel: "阅读 Forrester Wave 官方公告"
      },
      {
        title: "Gartner® AI 应用开发平台 (AIADP) 魔力象限",
        badge: "领导者 • 执行力维度排名第一",
        date: "2026 年 5 月 14 日发布",
        description: "主导 GE 智能体平台与 ADK 的技术 RFI 答辩及实时演示，助力 Google Cloud 在执行能力 (Ability to Execute) 维度位列榜首。",
        link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-gartner-magic-quadrant?e=48754805",
        linkLabel: "阅读 AIADP 官方博客"
      }
    ];
  }
  return [
    {
      title: "Gartner® Magic Quadrant™ for Enterprise AI Assistants",
      badge: "Leader • Inaugural Report",
      date: "Published Sept 10, 2026",
      description: "Engineered technical RFI responses, architectural proof points, and live demo environments establishing Google Cloud as a Leader in the inaugural Enterprise AI Assistants Magic Quadrant.",
      link: "https://cloud.google.com/blog/products/ai-machine-learning/google-is-a-leader-in-2026-gartner-magic-quadrant-for-enterprise-ai-assistants?e=48754805",
      linkLabel: "Read Official Announcement"
    },
    {
      title: "Gartner® Magic Quadrant™ for Cloud-Native Application Platforms",
      badge: "Leader • 3rd Consecutive Year",
      date: "Published Aug 20, 2026",
      description: "Partnered across Product, Engineering, and Field teams to craft technical narratives and defend platform capabilities for Google Cloud's 3rd consecutive year as a CNAP Leader.",
      link: "https://www.gartner.com/doc/reprints?id=00ThR000008iZa9UAE&ct=260804&st=sb",
      linkLabel: "View Official Gartner Reprint"
    },
    {
      title: "The Forrester Wave™: AI Platforms",
      badge: "Leader • Top Score in Strategy",
      date: "Published Aug 10, 2026",
      description: "Built live demo environments and dissected deeply technical prompts under tight deadlines, securing Google Cloud the highest score in the Strategy category.",
      link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-forrester-wave-ai-platforms",
      linkLabel: "Read Forrester Wave Announcement"
    },
    {
      title: "Gartner® Magic Quadrant™ for AI Application Development Platforms",
      badge: "Leader • Highest Ability to Execute",
      date: "Published May 14, 2026",
      description: "Led technical RFI and live demo builds for GE Agent Platform & ADK, resulting in Google Cloud positioned highest for Ability to Execute.",
      link: "https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-gartner-magic-quadrant?e=48754805",
      linkLabel: "Read AIADP Leader Blog"
    }
  ];
}

export function getLocalizedServices(lang: Language) {
  if (lang === 'es') {
    return [
      {
        title: 'Activación de IA en Delta ⚡',
        description: 'Liderando modelos operativos de Ingeniería Desplegada (FDE) para cuentas estratégicas, activando IA en producción y convirtiendo compromisos multianuales en ingresos reales.',
        icon: Zap,
        color: '#38bdf8'
      },
      {
        title: 'Gobernanza de IA Empresarial 🛡️',
        description: 'Arquitectura de marcos robustos para orquestación Agente-a-Agente (A2A), Identidad de Agentes, Gateway de Agentes y flotas con Gobernanza como Código.',
        icon: ShieldCheck,
        color: '#818cf8'
      },
      {
        title: 'Evangelismo Técnico y Habilitación 🎤',
        description: 'Orador principal en Google Cloud Next, Build with Gemini y NorthAm Tech Immersion, coautor de Intro to Agents (1.5M lectores) y Advent of Agents (32k+ desarrolladores).',
        icon: MessageSquare,
        color: '#ff7e5f'
      }
    ];
  }
  if (lang === 'zh') {
    return [
      {
        title: 'Delta 企业级 AI 落地激活 ⚡',
        description: '主导前线部署工程 (FDE) 运营模式，赋能顶级战略客户将多年度云承诺转化为生产级 AI 应用与核心业务增长。',
        icon: Zap,
        color: '#38bdf8'
      },
      {
        title: '企业级智能体安全与治理 🛡️',
        description: '构建多智能体协同 (A2A)、智能体身份认证 (Agent Identity)、网关 (Agent Gateway) 及代码化治理 (Governance-as-Code) 体系。',
        icon: ShieldCheck,
        color: '#818cf8'
      },
      {
        title: '全球技术布道与生态赋能 🎤',
        description: 'Google Cloud Next 与 Build with Gemini 峰会演讲嘉宾，《Intro to Agents》白皮书合著者（150 万+ 读者）及 Advent of Agents 联合发起人（3.2 万+ 开发者）。',
        icon: MessageSquare,
        color: '#ff7e5f'
      }
    ];
  }
  return [
    {
      title: 'Delta AI Activation ⚡',
      description: 'Leading Forward Deployed Engineering (FDE) operating models for marquee accounts to activate production AI and turn multi-year commits into real ARR.',
      icon: Zap,
      color: '#38bdf8'
    },
    {
      title: 'Enterprise AI Governance 🛡️',
      description: 'Architecting robust frameworks for Agent-to-Agent (A2A) orchestration, Agent Identity, Agent Gateway, and Governance-as-Code fleets.',
      icon: ShieldCheck,
      color: '#818cf8'
    },
    {
      title: 'Technical Evangelism & Enablement 🎤',
      description: 'Keynote speaker at Google Cloud Next, Build with Gemini, & NorthAm Tech Immersion, co-author of Intro to Agents (1.5M attendees) and Advent of Agents (32k+ devs).',
      icon: MessageSquare,
      color: '#ff7e5f'
    }
  ];
}

export function getLocalizedExperience(lang: Language, defaultExp: any[]) {
  if (lang === 'es') {
    return [
      {
        company: 'Google Cloud Delta ⚡',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Staff Technical Deployment Lead (TDL) | Delta',
        period: 'Jun 2026 — Presente',
        description: 'Líder Técnico de Despliegue de IA (Staff TDL) para Google Cloud Delta y el equipo de Activación de IA / Forward Deployed Engineering (FDE).',
        highlights: [
          'Líder del modelo operativo de Forward Deployed Engineering (FDE) para 15 cuentas empresariales prioritarias (incluyendo Ford e Intel).',
          'Definió el modelo operativo conjunto entre GTM FDE, Delta FDE, TDL, PSO, GSD, PL y CALs para acelerar la activación de IA empresarial.',
          'Dimensionó oportunidades de ingeniería desplegada para Ford e Intel basadas en casos de uso de IA de alto impacto.',
          'Miembro del equipo de cierre de acuerdos por $2B multianuales, generando $63M en Fondos de Servicios de Google, $5M en Aprendizaje y $32M en Fondos para Partners.'
        ],
        skills: ['Despliegue Técnico', 'Modelo Operativo FDE', 'Transformación Empresarial', 'Estructuración de Acuerdos']
      },
      {
        company: 'Google Cloud AI 🎯',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Outbound Product Manager | Rotación 20% | Gemini Enterprise App',
        period: 'Jun 2026 — Presente',
        description: 'Outbound Product Manager impulsando relaciones con analistas (4 victorias como Líder en Gartner/Forrester), estrategia competitiva y Gobernanza de Agentes GA.',
        highlights: [
          'Lideró las respuestas técnicas RFI, pruebas de arquitectura y construcción de demos en vivo para 4 victorias consecutivas como Líder en Gartner y Forrester (Asistentes de IA Empresarial, CNAP, Forrester Wave AI Platforms y AIADP).',
          'Dirigió el equipo táctico y sesiones de escalamiento para tarjetas competitivas de Google Cloud frente a Claude Cowork; destacado en GTM Prompt Live Seminar.',
          'Lideró la habilitación de equipos de campo y capturó feedback de clientes sobre Agent Identity, Agent Registry y Agent Gateway para el lanzamiento GA.',
          'Colaboró estrechamente con PMs de producto e ingeniería para priorizar funciones de gobernanza empresarial en la hoja de ruta.'
        ],
        skills: ['Relaciones con Analistas (4x Líder)', 'Estrategia Competitiva', 'Gobernanza de Agentes', 'Habilitación de Campo', 'Estrategia de Producto']
      },
      {
        company: 'Google Cloud AI 🚀',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Outbound Product Manager | Rotación 100% | GE Agent Platform y Gemini Enterprise App',
        period: 'Dic 2025 — Jun 2026',
        description: 'Outbound Product Manager liderando el ecosistema de desarrolladores, respuestas al Magic Quadrant de Gartner y la estrategia de gobernanza de agentes empresariales.',
        highlights: [
          'Codirigió las campañas Advent of Agents Temporadas 1 y 2 alcanzando a más de 32,000 desarrolladores, posicionándose en el Top 5 global de GitHub y generando 5 Billones de tokens en Gemini.',
          'Coautor del whitepaper ejecutivo "Intro to Agents" para el curso de Kaggle con 1.5M de inscritos, estableciendo el estándar de la industria para LLM Ops.',
          'Lideró la respuesta al Magic Quadrant de Gartner para RFI y Demo, logrando el reconocimiento de Google como Líder en Plataformas de Desarrollo de Aplicaciones de IA.',
          'Coautor de un RFC clave sobre Gobernanza de Agentes, alineando la hoja de ruta a nivel de VP y Directores en 5 áreas de producto.',
          'Autor de "Gemini Enterprise Governance at Scale", presentado ante los 50 principales clientes empresariales (McKinsey, Accenture, Wells Fargo, Pfizer, etc.).',
          'Ideó y desarrolló AgentOps Cockpit para llevar la gestión de flotas a Gobernanza como Código; dirigió la auditoría global de seguridad de 44 agentes empresariales.'
        ],
        skills: ['Ecosistema de Desarrolladores', 'Gartner Magic Quadrant', 'AgentOps Cockpit', 'Gobernanza Empresarial', 'ADK y A2A']
      },
      {
        company: 'Google Cloud AI Services 🧪',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Consultor Senior de IA | Cloud Professional Services (PSO)',
        period: 'Jun 2023 — Dic 2025',
        description: 'Entregó soluciones de IA para 24 proyectos empresariales ($14.6M en ingresos, 81% de utilización, 100% CSAT). Cerró 21 contratos con clientes ($11M).',
        highlights: [
          'Chatbot Olímpico NBC (Oli): Lideró la estrategia técnica del chatbot para los Juegos Olímpicos de París 2024 (40M de espectadores, 90M de consultas) con una tasa de error del 0.5%.',
          'Arquitectura RLHF y Localización en WBD: Diseñó una solución RLHF personalizada con 4 pipelines de producción para subtítulos y traducción, asegurando $960K en ingresos.',
          'Lanzó el Centro Global de Habilitación de Agentes para CEs, TAMs y GCC.'
        ],
        skills: ['Vertex AI', 'RLHF / SFT', 'Provisioned Throughput', 'MLOps Empresarial', 'Chatbots a Gran Escala']
      },
      {
        company: 'Google Cloud AI Services 📊',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Consultor Senior de Datos | Cloud Professional Services (PSO)',
        period: 'Jun 2021 — Jun 2023',
        description: 'Lideró la entrega técnica de migraciones analíticas estratégicas y arquitecturas Data Mesh.',
        highlights: [
          'Plataforma Analítica de Boeing: Transformó la migración mono-inquilino en una Arquitectura Mesh Orientada a Fuentes, escalando de 1 a 29 inquilinos.',
          'Líder de Oferta para Modernización de EDW en Delivery Navigator.',
          'Lanzó el panel gShadowPSO como parte del equipo ganador del Hackathon Q3 2022.'
        ],
        skills: ['BigQuery', 'Arquitectura de Datos', 'Data Mesh', 'Estrategia de Migración']
      },
      {
        company: 'Amazon Web Services (AWS) ☁️',
        logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
        role: 'Arquitecto Senior de Nube | ProServe Sector Público',
        period: 'May 2020 — May 2021',
        description: 'Dirigió revisiones del marco AWS Well-Architected, construyó microservicios TypeScript/CDK, Landing Zones con Control Tower y logging centralizado.',
        highlights: [
          'Administró revisiones Well-Architected Framework con enfoque serverless para plataformas empresariales en AWS.',
          'Construyó arquitecturas de microservicios distribuidos con TypeScript y AWS CDK.',
          'Diseñó Landing Zones con Control Tower y Transit Gateway con postura de seguridad prioritaria.'
        ],
        skills: ['Arquitectura AWS', 'TypeScript / CDK', 'Control Tower', 'Escalabilidad Empresarial']
      },
      {
        company: 'Accenture 💼',
        logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg',
        role: 'Gerente Senior | Estrategia de Nube y Analítica de Datos',
        period: 'May 2011 — May 2020',
        description: 'Vendió más de $10M en proyectos y generó $25M en pipeline de preventa. Lideró el escalamiento global de Disney+ y el desarrollo de MyMagic+ (FastPass+/MagicBands).',
        highlights: [
          'Vendió más de $10M en trabajo de entrega y generó más de $25M en pipeline de preventa en los últimos 5 años.',
          'Escalamiento Global de Disney+: Diseñó la estrategia de nube para más de 100M de usuarios.',
          'MyMagic+ (FastPass+ y MagicBands): Arquitecto clave de desarrollo de producto para Walt Disney World.'
        ],
        skills: ['Estrategia de Nube', 'Disney+ / MyMagic+', 'DevSecOps', 'Liderazgo']
      }
    ];
  }
  if (lang === 'zh') {
    return [
      {
        company: 'Google Cloud Delta ⚡',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: '首席 AI 技术部署负责人 (Staff TDL) | Delta',
        period: '2026 年 6 月 — 至今',
        description: '担任 Google Cloud Delta 团队及 AI 激活 / 前线部署工程 (FDE) 团队的首席技术部署负责人 (Staff TDL)。',
        highlights: [
          '主导 15 家顶级战略客户（包括福特 Ford 与英特尔 Intel）的前线部署工程 (FDE) 运营模式。',
          '跨 GTM FDE、Delta FDE、TDL、PSO、GSD、产品线与客户高管团队建立联合运营体系，加速企业级 AI 激活。',
          '围绕高影响力 AI 用例，为福特和英特尔规划并落地前线部署工程项目。',
          '作为核心交易团队成员斩获 20 亿美元多年期云承诺，驱动 6300 万美元 Google 服务基金、500 万美元培训基金及 3200 万美元合作伙伴基金。'
        ],
        skills: ['技术部署 (TDL)', 'FDE 运营模式', '企业级 AI 转型', '战略级交易架构']
      },
      {
        company: 'Google Cloud AI 🎯',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Outbound 产品经理 | 20% 轮岗 | Gemini Enterprise App',
        period: '2026 年 6 月 — 至今',
        description: '负责分析师关系（主导 4 项 Gartner/Forrester 领导者象限大满贯）、竞争策略及 Gemini Enterprise App 智能体治理 GA 发布。',
        highlights: [
          '主导 Google Cloud 连续 4 项权威分析师报告领导者象限的技术 RFI 答辩、架构实证与现场演示环境搭建（Gartner 企业级 AI 助手、云原生应用平台 CNAP、Forrester Wave AI 平台及 Gartner AI 应用开发平台）。',
          '领导针对 Claude Cowork 的竞争策略与攻防演练特别小组，成果在 Google Cloud GTM 峰会上作为标杆展示。',
          '主导一线团队技术赋能，收集客户对 Agent Identity、Agent Registry 与 Agent Gateway 的核心反馈并推动 GA 上线。',
          '与核心产品及工程团队紧密协作，将企业级智能体安全与治理特性纳入核心路线图。'
        ],
        skills: ['分析师关系 (4x 领导者)', '竞争策略', '智能体治理', '一线团队赋能', '产品战略']
      },
      {
        company: 'Google Cloud AI 🚀',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: 'Outbound 产品经理 | 100% 轮岗 | GE 智能体平台与 Gemini Enterprise App',
        period: '2025 年 12 月 — 2026 年 6 月',
        description: '负责全球开发者生态扩展、Gartner 魔力象限评测答辩及企业级智能体治理战略。',
        highlights: [
          '联合发起 Advent of Agents 第 1、2 季全球开发者活动，触达 3.2 万+ 开发者，跻身 GitHub 全球热门仓库 Top 5，驱动 Gemini 5 万亿 Token 消耗。在 Cloud Next \'26 发表 SOL331 演讲。',
          '合著 Kaggle 官方课程《Intro to Agents》高管白皮书，覆盖 150 万+ 注册学员，确立 LLM Ops 与智能体编排行业标准。',
          '主导 Gartner AI 应用开发平台魔力象限技术 RFI 与实时演示，助力 Google 获评领导者象限且执行力位列第一。',
          '合著跨部门智能体治理核心 RFC，促成 5 大产品线（Apigee、Workspace、Gemini Enterprise、Agent Platform、Agent Builder）VP 与总监级路线图对齐。',
          '撰写《Gemini Enterprise 大规模治理指南》，向全球 Top 50 企业客户（麦肯锡、埃森哲、富国银行、辉瑞等）宣讲。',
          '设计并研发 AgentOps Cockpit，将智能体集群管理升级为代码化治理 (Governance-as-Code)；主导 44 个企业级智能体的全球安全审计。'
        ],
        skills: ['开发者生态', 'Gartner 魔力象限', 'AgentOps Cockpit', '企业级治理', 'ADK & A2A']
      },
      {
        company: 'Google Cloud AI Services 🧪',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: '高级 AI 顾问 | 专业服务部 (PSO)',
        period: '2023 年 6 月 — 2025 年 12 月',
        description: '主导交付 24 个大型企业 AI 项目（创造 1460 万美元营收，81% 利用率，100% 客户满意度），跨部门促成 21 个客户签约（1100 万美元）。',
        highlights: [
          'NBC 巴黎奥运会 Oli 智能助手：全权负责 2024 巴黎奥运会官方 AI 助手技术战略（服务 4000 万观众，处理 9000 万次查询），在 GA 前率先落地 Vertex AI 预置吞吐量方案，错误率仅 0.5%。',
          '华纳兄弟探索 (WBD) 本地化与 RLHF 架构：定制研发包含 4 条生产级流水线的 RLHF 字幕与多语言翻译方案，挽救延期风险并赢得 96 万美元三期合同。',
          '面向全球 CE、TAM 与 GCC 团队创立智能体赋能中心 (Agent Center of Enablement)。'
        ],
        skills: ['Vertex AI', 'RLHF / 微调', '预置吞吐量 (Provisioned Throughput)', '企业级 MLOps', '超大规模对话系统']
      },
      {
        company: 'Google Cloud AI Services 📊',
        logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        role: '高级数据架构顾问 | 专业服务部 (PSO)',
        period: '2021 年 6 月 — 2023 年 6 月',
        description: '主导超大型企业数据仓库向 BigQuery 迁移及数据网格 (Data Mesh) 架构落地。',
        highlights: [
          '波音 (Boeing) 分析平台：将单租户迁移重构为面向源端的数据网格 (Source Oriented Mesh) 架构，从 1 个租户无缝扩展至 29 个租户。',
          '担任企业数据仓库现代化 (EDW Modernization) 产品负责人。',
          '作为 2022 Q3 黑客松冠军团队核心成员上线 gShadowPSO 导师赋能看板。'
        ],
        skills: ['BigQuery', '数据架构', '数据网格 (Data Mesh)', '云迁移战略']
      },
      {
        company: 'Amazon Web Services (AWS) ☁️',
        logo: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg',
        role: '高级云架构师 | ProServe 公共部门',
        period: '2020 年 5 月 — 2021 年 5 月',
        description: '主持 AWS Well-Architected 架构评审，使用 TypeScript/CDK 构建分布式微服务、Control Tower 着陆区及 Kinesis-Splunk 集中式日志平台。',
        highlights: [
          '以 Serverless 视角主持大型企业 AWS Well-Architected 架构评审。',
          '使用 TypeScript 与 AWS CDK 构建高可用分布式微服务架构。',
          '基于 Control Tower 与 Transit Gateway 设计符合最高安全合规标准的云着陆区 (Landing Zones)。'
        ],
        skills: ['AWS 架构', 'TypeScript / CDK', 'Control Tower', '企业级扩展']
      },
      {
        company: 'Accenture (埃森哲) 💼',
        logo: 'https://www.vectorlogo.zone/logos/accenture/accenture-icon.svg',
        role: '高级经理 | 云战略与数据分析',
        period: '2011 年 5 月 — 2020 年 5 月',
        description: '累计签署超 1000 万美元交付合同并创造 2500 万美元售前商机。主导 Disney+ 全球云架构扩展及迪士尼世界 MyMagic+ (FastPass+/MagicBands) 核心研发。',
        highlights: [
          '在任最后 5 年内促成 1000 万+ 美元项目交付与 2500 万+ 美元售前商机。',
          'Disney+ 全球扩展：为超过 1 亿订阅用户设计全球高并发云架构与数据战略。',
          'MyMagic+ (FastPass+ 与 MagicBands 智能手环)：担任华特迪士尼世界核心产品研发架构师。'
        ],
        skills: ['云战略', 'Disney+ / MyMagic+', 'DevSecOps', '团队领导力']
      }
    ];
  }
  return defaultExp;
}

export function getLocalizedRecentWork(lang: Language, defaultWork: any[]) {
  if (lang === 'es') {
    return defaultWork.map((w) => {
      if (w.title.includes('Economic Research Agent')) {
        return {
          ...w,
          title: 'Agente de Investigación Económica (Agent Garden) 📈',
          tag: 'ADK 2.0 / Econometría',
          description: 'Econometrista autónomo en Agent Garden que conecta consultas en lenguaje natural con modelos matemáticos deterministas sobre APIs de FRED, Censo y HUD.'
        };
      }
      if (w.title.includes('Lily & Robo')) {
        return {
          ...w,
          title: 'Agente de Cuentos Lily & Robo 🤖👧📖',
          tag: 'GenAI / AlphaEvolve',
          description: 'Motor autónomo de publicación de libros infantiles con IA que utiliza Gemini 2.5 Flash y algoritmos AlphaEvolve para la creación de EPUB y PDF.'
        };
      }
      if (w.title.includes('SafeKids')) {
        return {
          ...w,
          title: 'Portal SafeKids 🛡️👶',
          tag: 'Tecnología Familiar / Blueprint',
          description: 'Plan de acción para padres respaldado por investigación, directorio de canales de bajo estímulo y guías de bloqueo técnico libre de algoritmos.'
        };
      }
      if (w.title.includes('AgentOps Cockpit')) {
        return {
          ...w,
          title: 'AgentOps Cockpit 🕹️',
          tag: 'Open Source / Operaciones Core',
          description: 'La capa lógica profesional para aplicaciones agénticas. Gobernanza multi-nube, auditorías automatizadas y optimización de protocolos.'
        };
      }
      if (w.title.includes('NBC Olympic Concierge')) {
        return {
          ...w,
          title: 'Conserje Olímpico de NBC 🏅',
          tag: 'Proyecto Insignia / Gran Escala',
          description: 'Atendió a 40M de espectadores con latencia inferior a un segundo mediante Vertex AI Provisioned Throughput durante París 2024.'
        };
      }
      if (w.title.includes('Advent of Agents')) {
        return {
          ...w,
          title: 'Advent of Agents 🎄',
          tag: 'Comunidad / SOP',
          description: 'Más de 32k desarrolladores, Top 5 repositorio global en GitHub y 5 Billones de tokens generados en Gemini.'
        };
      }
      if (w.title.includes('Disney+')) {
        return {
          ...w,
          title: 'Escalamiento Global de Disney+ 🏰',
          tag: 'Producto Estratégico',
          description: 'Escalando el futuro digital del entretenimiento mediante el lanzamiento mundial de Disney+ para más de 100M de usuarios.'
        };
      }
      if (w.title.includes('MyMagic+')) {
        return {
          ...w,
          title: 'MyMagic+ y MagicBands ✨',
          tag: 'Innovación UX / IoT',
          description: 'Lanzamiento de tecnología transformadora para visitantes (FastPass+, MagicBands) en Walt Disney World.'
        };
      }
      if (w.title.includes('WBD Caption AI')) {
        return {
          ...w,
          title: 'IA de Subtítulos y Traducción en WBD 🎬',
          tag: 'MLOps Avanzado',
          description: 'Pipelines de STT y traducción de grado de producción utilizando retroalimentación humana (RLHF) y ajuste fino, asegurando $960K en ingresos.'
        };
      }
      return w;
    });
  }
  if (lang === 'zh') {
    return defaultWork.map((w) => {
      if (w.title.includes('Economic Research Agent')) {
        return {
          ...w,
          title: '经济研究智能体 (Agent Garden) 📈',
          tag: 'ADK 2.0 / 计量经济学',
          description: '部署于 Agent Garden 的自主计量经济学智能体，将自然语言查询与 FRED、美国人口普查局及 HUD 实时 API 的确定性数学建模无缝结合。'
        };
      }
      if (w.title.includes('Lily & Robo')) {
        return {
          ...w,
          title: 'Lily & Robo 儿童绘本智能体 🤖👧📖',
          tag: '生成式 AI / AlphaEvolve',
          description: '基于 Gemini 2.5 Flash 与 AlphaEvolve 进化算法的全自动多语言儿童绘本生成与固定版式 EPUB/PDF 出版引擎。'
        };
      }
      if (w.title.includes('SafeKids')) {
        return {
          ...w,
          title: 'SafeKids 儿童健康媒体门户 🛡️👶',
          tag: '家庭科技 / 育儿指南',
          description: '基于研究的家长行动指南、低刺激优质儿童频道目录以及无算法推荐的硬件级安全锁定方案。'
        };
      }
      if (w.title.includes('AgentOps Cockpit')) {
        return {
          ...w,
          title: 'AgentOps Cockpit 智能体驾驶舱 🕹️',
          tag: '开源项目 / 核心治理',
          description: '面向企业级智能体应用的治理逻辑层。提供跨云代码化治理、SME 自动审计以及 92% 成本优化。'
        };
      }
      if (w.title.includes('NBC Olympic Concierge')) {
        return {
          ...w,
          title: 'NBC 巴黎奥运会官方 AI 助手 🏅',
          tag: '标杆项目 / 超大规模',
          description: '在 2024 巴黎奥运会期间通过 Vertex AI 预置吞吐量服务 4000 万观众，实现亚秒级响应与 99.99% 可用性。'
        };
      }
      if (w.title.includes('Advent of Agents')) {
        return {
          ...w,
          title: 'Advent of Agents 全球开发者挑战赛 🎄',
          tag: '开发者生态 / 社区标杆',
          description: '吸引 3.2 万+ 开发者参与，跻身 GitHub 全球热门仓库 Top 5，累计驱动 Gemini 5 万亿 Token 消耗。'
        };
      }
      if (w.title.includes('Disney+')) {
        return {
          ...w,
          title: 'Disney+ 全球流媒体云架构扩展 🏰',
          tag: '战略级产品',
          description: '为 Disney+ 全球上线构建高并发云架构与数据战略，支撑超过 1 亿订阅用户的流畅观影体验。'
        };
      }
      if (w.title.includes('MyMagic+')) {
        return {
          ...w,
          title: 'MyMagic+ 与 MagicBands 智能手环 ✨',
          tag: '体验创新 / 物联网 (IoT)',
          description: '担任华特迪士尼世界核心研发架构师，推出 FastPass+ 与 MagicBands 智能穿戴游客体验系统。'
        };
      }
      if (w.title.includes('WBD Caption AI')) {
        return {
          ...w,
          title: '华纳兄弟探索 (WBD) 智能字幕与翻译 AI 🎬',
          tag: '高阶 MLOps',
          description: '结合人类反馈强化学习 (RLHF) 与模型微调构建生产级语音识别及多语言翻译流水线，创造 96 万美元三期营收。'
        };
      }
      return w;
    });
  }
  return defaultWork;
}

export function getLocalizedAwards(lang: Language, defaultAwards: any[]) {
  if (lang === 'es') {
    return [
      {
        title: "Premio Silver Google AI (SWIFTY) 🥈",
        organization: "Google AI",
        detail: "2026 Q3 — Ganador del Premio Silver Google AI (SWIFTY, 2026 Q3) por Advent of Agents.",
        tags: ["Premio Plata", "2026 Q3"]
      },
      {
        title: "4x Reconocimiento como Líder en Gartner® y Forrester™ 📊",
        organization: "Google Cloud AI",
        detail: "2026 — Lideró las respuestas técnicas RFI, pruebas de arquitectura y demos en vivo para 4 victorias consecutivas como Líder: Gartner MQ Asistentes de IA Empresarial, Gartner MQ CNAP, Forrester Wave Plataformas de IA y Gartner MQ AIADP.",
        tags: ["4x Líder", "2026"]
      },
      {
        title: "Ganador: Agente Cards Against Humanity 🃏",
        organization: "Hackathon AIS Offsite",
        detail: "Nov 2025 — Boulder, CO. Desarrolló un agente autónomo capaz de humor contextual y lógica de juego avanzada mediante ingeniería de prompts.",
        tags: ["Ganador Hackathon", "Nov 2025"]
      },
      {
        title: "Premio a la Excelencia Cloud GTM 2025 🌟",
        organization: "Google",
        detail: "Otorgado por el trabajo pionero en casos de uso agénticos para retail en Wayfair, definiendo el futuro del comercio impulsado por IA.",
        tags: ["2025", "Excelencia Estratégica"]
      },
      {
        title: "Premio al Impacto Tecnológico GTM Cloud 2024 🏆",
        organization: "Google",
        detail: "Otorgado por el Chatbot Olímpico OLI de NBCU. Reconociendo la innovación técnica y el impacto comercial que sirvió a más de 40 millones de espectadores.",
        image: "/cloud_tech_impact_award.jpg",
        tags: ["Innovación Técnica", "Impacto Comercial"]
      },
      {
        title: "Premio GTM Cloud Flying-in-Formation 🤝",
        organization: "Google",
        detail: "H2 2024 — Reconocido por la excelencia en ejecución colaborativa interfuncional y alineación de equipos.",
        tags: ["H2 2024", "Colaboración"]
      },
      {
        title: "Excelencia GTM Cloud: Conectando Equipos 🖇️",
        organization: "Google",
        detail: "H2 2024 — Por el liderazgo sobresaliente uniendo unidades técnicas y de negocio.",
        tags: ["H2 2024", "Excelencia"]
      },
      {
        title: "Premio a la Empatía con el Cliente ❤️",
        organization: "CEO de Google Cloud Thomas Kurian",
        detail: "H2 2024 — Otorgado por soluciones profundamente centradas en el cliente y la mejora del ciclo de experiencia de usuario.",
        tags: ["H2 2024", "Éxito del Cliente"]
      },
      {
        title: "Panel gShadowPSO para Nuevos Googlers 📈",
        organization: "Hackathon PSO",
        detail: "2022 — Ganador Regional en Norteamérica. Desarrolló un panel para optimizar la mentoría y el acompañamiento de nuevos Googlers.",
        tags: ["Ganador Regional", "2022"]
      }
    ];
  }
  if (lang === 'zh') {
    return [
      {
        title: "Google AI 银奖 (SWIFTY) 🥈",
        organization: "Google AI",
        detail: "2026 Q3 — 因主导 Advent of Agents 全球开发者活动荣获 Google AI 银奖 (SWIFTY, 2026 Q3)。",
        tags: ["Google 银奖", "2026 Q3"]
      },
      {
        title: "4x Gartner® 与 Forrester™ 领导者象限大满贯 📊",
        organization: "Google Cloud AI",
        detail: "2026 — 主导技术 RFI 答辩、架构实证与实时演示搭建，助力 Google Cloud 连续斩获 4 项权威报告领导者：Gartner 企业级 AI 助手、Gartner 云原生应用平台 (CNAP)、Forrester Wave AI 平台及 Gartner AI 应用开发平台 (AIADP)。",
        tags: ["4x 领导者", "2026"]
      },
      {
        title: "冠军：反人类卡牌 (Cards Against Humanity) 智能体 🃏",
        organization: "AIS Offsite 黑客松",
        detail: "2025 年 11 月 — 科罗拉多州博尔德。开发了具备高语境幽默感与复杂博弈逻辑的自主智能体。",
        tags: ["黑客松冠军", "2025.11"]
      },
      {
        title: "2025 Google Cloud GTM 卓越奖 🌟",
        organization: "Google",
        detail: "表彰在 Wayfair 零售智能体用例中的开创性贡献，定义了 AI 驱动的下一代电子商务体验。",
        tags: ["2025", "战略卓越奖"]
      },
      {
        title: "2024 GTM Cloud 技术影响力大奖 🏆",
        organization: "Google",
        detail: "因 NBC 巴黎奥运会 OLI 智能助手项目获奖，表彰服务超 4000 万观众的技术创新与卓越商业影响力。",
        image: "/cloud_tech_impact_award.jpg",
        tags: ["技术创新", "商业影响力"]
      },
      {
        title: "GTM Cloud 跨团队协同卓越奖 🤝",
        organization: "Google",
        detail: "2024 下半年 — 表彰在跨部门协同执行与团队战略对齐方面的杰出表现。",
        tags: ["2024 H2", "团队协同"]
      },
      {
        title: "GTM Cloud 卓越奖：连接技术与业务团队 🖇️",
        organization: "Google",
        detail: "2024 下半年 — 表彰在架设技术研发与业务团队桥梁方面的卓越领导力。",
        tags: ["2024 H2", "卓越领导力"]
      },
      {
        title: "Google Cloud 客户共情大奖 (Customer Empathy Award) ❤️",
        organization: "Google Cloud CEO Thomas Kurian 颁发",
        detail: "2024 下半年 — 表彰以客户为中心的深度解决方案架构，显著提升战略客户的全生命周期体验。",
        tags: ["2024 H2", "客户成功"]
      },
      {
        title: "PSO 新员工导师赋能看板 (gShadowPSO) 📈",
        organization: "PSO 黑客松",
        detail: "2022 — 北美大区冠军。开发了用于优化 Google 新员工入职导师辅导与项目实践全流程的数字化看板。",
        tags: ["北美区冠军", "2022"]
      }
    ];
  }
  return defaultAwards;
}


