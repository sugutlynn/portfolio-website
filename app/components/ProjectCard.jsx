import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overly absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:ng-opacity-80 transition-all duration-500"></div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
