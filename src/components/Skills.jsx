import React from 'react';
import Text from '../helpers/Text';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiEjs,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiGreensock,
  SiBlender,
  SiGoogle,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
} from "react-icons/si";

// You can later replace the fallback spans or add custom SVG imports for full control
const skill = {
  "Languages": [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "GLSL", icon: <span className="text-sm font-bold relative bottom-[2px] rounded">GLSL</span> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> }
  ],
  "Frontend Technologies": [
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "EJS", icon: <SiEjs /> }
  ],
  "Backend Technologies": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "PeerJS", icon: <span className="text-sm font-bold relative bottom-[1px]">P2P</span> }
  ],
  "3D & Animation": [
    { name: "Three.js", icon: <img className='mix-blend-screen bg-blend-exclusion w-4 h-4' src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eYPFwgeZwxd58aXqFwuhMF914MrfSPtqjQ&s"/> },
    { name: "GSAP", icon: <SiGreensock /> },
    { name: "Blender", icon: <SiBlender /> },
    { name: "MediaPipe", icon: <SiGoogle /> }
  ],
  "Version Control & Tools": [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Postman", icon: <SiPostman /> }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className='w-screen px-4 py-8 min-h-screen'>
      <Text text={"Skills"} />

      <div className="grid gap-10 mt-8">
        {Object.entries(skill).map(([category, skills]) => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4 text-purple-400  backdrop-blur-xs  px-2 py-1  z-20 relative">{category}
            <div className='w-full h-[2px] absolute top-1/2 -z-1  bg-white' />
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex group items-center shadow-white/10  gap-2 bg-white/0 text-white backdrop-blur-xs p-2 px-4 rounded-xl shadow-md hover:scale-105 transition-transform"
                >
                  <span className="text-xl group-hover:scale-100 scale-0 hidden group-hover:inline-block transition-all duration-200">{icon}</span>
                  <span className="text-sm font-medium group-hover:ml-2 transition-all">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
