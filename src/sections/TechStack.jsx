import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const skillGroups = [
  { title: "Frontend", skills: "React, JavaScript, Vite, Tailwind CSS, Redux Toolkit, React Router, responsive UI" },
  { title: "Backend", skills: "Node.js, Express.js, REST APIs, MongoDB, Mongoose, authentication, authorization" },
  { title: "AI & Search", skills: "Google Gemini, LLM integration, natural-language search, tool-style workflows, deterministic fallbacks" },
  { title: "Payments & Cloud", skills: "Stripe, Razorpay, Cloudinary, EmailJS/Nodemailer, environment configuration" },
  { title: "Realtime & Maps", skills: "Socket.IO, Leaflet, location-aware discovery, live order tracking patterns" },
  { title: "Interactive Web", skills: "Three.js, React Three Fiber, GSAP, ScrollTrigger, animated interfaces" },
  { title: "Engineering Tools", skills: "Git, GitHub, npm, Vercel deployment, debugging, API testing, Linux development" },
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "#skills", start: "top center" },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Technical Skills & Tools" sub="⚙️ The stack I use to build real products" />

        <div className="tech-grid mt-10">
          {techStackIcons.map((techStackIcon) => (
            <div key={techStackIcon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full"><p>{techStackIcon.name}</p></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-border rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-3 text-white-50 leading-relaxed">{group.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
