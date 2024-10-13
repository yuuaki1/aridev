"use client"

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FaClipboard } from "react-icons/fa6";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1">
              Hello, I'm <br /> <span className="text-accent">Arihant Sharma</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">Adaptable web developer with a passion for crafting intuitive digital interfaces and a zeal for continuous upskilling in emerging technologies.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant = "outline" size = "lg" className = "lowercase font-extrabold flex items-center gap-2 rounded-full" onClick = {() => navigator.clipboard.writeText("npx aridev")} >
                <span>npx aridev</span>
                <FaClipboard className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles= "flex gap-6" iconStyles= "h-9 w-9 border-accent rounded-full flex text-accent text-base hover:bg-accent transition-all duration-500 justify-center items-center hover:text-primary" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo /></div>
        </div>
      </div>
    </section>
  );
}
