"use client"

import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import Link from 'next/link'
import { motion } from 'framer-motion'

const project = [
  {
    num: "01",
    title: "LinkUp",
    description: "A real time chat app that allows you to network",
    href: "https://www.github.com/yuuaki1/LinkUp"
  },
  {
    num: "02",
    title: "Fiscord",
    description: "A discord like app",
    href: "https://www.github.com/yuuaki1/Fiscord"
  },
  {
    num: "03",
    title: "Genma",
    description: "A chatbot you can run using local LLMs",
    href: "https://www.github.com/yuuaki1/Genma"
  },
  {
    num: "04",
    title: "Chirp",
    description: "An interactive social media platform",
    href: "https://www.github.com/yuuaki1/Chirp"
  },
]

const Projects = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
        <div className='container mx-auto'>
            <motion.div initial = {{opacity: 0}} animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                {project.map((item, index) => {
                  return (
                    <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                      <div key = {index} className='w-full flex justify-between items-center'>
                        <div key = {index} className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover duration-500'>{item.num}</div>
                        <Link href={item.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45 text-primary font-extrabold group-hover:text-white'>
                        <BsArrowDownRight className='text-3xl'/>
                        </Link>
                      </div>
                      <h2 className='h2 font-bold group-hover:text-accent transition-all duration-500'>{item.title}</h2>
                      <p className='text-white/60'>{item.description}</p>
                      <div className='border-b border-white/20 w-full'></div>
                    </div>
                  )
                })}
            </motion.div>
        </div>
    </section>
  )
}

export default Projects