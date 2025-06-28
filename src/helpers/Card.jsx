import { motion } from 'motion/react'
import React from 'react'

const Card = ({index,elm}) => {
  return (

  <motion.div initial={{filter:'blur(2px)',opacity:0}} whileInView={{filter:'blur(0px)',opacity:1}} transition={{delay:0.2*index,duration:0.5}} className="  border-1 border-blue-900 relative max-w-sm backdrop-blur-lg overflow-hidden shadow-sm pb-10 transition-transform transform hover:-translate-y-2 hover:shadow-blue-700 ">
   
    <img
      className="w-full h-56 object-cover"
     src={elm&&elm.image}
      alt="Project Image"
    />
    <div className="p-4 space-y-3">
      <h1 className="text-white font-bold text-xl">{elm.title}</h1>
      <p className="text-gray-300 text-sm line-clamp-2">
        {elm.description} 
      </p>

      {/* Tech used section */}
      <div className="flex flex-wrap gap-2 mt-2">
      {elm.tech.map((elm,i)=>(

        <span key={i} className="bg-purple-800/30 text-purple-300 text-xs px-2 py-1 rounded-full">{elm}</span>
      ))}
        
      </div>

      <div className="flex justify-between items-center  absolute bottom-3 left-0 px-7 w-full ">
        <a
          href={elm.link} target='_blank'
          className="text-sm text-purple-400 hover:underline hover:text-purple-300"
        >
          View Demo
        </a>
        <a
          href={elm.github} target='_blank'
          className="text-sm text-purple-400 hover:underline hover:text-purple-300"
        >
          GitHub →
        </a>
      </div>
    </div>
  </motion.div>


  )
}

export default Card
