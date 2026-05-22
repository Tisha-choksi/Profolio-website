export const ROLES = ["AI/ML Engineer", "Data Scientist", "LLM Systems Builder", "Backend AI Developer"];

export const PROJECTS = [
  {
    id: 1, title: "RAGTrace", sub: "RAG Compliance & Observability Middleware",
    desc: "AI observability middleware for monitoring RAG pipelines across retrieval, prompt orchestration, and LLM response flows with built-in hallucination reduction.",
    stack: ["FastAPI", "LangGraph", "Vector DB", "OpenAI API", "Python"],
    bg: "radial-gradient(ellipse at 30% 50%, #00384a 0%, #00161e 60%, #090909 100%)",
    dot: "#00d9ff", github: "#", live: "#",
    problem: "Enterprise RAG deployments had zero visibility into why responses hallucinated or degraded over time — engineers had no way to debug the pipeline.",
    solution: "Engineered a modular middleware framework with end-to-end response tracing, logging, prompt execution monitoring, and multi-stage validation workflows.",
    impact: ["Complete pipeline visibility: retrieval → prompt → response", "Modular design supports multi-agent architectures", "Reduced hallucination incidents via automated validation", "Enhanced debugging speed and enterprise compliance"],
  },
  {
    id: 2, title: "Hallucination Detection API", sub: "LLM Reliability & Verification System",
    desc: "Multi-stage verification pipeline using semantic similarity scoring and claim extraction to detect hallucinated LLM outputs at production scale.",
    stack: ["FastAPI", "Vector Embeddings", "OpenAI API", "Python"],
    bg: "radial-gradient(ellipse at 70% 30%, #2d0060 0%, #110028 60%, #090909 100%)",
    dot: "#a78bfa", github: "#", live: "#",
    problem: "LLM outputs in production had no automated mechanism to flag unreliable or fabricated responses before reaching end-users.",
    solution: "Applied semantic similarity scoring, claim extraction, and context-grounded validation in a scalable FastAPI service for real-time accuracy assessment.",
    impact: ["Automated hallucination detection at inference time", "Claim-level granularity for fine-grained reporting", "Scalable architecture for high-throughput AI evaluation", "Semantic scoring against original source context"],
  },
  {
    id: 3, title: "Dispute Triage Assistant", sub: "Crypto Escrow Blockchain Platform",
    desc: "Blockchain escrow AI using transformer NLP for chat summarization and evidence analysis — reducing arbitration effort by ~60%.",
    stack: ["Transformer NLP", "Smart Contracts", "LangChain", "Python"],
    bg: "radial-gradient(ellipse at 20% 70%, #003820 0%, #001510 60%, #090909 100%)",
    dot: "#4ade80", github: "#", live: "#",
    problem: "Manual dispute resolution in crypto escrow was slow, inconsistent, and impossible to scale — every case required full arbitrator involvement.",
    solution: "Orchestrated smart contract-integrated workflows with transformer NLP analysis of chat history and evidence to generate AI-assisted resolution recommendations.",
    impact: ["~60% reduction in arbitration effort", "1000+ transactions processed at Quillix Ventures", "40% faster dispute resolution time", "Consistent AI-assisted decision recommendations"],
  },
  {
    id: 4, title: "Voice Lead Agent", sub: "AI-Driven Voice Automation",
    desc: "Conversational voice agent for lead engagement with real-time speech recognition, NLP pipelines, and modular CRM integration via FastAPI.",
    stack: ["Speech-to-Text", "OpenAI API", "FastAPI", "Python"],
    bg: "radial-gradient(ellipse at 80% 20%, #3d0030 0%, #160010 60%, #090909 100%)",
    dot: "#f472b6", github: "#", live: "#",
    problem: "Sales lead engagement required constant human attention — qualification was manual and impossible to scale.",
    solution: "Built an AI voice agent with real-time speech recognition, NLP conversation analysis, lead qualification workflows, and CRM-integrated FastAPI services.",
    impact: ["Automated lead qualification workflows", "Real-time conversational AI with natural speech", "Scalable CRM integration via modular FastAPI", "Significantly improved communication efficiency"],
  },
  {
    id: 5, title: "AI Research Platform", sub: "GenAI Multi-Document Intelligence",
    desc: "Multi-document analysis platform with PDF ingestion, semantic chunking, and memory-aware retrieval pipelines for intelligent knowledge extraction.",
    stack: ["RAG", "Vector Embeddings", "FastAPI", "PDF Processing"],
    bg: "radial-gradient(ellipse at 50% 80%, #001a5c 0%, #000a28 60%, #090909 100%)",
    dot: "#60a5fa", github: "#", live: "#",
    problem: "Researchers needed to extract insights from large document collections — existing tools lacked contextual understanding.",
    solution: "Built PDF ingestion, semantic chunking, vector embedding storage, and contextual querying pipelines with memory-aware retrieval that improves over queries.",
    impact: ["Natural language querying across large document sets", "Memory-aware retrieval improves answer relevance", "Scalable FastAPI backend for document processing", "Reduced research time via intelligent retrieval"],
  },
  {
    id: 6, title: "CPAVAE Age Progression", sub: "Conditional Perceptual Adversarial VAE",
    desc: "Facial age progression and rejuvenation with full Explainable AI interpretability using saliency maps, LIME, and DeepSHAP.",
    stack: ["PyTorch", "CPAVAE", "LIME", "DeepSHAP", "Saliency Maps"],
    bg: "radial-gradient(ellipse at 60% 40%, #2a1500 0%, #3d003a 40%, #090909 100%)",
    dot: "#fb923c", github: "#", live: "#",
    problem: "Age progression models were black boxes — no understanding of which facial features drove transformations, making results hard to trust.",
    solution: "Implemented CPAVAE for realistic age transformations with XAI techniques (LIME, DeepSHAP, saliency maps) woven throughout for full interpretability.",
    impact: ["Realistic age progression and rejuvenation results", "Full XAI interpretability via LIME, DeepSHAP, saliency maps", "Demonstrates mastery of generative models and explainability"],
  },
];

