import React, { useEffect, useRef } from 'react'
import { Showcase } from '../threejssetup/vedioprojectshowcase';
import { motion } from 'motion/react';

const Projectcanvas = () => {
  const canvaref = useRef(null);
  const videoUrls = [
  "/test.mp4"  ,
   "/test.mp4" ,
    "/test.mp4"  ,
   "/test.mp4"   
];

useEffect(()=>{
  if(!(canvaref && canvaref.current)) return
Showcase(canvaref.current)
},[canvaref])
  return (
    <div className=''>
        <div className="relative h-fit overflow-hidden">
                  {" "}
                  <motion.span
                    initial={{ y: 40, rotateZ: -10 }}
                    whileInView={{ y: 0, rotateZ: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[max(50px,7vw)] block text-stroke-white ml-8  uppercase font-serif text-transparent"
                  >
                    ShowCase
                  </motion.span>
                </div>
    <div  ref={canvaref} className='flex gap-4  w-screen h-screen www items-center '>
      {videoUrls.map((e,idx)=>(
        <video src={e} key={idx}  className='w-80 vedio hidden h-80 object-cover' />
      ))}
    </div>
    </div>
  )
}

export default Projectcanvas
