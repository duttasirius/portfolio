import { useEffect, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner relative">
        <a href="#hero" className="logo" onClick={handleNavClick}>
          Sagnik Dutta
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} onClick={handleNavClick}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#contact" className="contact-btn group hidden sm:flex" onClick={handleNavClick}>
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-white transition hover:bg-white/10 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav className="absolute right-0 top-[calc(100%+0.5rem)] z-[110] w-56 rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <a
                    href={link}
                    onClick={handleNavClick}
                    className="flex items-center rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
