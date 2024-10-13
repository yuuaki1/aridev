"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import oye from "@/assets/oye.png"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div>
                <motion.div initial= {{opacity: 0}} animate = {{opacity: 1, transition: {delay: 2, duration: 0.4, ease: "easeIn"}}}>
                    <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                        <Image src={oye} height={600} width={600} className=" grayscale"/>
                    </div>
                </motion.div>

                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#00ff99" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{opacity:0, strokeDasharray: "24 10 0 0"}} animate={{opacity: 1, delay: 1.4, strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], rotate: [120, 360]}} transition={{delay: 0.4, opacity: 1, duration: 20, repeat: Infinity, repeatType: "reverse"}} />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo;