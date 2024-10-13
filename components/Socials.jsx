"use client"

import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const social = [
    {icon: <FaGithub />, link: 'https://www.github.com/yuuaki1'},
    {icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/arihant-sharma-47a355254/'},
    {icon: <FaTwitter />, link: 'https://x.com/vroisthebest'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index) => {
            return (
                <Link href = {item.link} key = {index} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials