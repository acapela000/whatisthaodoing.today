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
      name: "Personal Website",
      description: "A project to create a personal website as a porfolio. Build with Typescript, React and NestJS.",
      thumbnail: "/porfolio/TruongTTThao.JPG",
      github: "https://github.com/acapela000/whatisthaodoing.today",
      url: "https://whatisthaodoing.today/",
    },
    {
      name: "Weather Forecast App Frontend",
      description: "Build the interface of application with NextJS, ReactJS in order to interact with weather forecast API",
      thumbnail: "/porfolio/wf-app-interface.png",
      github: "https://github.com/acapela000/WeatherForecastFrontend",
      url: "https://weather-forecast.whatisthaodoing.today/",
    },
    {
      name: "Weather Forecast API Backend",
      description: "Spring boot application to manage and display weatherforecast",
      thumbnail: "/porfolio/backend-swagger.png",
      github: "https://github.com/acapela000/WeatherForecastAPI",
      url: "https://weather-forecast-api.whatisthaodoing.today/",
    },
    {
      name: "Chrome Extension",
      description: "Collaborate on an open source project about dictionary translation with hotfix.",
      thumbnail: "/porfolio/xtranslate.png",
      github: "https://github.com/ixrock/XTranslate/pull/68",
      url: "https://chrome.google.com/webstore/detail/xtranslate/gfgpkepllngchpmcippidfhmbhlljhoo/related?hl=en",
    }
  ],
};
