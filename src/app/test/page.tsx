'use client';
import '../landing.css';
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';

// export const metadata = {
//     title: 'Charlie Thao Portfolio',
// };

export default function Home() {


    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className="parallax" style={{
                backgroundSize: `${100 + (scroll * 0.1)}%`
            }}>

                <div className="overlay"
                    style={{
                        background: `rgba(255, 255, 255, ${scroll * 1.7 / window.innerHeight})`
                    }}></div>

<p className="hero-text">Hello 👋 I'm</p>

                {/* <p className="lp">Hello 👋 I'm</p> */}
                <section className="lp_animation">
                    <div className="lp_first"><div>Thanh Thao</div></div>
                    <div className="lp_second"><div>Fullstack Developer</div></div>
                    <div className="lp_third"><div>Fresher Engineer</div></div>
                </section>


            </section>

            <p className="desc">
            I’m a newbie here and I’m absolutely loving it. My first love is Java and I love how versatile and powerful it is. It’s got so many possibilities. Currently, I’m exploring TypeScript and I’m stoked to see where this journey takes me!

One thing I’m particularly passionate about is security. Lately, I’ve even been dabbling in some hacking challenges, just to see if I can spot any weaknesses in my own code. It’s wild!

Even though IT isn’t my first major, I know it’s going to be my lifelong companion. I mean, how can I not be excited about the ever-changing and evolving world of technology? I’m stoked to be a part of it and can’t wait to see what the future holds.

            </p>

            <TypeAnimation
                sequence={[
                    'One', // Types 'One'
                    1000, // Waits 1s
                    'Two', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Two Three', // Types 'Three' without deleting 'Two'
                    () => {
                        console.log('Sequence completed');
                    },
                ]}
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
            />
        </>
    );



    return (
        <>




            {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-pink-800">
                    Hi, I'm Thao
                </h1>
                <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-blue-600">
                    I’m a newbie here and I’m absolutely loving it. My first love is Java and I love how versatile and powerful it is. It’s got so many possibilities. Currently, I’m exploring TypeScript and I’m stoked to see where this journey takes me!

                    One thing I’m particularly passionate about is security. Lately, I’ve even been dabbling in some hacking challenges, just to see if I can spot any weaknesses in my own code. It’s wild!

                    Even though IT isn’t my first major, I know it’s going to be my lifelong companion. I mean, how can I not be excited about the ever-changing and evolving world of technology? I’m stoked to be a part of it and can’t wait to see what the future holds.
                </h4>
            </div> */}




        </>
    )
}
