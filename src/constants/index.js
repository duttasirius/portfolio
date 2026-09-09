const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const words = [
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "AI-Powered", imgPath: "/images/ideas.svg" },
  { text: "Scalable", imgPath: "/images/concepts.svg" },
  { text: "User-Focused", imgPath: "/images/designs.svg" },
  { text: "Full-Stack", imgPath: "/images/code.svg" },
  { text: "AI-Powered", imgPath: "/images/ideas.svg" },
  { text: "Scalable", imgPath: "/images/concepts.svg" },
  { text: "User-Focused", imgPath: "/images/designs.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "GitHub Projects" },
  { value: 3, suffix: "+", label: "Full-Stack Apps" },
  { value: 2, suffix: "+", label: "AI-Powered Features" },
  { value: 1, suffix: "", label: "Engineering Focus" },
];

const logoIconsList = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "JavaScript", imgPath: "/images/logos/js.svg" },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Full-Stack Engineering",
    desc: "Builds end-to-end web applications across React frontends, Express/Node.js APIs, MongoDB data models and cloud services.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI Product Integration",
    desc: "Connects Gemini and LLM-powered features to real application data with validation, fallback strategies and user-friendly interfaces.",
  },
  {
    imgPath: "/images/time.png",
    title: "Production-Minded Delivery",
    desc: "Focuses on authentication, payments, deployment, responsive UI, debugging and maintainable project structure—not just demos.",
  },
];

const techStackImgs = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  { name: "React", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Node.js", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Three.js", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Git", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Built and refined full-stack portfolio projects with a strong focus on practical engineering, product UX and deployment readiness.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full-Stack Developer",
    date: "2025 - Present",
    responsibilities: [
      "Developed and maintained MERN-style applications with React, Node.js, Express and MongoDB.",
      "Implemented authentication, authorization, payments, reviews, cart and order workflows.",
      "Integrated cloud media, third-party APIs and deployment workflows for real-world applications.",
    ],
  },
  {
    review: "Designed AI-assisted product discovery flows that combine natural language understanding with real database-backed results.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "AI Integration & Backend Engineering",
    date: "2026 - Present",
    responsibilities: [
      "Integrated Google Gemini into grocery and food-delivery applications for natural-language discovery.",
      "Added deterministic search fallbacks, server-side ID validation and catalog-grounded responses.",
      "Worked across API design, authentication debugging, deployment configuration and frontend integration.",
    ],
  },
  {
    review: "Continuously expanding a portfolio of frontend, backend and interactive projects while strengthening software engineering fundamentals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Software Development Projects",
    date: "2024 - Present",
    responsibilities: [
      "Built responsive interfaces with React, Tailwind CSS, Redux Toolkit and modern component patterns.",
      "Explored 3D experiences with Three.js and GSAP alongside conventional web application development.",
      "Maintained multiple GitHub repositories and iterated on features through local testing and deployment.",
    ],
  },
];

const expLogos = [
  { name: "Development", imgPath: "/images/logo1.png" },
  { name: "AI", imgPath: "/images/logo2.png" },
  { name: "Projects", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "What I Build",
    mentions: "@fullstack",
    review: "End-to-end applications that connect polished interfaces with real APIs, data models, authentication and business workflows.",
    imgPath: "/images/client1.png",
  },
  {
    name: "How I Solve",
    mentions: "@engineering",
    review: "I prefer practical solutions: validate AI output, protect APIs, keep fallbacks available and debug the complete request flow from UI to database.",
    imgPath: "/images/client3.png",
  },
  {
    name: "What I’m Exploring",
    mentions: "@aiandweb",
    review: "AI-assisted product discovery, real-time application patterns, immersive interfaces and stronger deployment architecture.",
    imgPath: "/images/client2.png",
  },
  {
    name: "My Workflow",
    mentions: "@buildship",
    review: "Build locally, verify the integration, commit cleanly, push to GitHub and deploy only after the feature works end to end.",
    imgPath: "/images/client5.png",
  },
  {
    name: "My Focus",
    mentions: "@productengineering",
    review: "Readable code, useful UX, secure data handling and features that solve an actual product problem rather than adding technology for its own sake.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Open to Opportunities",
    mentions: "@sagnikdutta",
    review: "Looking to contribute to teams building modern web products where frontend craft, backend engineering and AI-enabled experiences come together.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  { name: "linkedin", imgPath: "/images/linkedin.png" },
  { name: "github", imgPath: "/images/github.svg" },
  { name: "x", imgPath: "/images/x.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
