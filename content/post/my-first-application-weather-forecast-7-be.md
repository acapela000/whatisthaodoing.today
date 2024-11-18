---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.7: Deploying backend on `Heroku` and `Render`."
emoji: ""
date: "2023-03-28"
summary: "After everything seems alright, the frontend display, the backend works well but I'm still struggling about how I get the database about weather forecast. And in this chapter I'll talk about it."
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
    "backend",
]
toc: true
draft: false
thumbnail: "https://wallpapercrafter.com/desktop1/535547-digital-art-minimalism-3D-CGI-bricks-glowing.jpg"
---

## 5.Testing - Deployment

### Deploying backend

After finishing my web app, it's important to test it thoroughly to ensure it works as intended. This includes functional testing, integration testing, and performance testing. Once I almost have my backend code on place, I deploy my web app to a production environment.

As first, I attempted to deploy my application on `Heroku`. 

<img src="/wf-app/heroku-register.png" width="100%"/>

But I got a little bit stuck when I tried on installing it by using `choco` with `cmd` `choco install heroku`. 

<img src="/wf-app/choco-heroku-failed.png" width="100%"/>

Then I regconized that the cmd is not right. I read the docs again and try `choco install heroku-cli` and I made it. Successfully intalled `Heroku`.

[Install Heroku Docs](https://devcenter.heroku.com/articles/heroku-cli)

<img src="/wf-app/choco-heroku-done-4over5.png" width="100%"/>

Then when I tried to build `Docker Images` with `heroku.yml`, I met some bugs and got stuck again.

[Building Docker Images with heroku.yml](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)

<img src="/wf-app/heroku-build-docker-img-err.png" width="100%"/>

<img src="/wf-app/heroku-build-docker-img-bug.png" width="100%"/>

Unbfornately, later than that, Heroku is officially not free anymore from the begining of April so I changed to use `Netlify`.

<img src="/wf-app/netlify-deploy.png" width="100%"/>

After registered and upload the repository from `github`, I was waiting for my first time deploying backend code.

<img src="/wf-app/netlify-dp-waiting-1.png" width="100%"/>

Finally, the deployment process is done and seem like the page is live. I was very excited at this time, can't wait to access into my onw site.

<img src="/wf-app/netlify-dp-waiting-2.png" width="100%"/>

However, when I clicked on the deployed `url`, it turned to `Page not found`

<img src="/wf-app/netlify-dp-pagenotfound.png" width="100%"/>

I tried to follow the instruction from "pagenotfound" "support guide" but it still didn't work. Then I searched on google and found out the truth is:

[Netlify's answer](https://answers.netlify.com/t/how-to-deploy-springboot-app-in-netlify/18252)

<img src="/wf-app/netlify-not-java.png" width="100%"/>

After Heroku, Netlify, I searched for new source as Cloud Foundary. But it seems like complex to deploy then I tried to search for more free platform to deploy `Spring Boot`:

<img src="/wf-app/free-platform-deploy.png" width="100%"/>

and I found one. I felt very happy and excited when I found `render` platform. It has lots of functions and easy to use.

[More about Render](https://render.com/)

<img src="/wf-app/render-deploy.png" width="100%"/>

Oh, but stop for a minute... the journey of deployment is officially start from now.

### deploy with render





Many thank you for reading, and in my next chapter, continously I will share about backend development with ???? :blush:.
