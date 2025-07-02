"use client";
import { motion } from "framer-motion";
import Text from "../helpers/Text";


const experiences = [
  {
    role: "3D Artist",
    company: "Astomverse",
    duration: "May 2024 – Aug 2024",
    desc: "Created sci-fi 3D assets and immersive environments as a Blender Artist for metaverse integration.",
  },
  {
    role: "Web Developer",
    company: "Oasis Infobyte",
    duration: "Jan 2024 – Mar 2024",
    desc: "Built interactive UIs and animation-rich components using React and Tailwind.",
  },
  {
    role: "Web Developer",
    company: "Elevate Labs",
    duration: "Oct 2023 – Dec 2023",
    desc: "Engineered high-performance MERN APP with performance optimizations.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 50 },
  }),
};

const Experience = () => {
  return (
    <section id="experience" >
      <Text text={"Experiences"} />
      <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-300">{exp.role}</h3>
            <p className="text-sm text-neutral-300 mb-1">{exp.company}</p>
            <p className="text-xs text-neutral-400 mb-3">{exp.duration}</p>
            <p className="text-sm text-neutral-200 leading-relaxed">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;
