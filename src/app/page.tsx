'use client';
import { Icon } from '@/components/Icon';
import { ProjectList } from '@/components/project/ProjectList';
import { TypeAnimation } from 'react-type-animation';
import './landing.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      {/* parallax */}
      <div className='shadow-inner flex w-full h-screen bg-cover bg-center bg-fixed'
        style={{ backgroundImage: "url('')" }}>
          {/* https://cdn.dribbble.com/users/370759/screenshots/1796042/untitled-1.gif' */}
        {/* 'https://i.makeagif.com/media/5-16-2018/WIKVPz.gif' */}
        {/* GOOD 'https://i.gifer.com/4NB4.gif' */}
        {/* 'https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif' */}
        <div className=' text-black font-bold right-0 left-50'>
          <TypeAnimation
            sequence={[
              "Hi 🖖🏻 Welcome to my page 🚀",
              1000,
              "I'm Thao 😎",
              1000,
              "I'm Junior Frontend Developer",
              1000,
              () => {
                console.log('Sequence completed');
              },
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '4em', display: '' }}
          />
        </div>
{/* <div className='absolute'>
<img src="/porfolio/Thao-restaurant.png" alt="" className='z-5 w-[300px] fixed left-3 top-28'/>
<img src="/porfolio/Thao-summer.png" alt="" className='z-6 w-[300px] fixed top-96 left-32'/>
<img src="/porfolio/Thao-winter.png" alt="" className='z-7 w-[300px] fixed bottom-0 left-36'/>
<img src="/porfolio/Thao-snowboarding.png" alt="" className='z-8 w-[150px] fixed top-96 left-16'/>
</div> */}
      </div>
      {/* intro */}
      <div className="w-full bg-transparent" id="about">
        <div className="container mx-auto px-4">
          <ProjectList />
          <Icon />
        </div>
      </div>
      {/* bg effect */}
      <div className="absolute w-full">
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <motion.img src="/porfolio/astronaut.gif" alt="astronaut" width="100px"
        className='fixed right-3 bottom-0'
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        whileTap={{ scale: 1.2 }}
      />
    </>
  )
}
