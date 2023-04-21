---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.1: Initializing a project"
date: "2023-03-14"
slug: "my-1st-application-weather-forecast-chap.1-initializing-a-project"
summary: "The creation process of this weather forecast application began with initializing a project. This involved creating a Spring Boot application that provided a robust framework for developing a RESTful API. After setting up the project, the next step was to check the status of the API, which confirmed that the application was operational and ready for use. This meticulous and systematic approach to development ensured that the application was functional and responsive, allowing users to obtain up-to-date and accurate weather information at any given time."
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
    "backend",
]
toc: true
thumbnail: "https://media.istockphoto.com/id/1168055583/vector/glowing-neon-snow-with-rain-weather-icon-snowflake-and-rain-drop-symbols-with-cloud-in-neon.jpg?s=612x612&w=0&k=20&c=cJyjoYKqH03AwydjA9oqjmR24clpyNhxhixiQZFDuSQ="
---

## 1. Introduction
**The reason why `weather forecast application` ?**

As a novice in the tech industry, I have recently embarked on my first personal project, which involves developing a web application that provides users with real-time weather forecasts to aid in their day-to-day planning. This initiative was inspired by my personal interest in monitoring weather conditions and preparing accordingly.

To realize this objective, I employed an array of cutting-edge tools and technologies such as Spring Boot for creating a RESTful API in Java, Docker for containerizing my application and its dependencies, and PostgreSQL as my preferred database management system. On the frontend, I utilized NextJs, TypeScript, and JavaScript to develop a dynamic and interactive user interface. I also incorporated Tailwind, Swagger, Insomnia, and other utilities to enhance the application's aesthetics and overall functionality.

Despite being my inaugural project in the tech realm, I am proud of the end result, which is a highly functional and user-friendly weather forecasting application. Through this project, I was able to consolidate my coding abilities and enhance my knowledge of various technologies, ultimately refining my technical expertise.

In conclusion, this essay serves to showcase my coding skills and to demonstrate my knowledge acquired throughout this project. Are you ready to commence the first chapter?

## 2.Initializing a project
### Creating Spring Boot app

I used page [start.spring.io](https://start.spring.io/) and I initialized my app with srpingboot.

<img src="/wf-app/springboot.png" width="100%"/>

All the dependencies I chose from `ADD DEPENDENCIES` will be display on the right of the page. 

<img src="/wf-app/springboot-page.png" width="100%"/>

I used Java programming language so I chose `Gradle - Groovy` for the type of the project. Because 
Gradle is a build automation tool that uses a Groovy-based DSL (Domain-Specific Language) or Kotlin as its build language. It is designed to be highly customizable and supports incremental builds, caching, and parallel execution. Gradle is a good choice for prefering a more flexible build system and wanting to work with a build tool that supports both Groovy and Kotlin. 

*Some brief about the difference between type of projects:*

`Gradle - Groovy`: which uses Gradle as the build tool and Groovy as the primary programming language. Groovy is a dynamic programming language that runs on the Java Virtual Machine (JVM). It is often used for scripting, automation, and testing, and has a syntax similar to Java.

`Gradle - Kotlin`: which uses Gradle as the build tool and Kotlin as the primary programming language. Kotlin is a statically-typed programming language that also runs on the JVM. It is designed to be more concise and expressive than Java, while still maintaining full interoperability with Java code.

`Maven`: is also a popular build tool for Java-based projects. Using Maven as the build tool, which is an older build automation tool compared to Gradle. Maven is XML-based project configuration file to manage dependencies, build steps, and other project-related settings, following a "convention over configuration" approach. This means that it has a set of pre-defined conventions and best practices to simplify the build process.

<img src="/wf-app/springboot-project-types.png" width="100%"/>

There are lots of dependencies we can choose from the list. But at the time initializing the app, I only need `Spring wed` dependency so I chose it.

<img src="/wf-app/springboot-dependency.png" width="100%"/>

I clicked on generate button and then I have an app written in Java. The good point about this site is that it automatically creates a folder in the place we want to store all the information/data base about the app.

<img src="/wf-app/springboot-generate.png" width="100%"/>

I opened the project's folder in IntelliJ and went to `build.gradle` to check the dependency I chose and it will be:

```java
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter-web'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

### Check API's status

What is API health check? 

> It is a RESTful API endpoint that checks the API itself and all critical dependencies. API health check endpoint returns the check result as the response. Software, QA, and Dev-Ops teams use this endpoint to monitor the health of an API using a monitoring tool like Testfully.

Following that, at first, I created `controller` call `Health-check`. I use this class to check the status of the `API`.

```java
@RestController
public class HealthCheck {

    @RequestMapping(value = "/health-check", method = RequestMethod.GET)
    public String checkSttOfAPI() {
        return "OK";
    }
}
```

If I run the url `localhost:8080` with the `endpoint` is the value `/health-check` I can check the api is working or not. If it works, it will return the message `OK`. 

<img src="/wf-app/health-check-OK.png" width="100%"/>

Or else, it returns `Can't get the method`

<img src="/wf-app/cannot-health-check.png" width="100%"/>

[More about health-check](https://testfully.io/blog/api-health-check-monitoring/)
[Reference: Health-check with Cloud Foundary](https://docs.cloudfoundry.org/devguide/deploy-apps/healthchecks.html)

Many thank you for reading, and in my next chapter, I will share about backend development with installing `dependencies`:blush:.
