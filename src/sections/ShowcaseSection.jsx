import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "GreenCart — AI Grocery E-Commerce",
    description:
      "A full-stack multivendor grocery platform with Gemini-powered natural-language product discovery, cart and checkout flows, Stripe payments, seller workflows, product reviews and Cloudinary media.",
    image:
      "https://raw.githubusercontent.com/duttasirius/ggrocery/dev/client/src/assets/bottom_banner_image.png",
    alt: "GreenCart grocery storefront",
    href: "https://github.com/duttasirius/ggrocery",
    featured: true,
  },
  {
    title: "Vingo — Food Delivery Platform",
    description:
      "A MERN food-delivery application with role-based customer, owner and delivery workflows, location-aware restaurant discovery, Razorpay payments, Socket.IO realtime features and a Gemini-powered food assistant.",
    image:
      "https://raw.githubusercontent.com/duttasirius/vingo-Food-Delivery/dev/UI-SCREENSHOT/userUI.png",
    alt: "Vingo food delivery interface",
    href: "https://github.com/duttasirius/vingo-Food-Delivery",
  },
  {
    title: "MultiCart — Multi-Vendor Marketplace",
    description:
      "A production-oriented marketplace with customer, vendor and admin roles, AI shopping assistance with tool calling, real MongoDB product search, Stripe checkout, order lifecycle management and Cloudinary.",
    image:
      "https://raw.githubusercontent.com/duttasirius/multivendor/development/public/images/HomePage.png",
    alt: "MultiCart marketplace",
    href: "https://github.com/duttasirius/multivendor",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
    );

    gsap.utils.toArray(".portfolio-project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        },
      );
    });
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="mb-12 text-center">
          <p className="text-[#839CB5] text-sm uppercase tracking-[0.3em]">Selected Work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold">Projects I’ve Built</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white-50 md:text-lg">
            Full-stack products combining modern frontend engineering, backend APIs,
            AI integrations, payments, authentication and cloud infrastructure.
          </p>
        </div>

        <div className="showcaselayout">
          <div className="first-project-wrapper portfolio-project-card">
            <a href={projects[0].href} target="_blank" rel="noreferrer" className="block group">
              <div className="image-wrapper overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].alt}
                  className="transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="text-content mt-7">
                <p className="text-sm uppercase tracking-[0.2em] text-[#839CB5]">Featured Project</p>
                <h2 className="mt-2">{projects[0].title}</h2>
                <p className="text-white-50 md:text-xl">{projects[0].description}</p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="project portfolio-project-card group"
              >
                <div className="image-wrapper overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h2>{project.title}</h2>
                <p className="mt-2 text-white-50">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
