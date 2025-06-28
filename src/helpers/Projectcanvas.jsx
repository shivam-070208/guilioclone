import React, { useEffect, useRef } from 'react'
import { Showcase } from '../threejssetup/vedioprojectshowcase';
import { motion } from 'motion/react';

const Projectcanvas = () => {
  const canvaref = useRef(null);
  const videoUrls = [
  "/test.mp4"  ,
   "/test.mp4" ,
    "/test.mp4"  ,
   "/test.mp4"      // Another MP4 sample
];

useEffect(()=>{
  if(!(canvaref && canvaref.current)) return
Showcase(canvaref.current)
},[canvaref])
  return (
    <motion.div initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:1.0}} ref={canvaref} className='flex gap-4  w-full h-screen www items-center '>
      {videoUrls.map((e,idx)=>(
        <video src={e} key={idx}  className='w-80 vedio hidden h-80 object-cover' />
      ))}
    </motion.div>
  )
}

export default Projectcanvas
