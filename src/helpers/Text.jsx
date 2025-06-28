import { motion } from 'motion/react'
import React from 'react'

const Text = ({text}) => {
  return (
     <div className="relative mt-20 h-fit overflow-hidden">
                          {" "}
                          <motion.span
                            initial={{ y: 40, rotateZ: -10 }}
                            whileInView={{ y: 0, rotateZ: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[max(50px,7vw)] block text-stroke-white ml-8  uppercase font-serif text-transparent"
                          >
                           {text}
                          </motion.span>
    </div>
  )
}

export default Text
