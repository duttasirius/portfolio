import { socialImgs } from "../constants";

const socialLinks = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/duttasirius",
  x: "https://x.com/",
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="flex flex-col justify-center">
        <p>Sagnik Dutta · Full-Stack & AI Developer</p>
      </div>
      <div className="socials">
        {socialImgs.map((socialImg, index) => (
          <a
            key={index}
            className="icon"
            href={socialLinks[socialImg.name] || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label={socialImg.name}
          >
            <img src={socialImg.imgPath} alt={`${socialImg.name} social link`} />
          </a>
        ))}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end">
          © {new Date().getFullYear()} Sagnik Dutta. Built with React, Three.js & GSAP.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
