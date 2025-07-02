import { useEffect, useRef, useState } from "react"
import { loadmodel } from "./threejssetup/modelloading"
import Navbar from "./components/Navbar";
import { motion } from "motion/react";
import Home from "./components/Home";
import Project from "./components/Project";
import './App.css'
import Skills from "./components/Skills";
import Experience from "./components/Experience";

function App() {
const canvaref = useRef(null)
const [darkMode, setDarkMode] = useState(false);
useEffect(()=>{
if(!(canvaref &&canvaref.current)) return
  loadmodel({elm:canvaref.current})
},[canvaref])

  return (
    <div className=" ">
       <motion.div animate={{ width:darkMode?'200%':'0%', height:darkMode?'200%':'0%' }} transition={{duration:0.2}} className="div rounded-full bg-black fixed -top-60 -left-60 -z-1" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.canvas animate={{filter:'blur(0px)'}} transition={{duration:2}} className="w-screen  blur-2xl fixed h-screen -z-1" ref={canvaref}></motion.canvas>
     <Home />
    <Project />
    <Skills />
    <Experience />
    </div>
  )
}

export default App
