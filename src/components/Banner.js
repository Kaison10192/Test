import React from 'react';
import image from '../assets/avatar.svg';
//import { FaGithub, FaYoutube, FaDribbble} from 'react-icon/fa';
import { TypeAnimation } from 'react-type-animation';
//import { motion } from 'framer-motion';
//import { fadeIn } from '../variants';

const Banner = () => {
  return (
  < section className='section' id='home'>
    <div className='containner mx-auto'>
      <div>
        <div>
          <h1>
            Ben <span>AIDEN</span>
          </h1>
          <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',2000,
              'Designer',2000,
              'Youtuber',2000]}
            speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
          </div>
        </div>
        <p>
          Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra 
          Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra Bra
          Bra Bra Bra Bra Bra Bra
        </p>
        <div>
          <botton className='btn btn-sm text-[25px]'>contact me</botton>
          <a href='#' className='text-gradient btn-link text-[25px]'>
            My Portfolio
          </a>
        </div>
        <div>
          <img src={image} alt='' />
        </div>

      </div>
    </div>
  </section>
  )
};

export default Banner;
