'use client';
import { Icon } from '@/components/Icon';
import { ProjectList } from '@/components/project/ProjectList';
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  return (
    <>
      {/* parallax */}
      <div className='shadow-inner flex items-center justify-center w-full h-screen bg-cover bg-center bg-fixed'
        style={{ backgroundImage: "url('https://i.gifer.com/4NB4.gif')" }}>
        {/* 'https://i.makeagif.com/media/5-16-2018/WIKVPz.gif' */}
        {/* GOOD 'https://cdn.dribbble.com/users/370759/screenshots/1796042/untitled-1.gif' */}
        {/* 'https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif' */}

        <div className=' text-white font-bold'>
          <TypeAnimation
            sequence={[
              "Hi 👋 I'm Thao",
              1000,
              "Hi 👋 I'm Fullstack Developer",
              1000,
              "Hi 👋 I'm Fresher Engineer",
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
      </div>

      {/* intro */}
      <div className="w-full bg-transparent" id="about">
        <div className="container mx-auto px-4">
          <ProjectList />
          <Icon />
        </div>

        

      </div>
    </>
  )
}
