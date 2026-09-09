import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GreenCart — AI Grocery E-Commerce",
    label: "AI Grocery Platform",
    description: "A full-stack grocery marketplace with Gemini-powered natural-language product discovery, cart and checkout, Stripe payments, seller workflows, product reviews and Cloudinary media.",
    image: "/images/project-greencart.svg",
    alt: "GreenCart technology stack overview thumbnail",
    deployment: "https://ggrocery-hjzq.vercel.app/",
    code: "https://github.com/duttasirius/ggrocery",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Stripe", "Cloudinary"],
    features: ["AI product discovery", "Multivendor commerce", "Stripe checkout"],
  },
  {
    title: "Vingo — Food Delivery Platform",
    label: "Realtime Food Delivery",
    description: "A MERN food-delivery application with role-based customer, owner and delivery workflows, location-aware restaurant discovery, Razorpay payments, Socket.IO realtime features and a Gemini-powered food assistant.",
    image: "/images/project-vingo.svg",
    alt: "Vingo technology stack overview thumbnail",
    deployment: "https://vingo-food-delivery.vercel.app",
    code: "https://github.com/duttasirius/vingo-Food-Delivery",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Socket.IO", "Razorpay"],
    features: ["AI food assistant", "Realtime order updates", "Razorpay payments"],
  },
  {
    title: "MultiCart — Multi-Vendor Marketplace",
    label: "AI Marketplace",
    description: "A production-oriented marketplace with customer, vendor and admin roles, AI shopping assistance with tool calling, real MongoDB product search, Stripe checkout, order lifecycle management and Cloudinary.",
    image: "/images/project-multicart.svg",
    alt: "MultiCart technology stack overview thumbnail",
    deployment: "https://multivendor-six.vercel.app/",
    code: "https://github.com/duttasirius/multivendor",
    tags: ["Next.js", "TypeScript", "MongoDB", "Redux", "Stripe", "Cloudinary"],
    features: ["AI tool calling", "Vendor/admin RBAC", "Order lifecycle"],
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power2.out" }
    );

    gsap.utils.toArray(".portfolio-project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top bottom-=70" },
        }
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="w-full">
        <div className="mb-10 md:mb-12 text-center px-1">
          <p className="text-[#70a7ff] text-xs sm:text-sm uppercase tracking-[0.3em]">Selected Work</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">Projects I’ve Built</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-white-50">
            Real products combining frontend engineering, backend systems, AI integrations,
            payments, authentication, realtime features and cloud infrastructure.
          </p>
        </div>

        <div className="grid gap-6 md:gap-7 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.title}
              className="portfolio-project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_-30px_rgba(0,0,0,0.8)] transition duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/45" />

                <div className="pointer-events-none absolute left-3 right-3 top-3 flex flex-wrap gap-1.5 opacity-100 transition duration-300 group-hover:opacity-0 sm:left-4 sm:right-4 sm:top-4 sm:gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-md sm:px-2.5 sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 hidden items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:flex group-hover:opacity-100 sm:flex">
                  {project.deployment && (
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      className="pointer-events-auto inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-lg transition hover:scale-105"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="pointer-events-auto inline-flex items-center rounded-xl border border-white/20 bg-black/80 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-black"
                  >
                    GitHub Code ↗
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#70a7ff] sm:text-xs">{project.label}</p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[10px] sm:text-[11px] font-medium text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#70a7ff]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {project.deployment && (
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#dbeafe] sm:w-auto"
                    >
                      Live Demo →
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.09] sm:w-auto"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
