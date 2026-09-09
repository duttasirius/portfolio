import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => gsap.to(".timeline", { scaleY: 1 - self.progress }),
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: -10,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 70%" },
      });
    });
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-0">
        <TitleHeader title="How I’ve Been Building" sub="🧩 Projects, engineering & continuous learning" />
        <div className="mt-20 sm:mt-24 md:mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-16 sm:space-y-20">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper timeline-card">
                <div className="w-full xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
                        <img
                          src={card.logoPath}
                          alt={`${card.title} primary technology`}
                          className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/40">Primary Stack</p>
                        <p className="mt-1 text-base sm:text-lg font-semibold text-white leading-tight">
                          {card.title === "AI & Product Integration"
                            ? "Google Gemini"
                            : card.title === "Software Engineering Projects"
                              ? "MongoDB"
                              : "React"}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </div>

                <div className="w-full xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText w-full flex xl:gap-20 md:gap-10 gap-4 relative z-20 pl-12 sm:pl-14 xl:pl-0">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={`${card.title} technology icon`} loading="lazy" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h1 className="font-semibold text-2xl sm:text-3xl leading-tight">{card.title}</h1>
                        <p className="my-4 sm:my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                        <p className="text-[#839CB5] italic">Focus Areas</p>
                        <ul className="list-disc ms-5 mt-4 sm:mt-5 flex flex-col gap-4 sm:gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-base sm:text-lg leading-7">{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
