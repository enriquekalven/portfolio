# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

BASE_URL = "https://enriquekchan.web.app"

PROFILE = {
    "name": "Enrique K Chan",
    "title": "Outbound Product Manager, Cloud AI @ Google",
    "location": "Seattle, WA",
    "phone": "(305) 905 2331",
    "email": "enriquekalven@gmail.com",
    "summary": "Passionate to use AI to transform the way people experience the world. Husband, father of 3, and Real Estate Investor. 15+ years transforming IT, Cloud, and Data into Agentic Workflows.",
    "images": {
        "hero": f"{BASE_URL}/hero_profile.jpg",
        "bubble": f"{BASE_URL}/profile_bubble.jpg",
        "new": f"{BASE_URL}/profile_new.jpg"
    },
    "links": {
        "linkedin": "https://www.linkedin.com/in/enriquechan/",
        "github": "https://github.com/enriquekalven",
        "advent": "https://adventofagents.com/",
        "a2ui": "https://a2ui.org/"
    }
}

EXPERIENCE = [
    {
        "company": "Google Cloud",
        "role": "Outbound Product Manager, Cloud AI",
        "period": "Nov 2025 - Present",
        "highlights": [
            "Co-Authored Intro to Agents whitepaper (1.5M registered attendees).",
            "Led Agent Governance discussions for Vertex AI (Gemini Enterprise, ADK, Agent Engine).",
            "Technical champion for the Agent Optimizer (73% performance/cost gains).",
            "Leading vision and strategy for the AI Agents Enablement Center of Excellence."
        ],
        "skills": ["Product Strategy", "Agent Governance", "Ecosystem Enablement"]
    },
    {
        "company": "Google Cloud",
        "role": "Senior AI Consultant, PSO",
        "period": "Jun 2023 - Nov 2025",
        "highlights": [
            "NBC Olympic Games Oli Chatbot: 40M viewers, 90M queries, $1.3M Gemini revenue in 17 days.",
            "WBD Localization: Co-led translation/captioning for 11 workstreams using RLHF and SFT (secured $960K expansion).",
            "Wayfair Agentspace: Led technical delivery for Project Bozeman, implementing 10+ connectors (Workday, ServiceNow, GitHub).",
            "Best Buy Gift Finder: Led strategic planning for scaling Black Friday Sales traffic.",
            "Awards: GTM Cloud Excellence, Customer Empathy, and Flying-in-Formation winner."
        ],
        "skills": ["Vertex AI", "RLHF / SFT", "Provisioned Throughput", "Enterprise MLOps"]
    },
    {
        "company": "Google Cloud",
        "role": "Senior Data Consultant, PSO",
        "period": "May 2021 - Jun 2023",
        "highlights": [
            "Boeing Analytical Platform: Scaled from 1 tenant to 29 tenants using Mesh Architecture.",
            "WBD Analytics: Quarterbacked massive analytics migrations to BigQuery.",
            "Launched gShadowPSO dashboard (Hackathon Q3 2022 winner).",
            "Authored Security Data Lake content for TechCon 2022."
        ],
        "skills": ["BigQuery", "Data Architecture", "Migration Strategy"]
    },
    {
        "company": "AWS",
        "role": "Senior Cloud Architect",
        "period": "May 2020 - May 2021",
        "highlights": [
            "Built distributed microservices with TS and AWS CDK.",
            "Designed Landing Zones with Control Tower and Transit Gateway.",
            "Developed Cloudformation stacks for Kinesis-to-Splunk centralized logging."
        ],
        "skills": ["AWS Architecture", "Cloud Infrastructure", "Enterprise Scaling"]
    },
    {
        "company": "Accenture",
        "role": "Lead, Cloud Strategy & Data Analytics",
        "period": "May 2011 - May 2020",
        "highlights": [
            "Sold $10M+ delivery work; generated $25M+ pre-sales pipeline.",
            "Disney+ Global Scaling: Engineered the cloud strategy for 100M+ users.",
            "MyMagic+ (FastPass+/MagicBands): Key architect for the product development team.",
            "10-Year Tenure leading Cloud Strategy, Data Modernization, and DevOps engagements."
        ],
        "skills": ["Cloud Strategy", "Data Modernization", "SRE / DevOps", "Leadership"]
    }
]

