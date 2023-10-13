import React from "react";

const ProjectCard = ( { imgUrl, title, description}) => {
    return ( 
        <div>
            <div className="h-52 md:h-72" style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}></div>
            <div className="text-white">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        
     );
}
 
export default ProjectCard;