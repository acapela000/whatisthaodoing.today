---
author: "Thao"
title: "NextJS version 14 with turbo - how is the difference? Framer-motion: my new discover."
emoji: ""
date: "2023-11-5"
summary: "After NextJS v14 is released, I try it on and let see how it differs from the previous version. Also surfing through youtube and linkedin frontend's post, I found out a framework called Framer-motion and rightaway I tried a new effect as well, let see how it works."
tags: [
    "projects",
    "nextjs",
    "effect",
    "frontend",
    "framer-motion"
]
toc: true
draft: false
thumbnail: "https://miro.medium.com/v2/resize:fit:1400/1*PW2qTWbr7Hy4Mi6Vz-S9zQ.png"
---
As we know, NextJS 14 just release newest version 14, so what is really difference with the other version before?
Beside that, first time I tried out the Framer-motion framework, that's so awesome!!

## NextJS 14
### Add turbo
Before adding '--turbo', the compiling time is **Ready in 3s**

<img src="/nextjs14-framer-motion/before-turbo.png" width="100%"/>

After I added '--turbo' to the cmd at  'package.json', 

```bash

next dev --turbo

```

the compiling time is **Ready in 822ms**. It's way faster than before :D

<img src="/nextjs14-framer-motion/after-turbo.png" width="100%"/>

## Framer motion - <Drag gesture>
The motion that I see and the one that I tried :D
[Drag gestures](https://www.framer.com/motion/gestures/)

### On mobile

<iframe width="300" height="510" src="https://www.youtube.com/embed/lMVdufdjjgs" title="Framer motion - Drag motion test on mobile" frameborder="70" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### On PC

<iframe width="750" height="360" src="https://www.youtube.com/embed/pIhAJ5TEVdA?si=cmSc-TPti4bRpd9N" title="YouTube video player" frameborder="40" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Try with Gif image on my page
<iframe width="750" height="360" src="https://www.youtube.com/embed/VzBD6AIk5S4?si=aK3uSIUZp-9Gdz_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


Many thank you for reading, and in my next chapter, I may continue sharing my experience with other effects frontend development using Framer motion:blush:.
