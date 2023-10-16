import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={` ${buttonStyle}rounded-fullpx-6 py-3 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