PROJECTS = [
    {
        "name": "NBC Olympic Concierge",
        "impact": "40M Viewers | 90M Queries",
        "image": f"{BASE_URL}/nbcu_oli_case_study.png",
        "description": "World's largest Vertex AI deployment handling massive scale during Paris 2024.",
        "url": "/oli-chatbot",
        "tag": "Marquee / High Scale"
    },
    {
        "name": "Agent Optimizer (ADK)",
        "impact": "73% Efficiency Gain",
        "image": f"{BASE_URL}/agent_optimizer_guide.png",
        "description": "A framework for optimizing LLM consumption and grounding in Agentic workflows.",
        "url": "https://google.github.io/adk-docs/",
        "tag": "Strategic Product"
    },
    {
        "name": "Advent of Agents",
        "impact": "1.05M Impressions | 165k Visits",
        "image": f"{BASE_URL}/advent_of_agents.png",
        "description": "25-day global quest democratizing Agentic AI for developers through daily Katas.",
        "url": "https://adventofagents.com/",
        "tag": "Community / SOP"
    },
    {
        "name": "Disney+ Global Scaling",
        "impact": "100M+ Users",
        "image": "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1200&auto=format&fit=crop",
        "description": "Global scale cloud architecture and data strategy for Disney's streaming giant.",
        "url": "https://www.disneyplus.com/",
        "tag": "Strategic Product"
    },
    {
        "name": "WBD Caption AI",
        "impact": "99% Translation Accuracy",
        "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        "description": "Production-grade STT/Translation pipelines using human feedback (RLHF) and fine-tuning.",
        "tag": "Advanced MLOps"
    },
    {
        "name": "Wayfair Agentspace",
        "impact": "10+ Enterprise Connectors",
        "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
        "description": "Connectivity implementation across Workday, ServiceNow, GitHub, and more.",
        "tag": "Connectivity"
    },
    {
        "name": "MyMagic+ & MagicBands",
        "impact": "Transformational Guest Tech",
        "image": "https://images.unsplash.com/photo-1505833115364-e28c42c41f97?q=80&w=1200&auto=format&fit=crop",
        "description": "Launching FastPass+ and MagicBands IoT ecosystem from WDW to Disneyland.",
        "tag": "UX Innovation / IoT"
    }
]

WRITING = [
    {
        "title": "Building with A2UI: Why I Blew Up My Portfolio to Build a 'Living' UI",
        "platform": "Medium",
        "image": f"{BASE_URL}/fun_factor_a2ui.png",
        "url": "https://medium.com/@enriq/the-fun-factor-developing-at-the-speed-of-thought-024085b290dd?postPublishedType=repub"
    },
    {
        "title": "Executive Whitepaper: Introduction to Agents",
        "platform": "Kaggle",
        "impact": "1.5M Participants",
        "image": f"{BASE_URL}/kaggle_whitepaper.png",
        "url": "https://www.kaggle.com/whitepaper-introduction-to-agents"
    },
    {
        "title": "Agentic Interfaces (A2UI)",
        "platform": "Medium",
        "image": f"{BASE_URL}/a2ui_blog.png",
        "url": "https://medium.com/@enriq/building-the-future-of-agentic-interfaces-introducing-the-agent-ui-starter-pack-94d8fed86ca7"
    },
    {
        "title": "BigQuery AI Ecosystem",
        "platform": "Medium",
        "image": f"{BASE_URL}/bigquery_ai_ecosystem.png",
        "url": "https://medium.com/@enriq/the-architects-guide-to-the-bigquery-ai-agent-ecosystem-what-to-recommend-and-when-030b5116295a"
    },
    {
        "title": "Introducing the Agent Optimizer",
        "platform": "Medium",
        "image": f"{BASE_URL}/agent_optimizer_guide.png",
        "url": "https://medium.com/@enriq/introducing-the-agent-optimizer-for-google-adk-3872856e6d7b"
    },
    {
        "title": "From OpenAI to Gemini Enterprise",
        "platform": "Medium",
        "image": f"{BASE_URL}/gemini_migration.png",
        "url": "https://medium.com/@enriq/from-openai-to-gemini-enterprise-automating-agent-migration-with-antigravity-76b41c5d8364"
    },
    {
        "title": "Register to Gemini A2A in 3 Commands",
        "platform": "Medium",
        "image": f"{BASE_URL}/gemini_3_commands.png",
        "url": "https://medium.com/@enriq/register-to-gemini-enterprise-a2a-with-3-commands-688af024d9bb"
    }
]

