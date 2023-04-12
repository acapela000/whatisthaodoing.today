---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.3: Configuration of Swagger and Adding MIT License"
slug: "my-1st-application-weather-forecast-chap.3-configuration-of-swagger-and-adding-mit-license"
date: "2023-03-16"
summary: "In the third stage, Swagger was set up for RESTful web services development, while in the fourth stage, the permissive MIT license was added to the project. The Swagger configuration included custom information about the API, such as name, version, author, and license, and the MIT license specified the conditions for use, distribution, and modification of the code without significant legal restrictions."
tags: [
    "projects",
    "weather forecast",
    "My first APP",
    "backend",
]
toc: true
thumbnail: "https://cdn.dribbble.com/users/2073053/screenshots/15220605/media/f07d2d6520f1720fbfcd2eb039daeee9.jpg?compress=1&resize=1600x1200&vertical=top"
---

In [chapter 1](https://whatisthaodoing.today/post/my-1st-application-weather-forecast-chap.1-initializing-a-project/), I talked about my inspiration for developing a weather forecasting web app and the cutting-edge tools I used to build it. [Chapter 2](https://whatisthaodoing.today/post/my-1st-application-weather-forecast-chap.2-installing-dependencies-and-adding-basic-model-controller-repository/) discussed the technical aspects of backend development, including installing dependencies and adding a basic model, controller, and repository. Now, in chapter 3, I will share how I configured Swagger and added an MIT license to the app. These steps helped to ensure the app's functionality and legality, making it ready for deployment. So let's take a closer look at how I achieved these important milestones.

## 3.Backend development

### Stage 3: Configurate Swagger

**[Why we need `Swagger`?]()**

> Swagger helps users build, document, test and consume RESTful web services. It provides a user interface to access our RESTful web services via the web browser.

In order to use `Swagger`, I started to set up the dependency first.

```java
var swaggerVersion = "3.0.0"

repositories {
	// https://mvnrepository.com/artifact/io.springfox/springfox-boot-starter
	implementation "io.springfox:springfox-boot-starter:${swaggerVersion}"
	// https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui
	implementation "io.springfox:springfox-swagger-ui:${swaggerVersion}"
}
```

**Configurate Swagger with the code**

I created class `SwaggerConfiguration` at `main/java...` to set up Swagger.

<img src="/wf-app/swagger-structure.png" width="100%"/>

**Custom Information**

Swagger also provides some default values in its response, which I can customize, such as “Api Documentation”, “Created by Contact Email” and etc.

To change these values, I use the `ApiInfo` with `getInfo()` method — the ApiInfo class that contains custom information about the API:

- Name of the API: `WeatherForecastAPI`
- Description: `This is the API for weather forecast`
- Version of the weather forecast application: `0.0.1`
- Author's name: `Charlie Thao`
- Email: `google@gmail.com`
- [Link of project on Github](https://github.com/acapela000/WeatherForecastAPI)
- MIT License: `MIT` with [link](https://github.com/acapela000/WeatherForecastAPI/blob/master/LICENSE.md)

```java
// https://github.com/acapela000/WeatherForecastAPI/commit/82e648a11596856fa43a65bb41b9e66005ee5a6d

@Configuration
@EnableWebMvc
public class SwaggerConfiguration {
    private ApiInfo getInfo() {
        return new ApiInfo(
                "WeatherForecastAPI",
                "This is the API for weather forecast",
                "0.0.1",
                " ",
                new Contact("Charlie Thao", "https://github.com/acapela000/WeatherForecastAPI", "google@gmail.com"),
                "MIT",
                "https://github.com/acapela000/WeatherForecastAPI/blob/main/LICENSE.md",
                "https://github.com/acapela000/WeatherForecastAPI/blob/master/LICENSE.md",
                Collections.emptyList()
        );
    }
}

```

**Advanced Configuration**

The `Docket`` bean of the application can be configured to give more control over the API documentation generation process.

Using `filter` API for Swagger’s Response:

It is not always desirable to expose the documentation for the entire API. So that I can restrict Swagger’s response by passing parameters to the `apis()` and `paths()` methods of the `Docket` class.

As seen above, `RequestHandlerSelectors` allows using the `any` or none predicates but can also be used to filter the API according to the base package, class annotation, and method annotations.

`PathSelectors` provides additional filtering with predicates, which scan the request paths of our application. We can use `any()`, `none()`, `regex()`, or `ant()`.

<!-- In the example below, we will instruct Swagger to include only controllers from a particular package, with specific paths, using the `ant()` predicate: 

```java
@Bean
public Docket api() {                
    return new Docket(DocumentationType.SWAGGER_2)          
      .select()                                       
      .apis(RequestHandlerSelectors.basePackage("com.baeldung.web.controller"))
      .paths(PathSelectors.ant("/foos/*"))                     
      .build();
}
```

-->


```java
@Bean
    public Docket swaggerAPI() {
        return new Docket(DocumentationType.OAS_30)
                .apiInfo(getInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

```

While setting up Swagger I bump on some error with the `url`, I tried some `url` below and searched on google to find the way to fix it.

- `http://localhost:8080/swagger-ui/index.html#/`
- `http://localhost:8080/swagger-ui/`

[References: Most common errors when setting up Swagger](https://docs.bmc.com/docs/ars2105/troubleshooting-issues-when-using-swagger-as-a-rest-api-client-1002225210.html)


### Stage 4: Add MIT License

**Why need MIT License**

`The MIT license is a permissive free software license that allows users to use, copy, modify, and distribute the software as long as they include the original copyright and license notice. It also disclaims any liability and warranty for the software, which means that the software is provided as-is without any guarantees.

Using the MIT license provides a lot of benefits for developers who want to share their work with the world. For example, it allows for the creation of derivative works, which means that others can modify and improve upon the original software, leading to more innovation and progress.

Additionally, using the MIT license can also help developers to attract more contributors to their projects, as it provides a level of flexibility and openness that many developers value. Finally, using a well-known and widely used license like the MIT license can also help to establish credibility and trust in the developer community, as it demonstrates a commitment to open-source values and principles.`

[More about MIT License](https://opensource.org/license/mit/)

**Find official document on Github**

I did Google search for `MIT License Github`, chose the `documents`

<img src="/wf-app/MIT-license-search.png" width="100%"/> 

and I went to `chooselicense`

<img src="/wf-app/MIT-license-docs.png" width="100%"/>

I continued to click on `MIT license`

<img src="/wf-app/choose-MIT-license.png" width="100%"/>

Finally, I copied the text and put my name on that.

[MIT License Text](https://choosealicense.com/licenses/mit/)

<img src="/wf-app/MIT-license-text.png" width="100%"/>

**Set up the MIT License with the code**

At the program, I created file `LICENSE.md` and pasted the editted text with my name on to that file.

<img src="/wf-app/license-md.png" width="40%"/>

Then I went to `Swagger` to check how MIT License's information displayed. 

<img src="/wf-app/MIT-swagger.png" width="100%"/>

Many thank you for reading, and in my next chapter, continously I will share about backend development with method `getListOfWF` at `MemoryDatabase` in `repository` and `model` of `responseMsg`:blush:.
