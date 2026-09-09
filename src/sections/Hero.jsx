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
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-10 pointer-events-none">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout min-h-[680px] sm:min-h-[760px]">
        <header className="flex w-full flex-col justify-center px-4 sm:px-5 md:px-20">
          <div className="flex flex-col gap-6 sm:gap-7">
            <div className="hero-text">
              <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.28em] text-[#839CB5]">Hello, I’m Sagnik Dutta</p>
              <h1 className="text-[28px] sm:text-[34px] md:text-[60px] leading-tight">
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
              <h1 className="text-[28px] sm:text-[34px] md:text-[60px] leading-tight">web products</h1>
              <h1 className="text-[28px] sm:text-[34px] md:text-[60px] leading-tight">that solve real problems.</h1>
            </div>

            <p className="relative z-10 max-w-2xl text-base leading-7 text-white-50 sm:text-lg md:text-xl">
              Full-stack developer based in India, focused on React, Node.js, MongoDB,
              AI integrations and polished interactive experiences. I build products
              that connect thoughtful UI with reliable backend systems.
            </p>

            <div className="relative z-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <Button text="Explore My Work" className="h-12 w-full sm:w-60 md:h-16 md:w-80" id="counter" />
              <a
                href="https://github.com/duttasirius"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/15 px-6 py-4 transition hover:bg-white/5 sm:w-auto"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </header>

        <figure className="pointer-events-none">
          <div className="hero-3d-layout pointer-events-none">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
