export const portfolioData = {
  aboutMe: {
    name: "Akshar Grover",
    tag: "BOT",
    avatarUrl: "/1324832.png",
    bio: "Hi, I'm Akshar! 👋 I'm a B.Tech student in Artificial Intelligence and Data Science at ADGIPS (Expected 2027). My core focus lies at the intersection of AI agents, Large Language Models, and complex workflow automation (using tools like LangGraph and n8n). Whether I am building RAG-based mental health chatbots or optimizing data pipelines for massive enterprise databases, I love building scalable systems that solve actual business problems.",
    aboutMe: {
      // ... existing name, tag, and bio ...
      infoBoxes: [
        {
          label: "EDUCATION",
          value: "B.Tech in Artificial Intelligence and Data Science (Expected Sep 2027)",
          borderColor: "border-blue-400"
        },
        {
          label: "CGPA",
          value: "9.03",
          borderColor: "border-green-400"
        },
        {
          label: "Core Focus",
          value: "AI Agents, LLMs, Workflow Automation",
          borderColor: "border-purple-500"
        },
        {
          label: "LOCATION",
          value: "Delhi, India",
          borderColor: "border-yellow-500"
        }
      ]
    }
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
      description: "Developed a mental health-focused AI chatbot that delivers context-aware, supportive responses. Enhanced with document-grounded Q&A, conversational memory, Streamlit UI, and crisis detection.",
      githubLink: "https://github.com/akshargrover/calmbot_langgraph" // Replace with actual repo name
    },
    {
      title: "E-commerce Customer Engagement Automation",
      date: "July 2025",
      techStack: ["Python", "n8n", "Twilio", "Shopify"],
      description: "Architected a centralized tracking system using Google Sheets to monitor customer and cart status, enabling conditional messaging via Gmail, Twilio, and Slack.",
      githubLink: "https://github.com/akshargrover/Shopify-Automation-Workflow" // Replace with actual repo name
    },
    {
      title: "Tweet Sentiment Analysis",
      date: "May 2025",
      techStack: ["TensorFlow", "scikit-learn", "spaCy", "Python"],
      description: "Implemented a sentiment analysis model to classify tweets as positive or negative using a Random Forest classifier with TF-IDF vectorization.",
      githubLink: "https://github.com/akshargrover/tweet-sentiment-analysist" // Replace with actual repo name
    },
    {
      title: "Spam Mail Classifier",
      date: "October 2024",
      techStack: ["TensorFlow", "scikit-learn", "NLP", "Python"],
      description: "Applied NLP techniques to analyze email text and identify common spam patterns utilizing the Adam optimizer, achieving 96.68% accuracy.",
      githubLink: "https://github.com/akshargrover/Spam-Mail-Classifier" // Replace with actual repo name
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
  mockBotResponses: ["I'm just a frontend mock bot right now. The live LangGraph AI backend is coming in v2.0!"
  ],
  techStackRoles: [
    {
      roleName: "👑 ADMIN (Contact)",
      statusColor: "bg-green-500", // Online status dot
      members: [
        { name: "GitHub", link: "https://github.com/akshargrover" },
        { name: "LinkedIn", link: "https://linkedin.com/in/akshargrover" },
        { name: "Email", link: "mailto:akshargrover@gmail.com" },
        { name: "Resume", link: "https://drive.google.com/file/d/1kF5RfgmpBp3j2nOWmv7GJuC0deHebB5K/view?usp=sharing" }
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
  ],
  techStack: {
    introMessage: "Here is a breakdown of the tools and technologies I use to build AI agents and automate workflows:",
    categories: [
      {
        category: "Languages",
        skills: "Python, SQL ,HTML, CSS, C, Java,Javascript"
      },
      {
        category: "Technologies/Frameworks",
        skills: "n8n,TensorFlow, Keras, Scikit-learn, XGBoost, Flask, Pytorch, OpenCV,LangChain,LangGraph"
      },
      {
        category: "Tools",
        skills: "Git, Bash, Docker, VS Code, Jupyter Notebook, Google Colab"
      }
    ]
  }
};