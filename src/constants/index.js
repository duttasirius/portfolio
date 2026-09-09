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
  { value: 2, suffix: "+", label: "AI-Powered Apps" },
  { value: 1, suffix: "", label: "Engineering Focus" },
];

const logoIconsList = [
  { name: "React", imgPath: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", imgPath: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
  { name: "JavaScript", imgPath: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", imgPath: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", imgPath: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js", imgPath: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "MongoDB", imgPath: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Mongoose", imgPath: "https://cdn.simpleicons.org/mongoose/880000" },
  { name: "Tailwind CSS", imgPath: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Redux Toolkit", imgPath: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Socket.IO", imgPath: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
  { name: "Stripe", imgPath: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Razorpay", imgPath: "https://cdn.simpleicons.org/razorpay/3395FF" },
  { name: "Cloudinary", imgPath: "https://cdn.simpleicons.org/cloudinary/3448C5" },
  { name: "Gemini AI", imgPath: "https://cdn.simpleicons.org/googlegemini/8E75FF" },
  { name: "Git", imgPath: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", imgPath: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "Vercel", imgPath: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Postman", imgPath: "https://cdn.simpleicons.org/postman/FF6C37" },
];

const abilities = [
  {
    imgPath: "/images/code.svg",
    title: "Full-Stack Engineering",
    desc: "Builds end-to-end applications with React or Next.js, Express/Node.js APIs, MongoDB data models and production-focused workflows.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI Integration",
    desc: "Integrates Gemini and LLM-powered search experiences with real application data, validation, deterministic fallbacks and useful product UX.",
  },
  {
    imgPath: "/images/time.png",
    title: "Production-Minded Delivery",
    desc: "Focuses on authentication, payments, cloud media, realtime features, responsive interfaces, debugging and deployment readiness.",
  },
];

const techStackImgs = logoIconsList;

const techStackIcons = [
  { name: "React", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Node.js", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Three.js", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Git", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Built and refined portfolio projects around practical full-stack engineering, AI features and real product workflows.",
    imgPath: "/images/exp1.png",
    logoPath: "https://cdn.simpleicons.org/react/61DAFB",
    title: "Full-Stack Development",
    date: "2024 - Present",
    responsibilities: [
      "Developed web applications using React, Next.js, Node.js, Express and MongoDB.",
      "Implemented authentication, authorization, carts, orders, reviews, payments and media uploads.",
      "Worked across frontend, backend APIs, data modeling, deployment and debugging.",
    ],
  },
  {
    review: "Focused on turning LLMs into useful product capabilities rather than generic chat interfaces.",
    imgPath: "/images/exp2.png",
    logoPath: "https://cdn.simpleicons.org/googlegemini/8E75FF",
    title: "AI & Product Integration",
    date: "2026 - Present",
    responsibilities: [
      "Integrated Google Gemini into grocery and food-delivery applications for natural-language discovery.",
      "Connected AI responses to real MongoDB catalog data with server-side validation and deterministic fallbacks.",
      "Built user-facing AI assistant interfaces that return actionable product results.",
    ],
  },
  {
    review: "Continuously expanding a portfolio of real-world projects while improving engineering fundamentals and delivery practices.",
    imgPath: "/images/exp3.png",
    logoPath: "https://cdn.simpleicons.org/mongodb/47A248",
    title: "Software Engineering Projects",
    date: "2024 - Present",
    responsibilities: [
      "Built responsive interfaces with React, Tailwind CSS, Redux Toolkit and modern component patterns.",
      "Worked with Stripe, Razorpay, Cloudinary, Socket.IO, Leaflet and third-party APIs.",
      "Used Git/GitHub, Vercel and local testing workflows to iterate from feature idea to deployment.",
    ],
  },
];

const expLogos = [
  { name: "Development", imgPath: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "AI", imgPath: "https://cdn.simpleicons.org/googlegemini/8E75FF" },
  { name: "Projects", imgPath: "https://cdn.simpleicons.org/mongodb/47A248" },
];

const testimonials = [
  {
    name: "What I Build",
    mentions: "@fullstack",
    review: "End-to-end applications that connect polished interfaces with real APIs, databases, authentication and business workflows.",
    imgPath: "/images/client1.png",
  },
  {
    name: "How I Solve",
    mentions: "@engineering",
    review: "I prefer practical systems: validate external outputs, protect APIs, keep fallbacks available and trace the complete request flow.",
    imgPath: "/images/client3.png",
  },
  {
    name: "What I’m Exploring",
    mentions: "@aiandweb",
    review: "AI-assisted search, realtime application patterns, immersive interfaces and stronger production architecture.",
    imgPath: "/images/client2.png",
  },
  {
    name: "My Workflow",
    mentions: "@buildship",
    review: "Build locally, verify the integration, commit cleanly, push to GitHub and deploy once the feature works end to end.",
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
  { name: "github", imgPath: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "x", imgPath: "/images/x.png" },
];

export { words, abilities, logoIconsList, counterItems, expCards, expLogos, testimonials, socialImgs, techStackIcons, techStackImgs, navLinks };
