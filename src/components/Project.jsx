import React from "react";
import { motion } from "motion/react";
import Projectcanvas from "../helpers/Projectcanvas";
import Text from "../helpers/Text";
import Card from "../helpers/Card";
const Project = () => {
  
const projects = [
  {
    title: 'Papajohns',
    description: 'A modern full stack food selling middleware website with a clean ui and  dashboard design.',
    tech: ['React','Tailwindcss','gsap', 'Node.js', 'Express', 'MongoDB','Rest Api'],
  
    link: 'https://pizzasellingweb.vercel.app/',
    github: 'https://github.com/shivam-070208/pizzasellingweb',
    image: '/assets/projects/Papajohns.png',
  },
  {
    title: 'Meetingo',
    description: 'A modern meeting scheduling app that allows users to create, manage, and join meetings seamlessly.',
    tech: ['Ejs','Socket.io','Peerjs', 'Node.js', 'Express', 'MongoDB','Rest Api'],
  
    link: 'https://meetingo.onrender.com',
    github: 'https://github.com/shivam-070208/meetingo',
    image: '/assets/projects/Meetingo.png',
  },
 {
  title:'Solar System',
  description: 'A 3D interactive solar system model built with Three.js, showcasing planets and their orbits.',
    tech: ['Three.js', 'JavaScript'],
    link: 'https://solarsystem-mauve-theta.vercel.app',
    github: 'https://github.com/shivam-070208/Solarsystem',
    image: '/assets/projects/SolarSystem.png'
 }
  ,{
    title: 'AI Image Generator',
    description: 'Generate unique images using AI. Built with Next.js, OpenAI API, and styled for a modern look.',
    tech: ['Next.js', 'OpenAI', 'Tailwind CSS'],
    link: 'https://dalle-2-0-two.vercel.app',
    github: 'https://github.com/shivam-070208/dalle-2.0',
    image: '/assets/projects/Dalle2.0.png',
  },
  {
    title:'Clothify',
    description: 'An e-commerce platform for clothing with a modern design and user-friendly interface only frontend.',
    tech:['React', 'Tailwind CSS', 'Next.js','Three.js'],
    link:'https://clothify-eight.vercel.app',
    github:'https://github.com/shivam-070208/clothify',
    image: '/assets/projects/Clothify.png',
  },
   {
    title: 'Realtime Chat App',
    description: 'A full-stack chat application with real-time messaging, authentication, and group chat support.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: null,
    github: 'https://github.com/shivam-070208/chatapp',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  }
]
  return (
    <section id="projects" className="min-h-screen w-screen px-2 pb-4">
      <div id="projectinstance" className=" w-screen min-h-screen ">
        <div className="w-full h-screen  md:pl-10 px-2 md:pr-10 pt-20 flex flex-col">
        <Text text={"Project"} />
          <p className="w-full max-w-md text-xl h-fit self-end mt-20  text-[var(--color-primary)]">
            {"I love to build Creative Fullstack web with Emerging Experience."
              .split("")
              .map((item, i) => (
                <span
                  key={i}
                  className="h-fit py-[0.6px]  overflow-hidden inline-block  font-semibold text-[18.5px]"
                >
                  <motion.span
                    initial={{ y: 26 }}
                    whileInView={{ y: 0 }}
                    viewport={{ margin: "-20px" }}
                    transition={{ delay: 0.01 * i }}
                    className="block"
                  >
                    {" "}
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                </span>
              ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, 0, 10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white text-sm sm:text-base tracking-widest self-end underline  uppercase"
          >
            Scroll to View
          </motion.p>
        </div>
      </div>
       <section id="showcase" className="min-h-screen relative w-screen  ">
    <Projectcanvas />
   
   

   
        </section>
          <Text text={"Projects"} />
      <section
  id="allProjects"
  className="max-w-full min-h-screen w-fit mt-10  mx-auto p-4 grid gap-10 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 "
> 
{projects.map((elm, index) => (
  <Card index={index % 3} elm={elm} key={index} />
))}
</section>

    </section>
  );
};

export default Project;
