"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const Contact = () => {
  return (
    <motion.section initial = {{opacity: 0}} animate = {{opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
              <h3 className="text-4xl text-accent">Get in touch</h3>
              <p className="text-white/60">If you have any inquiries, project proposals, or would like to discuss potential collaborations, please don’t hesitate to reach out. I am always open to exploring new opportunities and engaging in meaningful conversations. Simply fill out the form below or send me an email.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Message" />
              </div>
              <Button size = "md" className= "max-w-40 py-3 rounded-full hover:bg-primary hover:text-accent border transition-all duration-300 border-accent hover:border-accent"> Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact