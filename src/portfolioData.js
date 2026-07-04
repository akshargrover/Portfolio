export const portfolioData = {
  aboutMe: {
    name: "Akshar Grover",
    tag: "BOT",
    avatarUrl: "/path-to-your-avatar.jpg",
    bio: "Hi, I'm Akshar! I'm currently pursuing my Bachelor of Technology in Artificial Intelligence and Data Science at ADGIPS. I specialize in Large Language Models, AI agents, and complex workflow automation.",
    education: "B.Tech in Artificial Intelligence and Data Science (Expected Sep 2027)",
    cgpa: "9.03"
  },
  experience: [
    {
      role: "AI Engineering Intern",
      company: "Locus",
      duration: "March 2026 - June 2026",
      points: [
        "Engineered robust n8n workflows to parse and analyze a large-scale database containing over 400,000 contacts and 200,000 companies.",
        "Automated the weekly extraction and delivery of actionable insights for newly acquired contacts, optimizing data visibility for the revenue team."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "PharynxAI",
      duration: "June 2025 - July 2025",
      points: [
        "Improved ML/CV model accuracy (YOLOv8, D-Fine, Mask R-CNN) for an automated driving test system, specializing in low-resolution and shadow-heavy video optimization.",
        "Automated Shopify customer engagement achieving > 10% survey completion and ≥ 5% cart recovery, with ≥ 99% reliability."
      ]
    }
  ],
  projects: [
    {
      title: "Calmbot",
      date: "June 2025",
      techStack: ["LangChain", "RAG", "FAISS", "Gemini Flash"],
      description: "Developed a mental health-focused AI chatbot that delivers context-aware, supportive responses. Enhanced with document-grounded Q&A, conversational memory, Streamlit UI, and crisis detection."
    },
    {
      title: "E-commerce Customer Engagement Automation",
      date: "July 2025",
      techStack: ["Python", "n8n", "Twilio", "Shopify"],
      description: "Architected a centralized tracking system using Google Sheets to monitor customer and cart status, enabling conditional messaging via Gmail, Twilio, and Slack."
    },
    {
      title: "Tweet Sentiment Analysis & Spam Mail Classifier",
      date: "2024 - 2025",
      techStack: ["TensorFlow", "scikit-learn", "NLP", "spaCy"],
      description: "Built distinct ML models leveraging TF-IDF and Random Forest/Adam optimizers to classify text data, achieving 96.68% accuracy on spam detection."
    }
  ],
  research: {
    title: "An Analysis of Mixture of Recursions (MOR): A Unified Framework for Efficient Language Modelling",
    publication: "IJPREMS (Peer Reviewed) | Vol. 05, Issue 11"
  },
  extracurriculars: [
    {
      event: "VLR Vortex Organizer",
      date: "Mar 2025, Feb 2026",
      description: "Organized competitive gaming tournaments with 50+ participants and a 200-300 footfall. Managed bracket design, live scoring systems, and event logistics end-to-end. Coordinated a dual-format structure, seamlessly managing online group stages that transitioned into offline knockout rounds."
    },
    {
      event: "BeCon Hackathon By ONDC",
      date: "February 2025",
      description: "Finalist in a Hackathon organized by IIT Delhi in collaboration with ONDC, building a user dashboard."
    }
  ],
  mockBotResponses: [
    "I am currently in MVP offline mode! Please check out the #projects channel to see what I've been building.",
    "Akshar is currently away from the keyboard building cool things, but you can email him at akshargrover@gmail.com!",
    "I'm just a frontend mock bot right now. The live LangGraph AI backend is coming in v2.0!"
  ],
  techStackRoles: [
    {
      roleName: "👑 ADMIN (Contact)",
      statusColor: "bg-green-500", // Online status dot
      members: [
        { name: "github.com/akshargrover", link: "https://github.com/akshargrover" },
        { name: "linkedin.com/in/akshargrover", link: "https://linkedin.com/in/akshargrover" },
        { name: "akshargrover@gmail.com", link: "mailto:akshargrover@gmail.com" }
      ]
    },
    {
      roleName: "⚙️ BACKEND & AI",
      statusColor: "bg-discord-blurple", 
      members: [
        { name: "Python" },
        { name: "TensorFlow / PyTorch" },
        { name: "LangChain / LangGraph" },
        { name: "OpenCV" },
        { name: "SQL" }
      ]
    },
    {
      roleName: "🚀 AUTOMATION & TOOLS",
      statusColor: "bg-yellow-500",
      members: [
        { name: "n8n" },
        { name: "Twilio" },
        { name: "Git / Bash" }
      ]
    },
    {
      roleName: "🌐 FRONTEND",
      statusColor: "bg-blue-400",
      members: [
        { name: "React / Tailwind" },
        { name: "HTML / CSS / JS" }
      ]
    }
  ]
};