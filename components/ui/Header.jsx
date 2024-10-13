import React from 'react';
import Link from 'next/link'
import { Button } from "./button";
import Nav from './Nav';
import MobileNav from '../MobileNav';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href = "/">
          <h1 className='text-4xl font-semibold hover:text-neutral-200'>
            ari<span className='text-accent hover:text-accent-hover'>.dev</span>
          </h1>
        </Link>
        <div className='hidden xl:flex gap-8'>
          <Nav />
          <Link href = "https://drive.google.com/drive/u/4/folders/1bm66NWgyIOOkQl4pAhFG2U91mLcWzJSx">
            <Button>Download Resume</Button>
          </Link>
        </div>
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header