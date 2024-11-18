"use client";
import { Icon } from "@/components/Icon";
import { ProjectList } from "@/components/project/ProjectList";
import { TypeAnimation } from "react-type-animation";
import "./landing.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* parallax */}
      <div
        className="bg-white shadow-inner flex w-full h-screen bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage:
            "url('https://i.makeagif.com/media/5-16-2018/WIKVPz.gif')",
          zIndex: 0,
        }}
      >
        {/* https://cdn.dribbble.com/users/370759/screenshots/1796042/untitled-1.gif' */}
        {/* 'https://i.makeagif.com/media/5-16-2018/WIKVPz.gif' */}
        {/* GOOD 'https://i.gifer.com/4NB4.gif' */}
        {/* 'https://static.wixstatic.com/media/5cfe14_30977ca5f4d04cc2a8977a980baf19a9~mv2.gif' */}
        <div
          className="flex top-50 left-0 w-full h-full text-[#DEAC80] font-bold z-10 items-center justify-center mt-10"
          style={{ zIndex: 10 }}
        >
          {/* Type Animation is a library that allows us to create animations of text */}
          {/* The sequence property is an array of strings and numbers that define the animation */}
          {/* The strings are the text that will be displayed, and the numbers are the delay between each string */}
          {/* The cursor property adds a cursor to the animation */}
          {/* The repeat property sets the number of times the animation will repeat */}
          {/* The style property is an object that defines the CSS styles for the animation */}
          <TypeAnimation
            sequence={[
              "Hi 🖖🏻 Welcome to my page 🚀",
              100,
              "I'm Thao 😎",
              200,
              "I'm Junior Fullstack Developer",
              200,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "6em", fontFamily: "serif" }}
          />
        </div>
      </div>

      {/* <div className="absolute">
          <img
            src="/porfolio/Thao-restaurant.png"
            alt=""
            className="z-5 w-[300px] fixed left-3 top-28"
          />
          <img
            src="/porfolio/Thao-summer.png"
            alt=""
            className="z-6 w-[300px] fixed top-96 left-32"
          />
          <img
            src="/porfolio/Thao-winter.png"
            alt=""
            className="z-7 w-[300px] fixed bottom-0 left-36"
          />
          <img
            src="/porfolio/Thao-snowboarding.png"
            alt=""
            className="z-8 w-[150px] fixed top-96 left-16"
          />
        </div> */}

      {/* intro */}
      <div className="w-2xl mx-auto text-center bg-white" id="about">
        <div className="">
          <ProjectList />
          <Icon />
        </div>
      </div>
      {/* bg effect */}
      <div className="absolute w-full">
        <ul className="circles">
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
      <motion.img
        src="/porfolio/Thao-winter-gif.gif"
        alt="astronaut"
        width="100px"
        className="fixed right-3 bottom-0"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={1}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 2, rotate: -15 }}
      />
    </>
  );
}
