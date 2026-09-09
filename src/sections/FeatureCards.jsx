import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map(({ imgPath, title, desc }) => (
        <div key={title} className="card-border rounded-2xl p-8 flex flex-col gap-4 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-1 transition duration-300">
          <div className="size-14 flex items-center justify-center rounded-2xl bg-white/[0.05]">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