export const EXPERIENCE = [
  {
    company: "Keeva Diamonds", role: "AI/ML Developer", period: "Jul 2025 – Present", current: true,
    desc: "Building AR-based virtual try-on for rings/necklaces and smart diamond search using NLP, BERT, FAISS, and voice AI.",
    tags: ["OpenCV", "MediaPipe", "BERT", "FAISS", "Deep Learning"],
  },
  {
    company: "Quillix Ventures Pvt Ltd", role: "AI/ML Developer", period: "Dec 2024 – Jun 2025", current: false,
    desc: "Led AI for an LGBTQ+ social app (content moderation, NLP), and built smart contract AI dispute triage processing 1000+ transactions.",
    tags: ["LangChain", "TensorFlow", "Smart Contracts", "Hugging Face", "FastAPI"],
  },
];

export const SKILLS_LIST = [
  "RAG", "LangChain", "LangGraph", "FastAPI", "PyTorch", "TensorFlow",
  "Prompt Engineering", "Multi-Agent Systems", "LoRA/QLoRA Fine-tuning", "Hallucination Reduction",
  "Hugging Face", "FAISS", "OpenCV", "Vector DBs", "ChromaDB", "Supabase",
  "Python", "JavaScript", "SQL", "Bash",
  "Face Recognition", "Semantic Search", "PDF Pipelines", "Vision-Language Models",
  "AWS", "Vercel", "REST APIs", "Smart Contracts",
];

export const CONTACT_INFO = [
  { label: "Email", value: "tishachoksi18@gmail.com", href: "mailto:tishachoksi18@gmail.com" },
  { label: "Phone", value: "+91 96645 71921", href: "tel:+919664571921" },
  { label: "Location", value: "Surat, Gujarat, India", href: null },
  { label: "GitHub", value: "Coming soon", href: "#" },
  { label: "LinkedIn", value: "Coming soon", href: "#" },
];
