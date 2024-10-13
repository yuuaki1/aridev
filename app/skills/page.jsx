"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaRust } from 'react-icons/fa6'
import React from 'react'
import { SiTailwindcss, SiNextdotjs, SiDjango } from 'react-icons/si'
import { motion } from 'framer-motion'

const about = {
  title: "About Me",
  description: "Hey! I'm Arihant Sharma. I'm a fullstack developer highly interested in the field of ML and AI. I'm a sucker for always trying to upskill my code and my projects! I enjoy creating apps using new technologies I come across, and i always look for ways to improve the projects i'm working on.",
}

const skills = {
  title: "Skills",
  description: "I have experience with the following technologies:",
  list: [
    {
      name: "HTML",
      icon: <FaHtml5/>
    },
    {
      name: "CSS",
      icon: <FaCss3/>
    },
    {
      name: "JavaScript",
      icon: <FaJs/>
    },
    {
      name: "React",
      icon: <FaReact/>
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss/>
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs/>
    },
    {
      name: "Python",
      icon: <FaPython/>
    },
    {
      name: "Django",
      icon: <SiDjango/>
    },
    {
      name: "Rust",
      icon: <FaRust/>
    },
  ]
}

const About = () => {
  return (
    <motion.div initial = {{opacity: 0}} animate = {{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn"}}} className='min-h-[60vh] flex items-center justify-center py-12 xl:py-0 '>
      <div className='container mx-auto flex flex-col gap-[30px] '>
        <h3 className='h2'>{skills.title}</h3>
        <p className='text-white/60'>{skills.description}</p>
        <ul className='grid grid-cols-2 text-xl gap-y-3'>
          {skills.list.map((skill, index) => {
            return (
              <li key={index} className='flex items-center gap-2 hover:text-accent group'>
                {skill.icon}
                <p className='group-hover:text-accent-hover'>{skill.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export default About