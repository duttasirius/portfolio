import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "GreenCart — AI Grocery E-Commerce", label: "AI Grocery Platform", description: "A full-stack grocery marketplace with Gemini-powered natural-language product discovery, cart and checkout, Stripe payments, seller workflows, product reviews and Cloudinary media.", image: "/images/project-greencart.svg", alt: "GreenCart AI grocery e-commerce project thumbnail", href: "https://github.com/duttasirius/ggrocery", tags: ["React", "Express", "MongoDB", "Gemini AI", "Stripe"], features: ["AI product search", "Multivendor catalogue", "Stripe checkout"] },
  { title: "Vingo — Food Delivery Platform", label: "Realtime Food Delivery", description: "A MERN food-delivery application with role-based customer, owner and delivery workflows, location-aware restaurant discovery, Razorpay payments, Socket.IO realtime features and a Gemini-powered food assistant.", image: "/images/project-vingo.svg", alt: "Vingo AI food delivery project thumbnail", href: "https://github.com/duttasirius/vingo-Food-Delivery", tags: ["React", "Express", "MongoDB", "Gemini AI", "Socket.IO"], features: ["AI food assistant", "Live order flows", "Razorpay payments"] },
  { title: "MultiCart — Multi-Vendor Marketplace", label: "AI Marketplace", description: "A production-oriented marketplace with customer, vendor and admin roles, AI shopping assistance with tool calling, real MongoDB product search, Stripe checkout, order lifecycle management and Cloudinary.", image: "/images/project-multicart.svg", alt: "MultiCart AI multi-vendor marketplace project thumbnail", href: "https://github.com/duttasirius/multivendor", tags: ["Next.js", "TypeScript", "MongoDB", "Redux", "Stripe"], features: ["AI tool calling", "Vendor/admin RBAC", "Order lifecycle"] },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.1, ease: "power2.out" });
    gsap.utils.toArray(".portfolio-project-card").forEach((card, index) => {
      gsap.fromTo(card, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, delay: index * 0.08, ease: "power2.out", scrollTrigger: { trigger: card, start: "top bottom-=70" } });
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="w-full md:px-10 px-5">
        <div className="mb-12 text-center">
          <p className="text-[#70a7ff] text-sm uppercase tracking-[0.3em]">Selected Work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Projects I’ve Built</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white-50 md:text-lg">Real products combining frontend engineering, backend systems, AI integrations, payments, authentication, realtime features and cloud infrastructure.</p>
        </div>
        <div className="grid gap-7 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <article key={project.title} className="portfolio-project-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_20px_70px_-30px_rgba(0,0,0,0.8)] transition duration-500 hover:-translate-y-1 hover:border-white/20">
              <a href={project.href} target="_blank" rel="noreferrer" className="block">
                <div className="relative overflow-hidden bg-black/20">
                  <img src={project.image} alt={project.alt} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">{tag}</span>)}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#70a7ff]">{project.label}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p>
                  <div className="mt-5 space-y-2">
                    {project.features.map((feature) => <div key={feature} className="flex items-center gap-2 text-sm text-white/80"><span className="h-1.5 w-1.5 rounded-full bg-[#70a7ff]" /><span>{feature}</span></div>)}
                  </div>
                  <div className="mt-6 inline-flex items-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition group-hover:bg-[#dbeafe]">View Project →</div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
