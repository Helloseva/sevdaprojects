
// import React, { useState } from "react";
// import "./resources.css";

// function ResourcesPage(props) {
//   const [hovered, setHovered] = useState(false);

//   const handleHover = () => {
//     setHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setHovered(false);
//   };

//   const handleClick = (e, link) => {
//     e.preventDefault();
//     window.open(link, "_blank");
//   };

//   return (
//     <div
//       className={`flex-item ${hovered ? "hovered" : ""}`}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="card-content">
//         <h5 className="card-title">{props.title}</h5>
//         <p className="card-description">{props.description}</p>
//       </div>
//       {hovered && (
//         <div className="additional-info">
//           <button
//             className="additional-info-button"
//             onClick={(e) => handleClick(e, props.githubLink)}
//           >
//             GitHub
//           </button>
//           <button
//             className="additional-info-button"
//             onClick={(e) => handleClick(e, props.urlLink)}
//           >
//             URL
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResourcesPage;

import React, { useState } from "react";
import "./resources.css";

function ResourcesPage(props) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  const renderAdditionalInfo = () => {
    if (hovered) {
      return (
        <div className="additional-info">
          <button
            className="additional-info-button"
            onClick={(e) => handleClick(e, props.githubLink)}
          >
            GitHub
          </button>
          <button
            className="additional-info-button"
            onClick={(e) => handleClick(e, props.urlLink)}
          >
            URL
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className="flex-item"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="card-content">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
      </div>
      {renderAdditionalInfo()}
    </div>
  );
}

export default ResourcesPage;
