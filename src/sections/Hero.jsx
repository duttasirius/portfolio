import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#839CB5]">Hello, I’m Sagnik Dutta</p>
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt=""
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>web products</h1>
              <h1>that solve real problems.</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 max-w-2xl">
              Full-stack developer based in India, focused on React, Node.js, MongoDB,
              AI integrations and polished interactive experiences. I build products
              that connect thoughtful UI with reliable backend systems.
            </p>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <Button text="Explore My Work" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
              <a href="https://github.com/duttasirius" target="_blank" rel="noreferrer" className="px-6 py-4 rounded-xl border border-white/15 hover:bg-white/5 transition">
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
