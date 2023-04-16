const title = '<i>ThanhThao</i>';

module.exports = {
  ARTICLES_LOCATION: 'content/post',
  TITLE: title,
  SITE_MAP: [
    {
      name: 'Home',
      url: '/',
      location: '',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Posts',
      url: '/post',
    },
  ],

  SOCIALS: [
    {
      name: 'GitHub',
      url: 'http://github.whatisthaodoing.today',
    },
    {
      name: 'LinkedIn',
      url: 'http://linkedin.whatisthaodoing.today',
    },
  ],

  PROJECTS: [
    {
      name: "Porfolio Website",
      description: "A project to create a personal website as a porfolio. Building with Typescript, React and NestJS, Tailwind CSS. Deploying on Vercel platform.",
      thumbnail: "/porfolio/TruongTTThao.JPG",
      github: "https://github.com/acapela000/whatisthaodoing.today",
      url: "https://whatisthaodoing.today/",
    },
    {
      name: "Weather Forecast App Frontend",
      description: "Build the interface of application with NextJS, ReactJS in order to interact with weather forecast API. The app is deployed on Vercel platform.",
      thumbnail: "/porfolio/wf-app-interface.png",
      github: "https://github.com/acapela000/WeatherForecastFrontend",
      url: "https://weather-forecast.whatisthaodoing.today/",
    },
    {
      name: "Weather Forecast API Backend",
      description: "Spring boot application to manage and display weatherforecast. (Note:I deployed on 'Render' with free version so after 15m of inactivity the API will be paused by the platform. Please wait a moment when you access. )",
      thumbnail: "/porfolio/backend-swagger.png",
      github: "https://github.com/acapela000/WeatherForecastAPI",
      url: "https://weather-forecast-api.whatisthaodoing.today/",
    },
    {
      name: "Chrome Extension",
      description: "Collaborate on an open source project about dictionary translation with hotfix about Vietnamese flag by using Typescript.",
      thumbnail: "/porfolio/xtranslate.png",
      github: "https://github.com/ixrock/XTranslate/pull/68",
      url: "https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/related?hl=en",
    }
  ],
};
