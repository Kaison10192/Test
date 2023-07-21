import React from 'react';
//import icon
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

// link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full 
      max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50'>
          <div className='flex items-center justify-center'>
          <Link 
            to='home'
            activeClass='active'
            smooth={true}
            spy={true} 
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          </div>

          <div className='flex items-center justify-center'>
          <Link 
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          </div>

          <div className='flex items-center justify-center'>
          <Link 
            to='service'
            activeClass='active'
            smooth={true}
            spy={true}c
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          </div>

          <div className='flex items-center justify-center'>
          <Link 
            to='work'
            activeClass='active'
            smooth={true}
            spy={true} 
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
          </div>

          <div className='flex items-center justify-center'>
          <Link 
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}c
            className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquareText />
          </Link>
          </div>
          </div>
      </div>
    </nav> 
  )
};

export default Nav;