MEDIA = [
    {
        "title": "Cloud Next '26 Session",
        "event": "Google Cloud Next '26",
        "session": "Keynote / Speaker",
        "image": f"{BASE_URL}/next_26_session.png",
        "type": "Keynote",
        "url": "https://cloud.withgoogle.com/next",
        "date": "April 22 - 24, 2026",
        "location": "Mandalay Bay, Las Vegas",
        "topic": "Architecting AI Agents"
    },
    {
        "title": "Cloud Next '25 Session",
        "event": "Google Cloud Next '25",
        "session": "SOL308",
        "image": f"{BASE_URL}/next_25_session.png",
        "type": "Keynote",
        "url": "https://cloud.withgoogle.com/next"
    },
    {
        "title": "Why 80% of AI Agents Fail",
        "type": "YouTube / Mini-Talk",
        "url": "https://youtube.com/watch?v=zvNJqZNaKNY",
        "description": "Technical post-mortem on agentic failures and the architectural patterns to fix them."
    },
    {
        "title": "Retail Concierge GenAI Gotchas",
        "event": "NorthAm Tech Immersion",
        "location": "Los Angeles, CA",
        "image": f"{BASE_URL}/tech_immersion_la.png",
        "type": "Keynote",
        "description": "Production pitfalls to avoid when deploying retail agents."
    },
    {
        "title": "Agent Adventures Comic",
        "image": f"{BASE_URL}/agent_comic.png",
        "url": f"{BASE_URL}/agent_adventures_part_1.pdf",
        "type": "Digital Asset"
    },
    {
        "title": "4 Pillars of AI Agent Trust",
        "type": "YouTube / Strategy",
        "url": "https://youtube.com/watch?v=qCuGWmghmII",
        "description": "The ultimate guide to building high-quality, reliable, and trustworthy AI agents."
    },
    {
        "title": "MCP: The Protocol Your Agents Need",
        "type": "YouTube / Protocol",
        "url": "https://youtube.com/watch?v=AuJcu_fQfBY",
        "description": "Why AI agents are useless without standardized tool communication. MCP explained."
    }
]

CERTIFICATIONS = [
    "10x Google Cloud (ML Engineer, Cloud Architect, Data Engineer, Security Engineer, Network Engineer, Database Engineer, etc.)",
    "7x AWS (Solutions Architect Pro, DevOps Pro, Security Specialty, Data Analytics Specialty, etc.)",
    "2x Azure / Others (SAFe 4, Splunk Certified Power User)",
    "19x TOTAL CLOUD CERTIFICATIONS"
]

AWARDS = [
    "Winner: Cards Against Humanity Agent 🃏 (AIS Offsite Hackathon, Nov 2025)",
    "Cloud GTM Excellence Award 2025 (Wayfair Retail Agentic Use Cases)",
    "GTM Cloud Tech Impact Award 2024 (NBC Olympics OLI Chatbot)",
    "Google Cloud Customer Empathy Award (from CEO Thomas Kurian, H2 2024)",
    "GTM Cloud Function Flying-in-Formation Award (H2 2024)",
    "GTM Cloud Excellence: Connecting Teams (H2 2024)",
    "PSO Noogler Shadow Dashboard Regional Winner (2022)"
]

TESTIMONIALS = [
    {
        "author": "Thomas Kurian",
        "role": "CEO, Google Cloud",
        "quote": "Thank you for your work and commitment to leading with customer empathy. Your team's story is a great example of how we work together to best support our customers and support each other."
    },
    {
        "author": "Michael Clark",
        "role": "President, Google Cloud NorthAm",
        "quote": "GTM Cloud Excellence Connecting Teams Award: Congratulations on being awarded a GTM Cloud Regional Award. On behalf of Michael Clark and the Leadership Team we thank you for your dedication and impactful work!"
    },
    {
        "author": "Amar Raol",
        "role": "Director Global Strategic Initiatives, Google",
        "quote": "Enrique was central to influencing the customer on Google's ability to deliver on their solution… he maintained leadership of Google's solution with deep dives, workshops, and direct executive engagements to continue to build confidence on our architecture."
    },
    {
        "author": "Lee Moore",
        "role": "VP, Google Cloud Consulting",
        "quote": "Amazing work for GCC at Next'24! Your expertise and impactful engagement were instrumental in the GenAI workshop's success. We were so impressed by your ability to go above and beyond to ensure a valuable learning experience."
    },
    {
        "author": "Brian Delahunty",
        "role": "VP Agents Platform, Google",
        "quote": "Thank you for your willingness to review Day 1 whitepaper for Kaggle 5days of AI agents. Your insights were helpful in guiding us to a great whitepaper."
    }
]

SKILLS_SCHEMA = {
    "Advanced": ["Architecture", "Leadership", "Communication", "People-centric", "Scrum / PMBOK", "DevOps", "Observability", "ETL data Platforms", "Product Strategy", "Agent Governance", "Ecosystem Enablement"],
    "Intermediate": ["LLM", "AIML", "Vertex AI", "RLHF / SFT", "Provisioned Throughput", "Enterprise MLOps", "BigQuery", "Data Architecture"],
    "Languages": ["English (Native)", "Spanish (Fluent)", "Cantonese (Advanced)"]
}
