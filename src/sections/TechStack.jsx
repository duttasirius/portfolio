import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { logoIconsList } from "../constants";

const skillGroups = [
  { title: "Frontend", skills: "React, Next.js, JavaScript, TypeScript, Vite, Tailwind CSS, Redux Toolkit, React Router, responsive UI" },
  { title: "Backend", skills: "Node.js, Express.js, REST APIs, MongoDB, Mongoose, authentication, authorization" },
  { title: "AI & Search", skills: "Google Gemini, LLM integration, natural-language search, catalog-grounded AI, deterministic fallbacks" },
  { title: "Payments & Cloud", skills: "Stripe, Razorpay, Cloudinary, EmailJS, Nodemailer, environment configuration, Vercel" },
  { title: "Realtime & Maps", skills: "Socket.IO, Leaflet, location-aware discovery, realtime order and delivery tracking patterns" },
  { title: "Interactive Web", skills: "Three.js, React Three Fiber, GSAP, ScrollTrigger, animated interfaces" },
  { title: "Engineering Tools", skills: "Git, GitHub, npm, Postman, Linux development, debugging, API testing, deployment workflows" },
];

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: "#skills", start: "top 75%" },
      },
    );
  });

  return (
    <section id="skills" className="section-padding">
      <div className="w-full px-5 md:px-10">
        <TitleHeader
          title="Technical Skills & Tools"
          sub="⚙️ The stack I use to build real products"
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {logoIconsList.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-card group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black/30 p-2.5 shadow-inner">
                <img src={tech.imgPath} alt={tech.name} className="max-h-9 max-w-9 object-contain" loading="lazy" />
              </div>
              <p className="text-xs font-semibold text-white/90 sm:text-sm">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 leading-7 text-white/60">{group.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
