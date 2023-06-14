// import React from "react";
// import "./home.css";
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


// const Data = () => {
//   return (
//     <div className="home_data">
//       <div className="home_bio">
//       <h1 className="home_title"> Sevda </h1>

//       {/* introduction title/BIO */}
//       <h3 className="home_description">
//         I am a London-based web developer with a strategic mindset and strong soft skills.
//       </h3>
//       </div>
//       {/* Social links */}
//       <div className="home_socials">
//         <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
//           <GitHubIcon className="social_icon" />
//         </a>
//         <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
//           <LinkedInIcon className="social_icon" />
//   </a>
// </div>

//       {/* Skills */}
//       <div className="skills_social">
//         <img src="/images/bootstrap.svg" alt="Bootstrap" className="skills_icon" />
//         <img src="/images/html.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/css.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/react.svg" alt="React" className="skills_icon" />
//         <img src="/images/javascript.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/nodejs.svg" alt="Bootstrap" className="skills_icon" />
//         <img src="/images/jquery.svg" alt="React" className="skills_icon" />
//         <img src="/images/firebase.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/figma.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/typescript.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/github.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/vitejs.svg" alt="JavaScript" className="skills_icon" />
//         <img src="/images/git.svg" alt="JavaScript" className="skills_icon" />

//       </div>

//     </div>
//   );
// };

// export default Data;

import React from "react";
import "./home.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Data = () => {
  return (
    <div className="home_container">
      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">Sevda</h1>
          <h2 className="home_subtitle"> Web Developer
          </h2>
          <h3 className="home_description">
            I am a London-based web developer with a strategic mindset and strong soft skills.
            I am excited to contribute creativity and expertise to a team of 
            like-minded professionals and continue learning and growing in a dynamic environment.
          </h3>
          <div className="home_socials">
            <a href="https://github.com/Helloseva?tab=repositories" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="social_icon" style={{ fontSize: 40 }} />
            </a>
            <a href="https://www.linkedin.com/in/sseva/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="social_icon" style={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
        <div class="skills_social">
          <div class="skills_row">
            <img src="/images/bootstrap.svg" alt="Bootstrap" class="skills_icon" />
            <img src="/images/html.svg" alt="HTML" class="skills_icon" />
            <img src="/images/css.svg" alt="CSS" class="skills_icon" />
            <img src="/images/react.svg" alt="React" class="skills_icon" />
            <img src="/images/javascript.svg" alt="JavaScript" class="skills_icon" />
            <img src="/images/nodejs.svg" alt="Node.js" class="skills_icon" />
          </div>
          <div class="skills_row">
            <img src="/images/jquery.svg" alt="jQuery" class="skills_icon" />
            <img src="/images/firebase.svg" alt="Firebase" class="skills_icon" />
            <img src="/images/figma.svg" alt="Figma" class="skills_icon" />
            <img src="/images/typescript.svg" alt="TypeScript" class="skills_icon" />
            <img src="/images/github.svg" alt="GitHub" class="skills_icon" />
            <img src="/images/vitejs.svg" alt="Vite.js" class="skills_icon" />
            <img src="/images/git.svg" alt="Git" class="skills_icon" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Data;
