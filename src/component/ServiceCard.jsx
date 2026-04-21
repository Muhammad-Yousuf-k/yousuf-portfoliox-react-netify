import React from "react";
import { Code, Palette, Server, Globe, Smartphone, Database, Search, Wrench, Layers, Computer } from "lucide-react";

// Icon mapping object
const iconMap = {
  code: Code,
  palette: Palette,
  server: Server,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
  search: Search,
  wrench: Wrench,
  layers: Layers,
  wordpress: Computer, // WordPress uses Code icon as fallback
};

const ServiceCard = ({ data }) => {
  const IconComponent = iconMap[data.logo] || Code;

  return (
    <div
      style={{ top: data.top }}
      className="group w-[90%] md:w-[60%] lg:w-[40%] min-h-[350px] shadow-2xl border border-gray-200 bg-white flex flex-col rounded-2xl sticky overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-gray-300 hover:-translate-y-1 p-6"
    >
      <div className="flex items-start justify-start w-full mb-4 gap-x-4">
        <div className=" serviceCardLogo p-3 transition-colors duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100">
          <IconComponent
            className="w-10 h-10 text-indigo-600 transition-transform duration-300 group-hover:scale-110"
            strokeWidth={1.5}
          />
        </div>
        <div className="flex-1">
          <h1 className="exo2 text-2xl sm:text-3xl text-[var(--textprimary)] font-bold leading-tight">
            {data.name}
          </h1>
        </div>
      </div>

      <div className="flex-1 w-full">
        <p className="text-base sm:text-lg text-[var(--textlight2)] leading-relaxed">
          {data.para}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;