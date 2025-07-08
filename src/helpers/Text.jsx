import { motion } from 'motion/react'
import React from 'react'

const Text = ({text}) => {
  return (
     <div className="relative mt-20 h-fit overflow-hidden">
                       
                          <motion.span
                            initial={{ y: 40, rotateZ: -10 }}
                            whileInView={{ y: 0, rotateZ: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          
                            className="text-[max(36px,7vw)] block text-stroke-white md:ml-8 ml-1   uppercase font-serif text-transparent"
                          >
                           {text.split('').map((t,i)=>(
                            <span key={i} className='inline-block'><span data-scroll data-scroll-speed = {`${-0.01*i}`} className='block'>{t}</span></span>
                           ))}
                          </motion.span>
    </div>
  )
}

export default Text
