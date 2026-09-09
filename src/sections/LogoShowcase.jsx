import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center marquee-item" title={icon.name}>
    <img src={icon.imgPath} alt={icon.name} />
  </div>
);

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="mb-6 text-center px-5">
      <p className="text-[#839CB5] text-sm uppercase tracking-[0.25em]">Core Technologies</p>
      <p className="mt-2 text-white-50">Tools I use across frontend, backend, AI and interactive web projects.</p>
    </div>
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-44">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => <LogoIcon key={`${icon.name}-${index}`} icon={icon} />)}
        {logoIconsList.map((icon, index) => <LogoIcon key={`${icon.name}-repeat-${index}`} icon={icon} />)}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
