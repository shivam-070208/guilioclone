import { useEffect, useRef, useState } from "react"
import { loadmodel } from "./threejssetup/modelloading"
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Home from "./components/Home";
import Project from "./components/Project";
import './App.css'
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Loader from "./helpers/Loader";
import { animate } from "motion";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/locomotive-scroll.css'

function App() {
const canvaref = useRef(null)
const [modeloading,setmodeloading]=useState(true);

const [darkMode, setDarkMode] = useState(false);
const scrollcontainer = useRef()
useEffect(()=>{
  if(!scrollcontainer.current) return;
const loco=new LocomotiveScroll({
  lenisOptions:{
    wrapper:scrollcontainer.current,
    smoothWheel:true,
    infinite:true
    
  }
})
},[scrollcontainer])
useEffect(()=>{
if(!(canvaref &&canvaref.current)) return
  loadmodel({elm:canvaref.current,loading:setmodeloading})
},[canvaref])

  return (
    <div ref={scrollcontainer} className=" " data-scroll-container >
   
       <motion.div animate={{ width:darkMode?'200%':'0%', height:darkMode?'200%':'0%' }} transition={{duration:0.2}} className="div rounded-full bg-black fixed -top-60 -left-60 -z-1" />
      <Navbar  darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.canvas animate={{filter:animate&&'blur(0.1px)'}} transition={{duration:4}} className="w-screen  blur-2xl fixed h-screen -z-1" ref={canvaref}></motion.canvas>
     <Home />
    <Project />
    <Skills />
    <Experience />
       {modeloading&&<Loader />}
    </div>
  )
}

export default App
