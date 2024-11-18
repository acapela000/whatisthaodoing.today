---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake: :leaves: My 1st application 'Weather forecast' CHAP.6: Deployment on Vercel - Incredible platform."
emoji: ""
date: "2023-03-30"
summary: "????"
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
    "frontend",
]
toc: true
draft: false
thumbnail: "https://www.datocms-assets.com/75941/1667506422-technology-vercel-dark-02-cms-view-2.png?fm=webp"
---

In the [previous chapter](https://whatisthaodoing.today/post/my-first-application-weather-forecast-4-fe), after prepare everything in advanced, I deployed to Vercel. Why Vercel platform? Because I'm using framework NextJS and Vercel is a platform support pretty good for NextJS.

## Frontend development

Because I'm using `NextJS` so I use `Vercel` platform which support for NextJS application.

### First try: Add health-check

At first, 


### Second try: Remove health-check

### Third try: Add port & Remove health-check

### Fourth try: Add port & Add health-check


### Deploy to vercel after adding current location

I meet the `403 error` when I checked the deployment. The information of `current location` is not displayed.

<img src="/wf-app/vercel-current-location.png" width="100%"/>

I searched for `403 error` and check the `ip` status in local host. Everything is OK. So why? What is happening here?

<img src="/wf-app/what-is-403.png" width="100%"/>

So the `ipinfo` works well, in local host the current location is displayed as well. That means I miss something between the `server` and the `app`. Then I remember that I created an `env` before but I forgot to create an `enviroment variables` in vercel platform :D. Then instantly I went to the page to make it.

<img src="/wf-app/vercel-env.png" width="100%"/>

Then waitingggggg for deployment again.

<img src="/wf-app/vercel-current-location-building.png" width="100%"/>

Then finally, the deployment is successful.

<img src="/wf-app/vercel-current-location-ok.png" width="100%"/>

[Check the app here](https://weather-forecast.whatisthaodoing.today/)

<img src="/wf-app/vercel-current-location-layout.png" width="100%"/>



Many thank you for reading, and in my next chapter, continously I will share about backend development with ???? :blush:.
