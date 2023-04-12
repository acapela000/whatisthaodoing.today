---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.2: Installing dependencies and Adding basic model, controller, repository"
date: "2023-03-14"
summary: "To develop the weather forecast application's backend, dependencies were installed, including essential libraries and frameworks. The fundamental components, such as the WeatherForecast model, controller, and database repository, were then created, with a MemoryDatabase used for optimal performance. The backend was efficiently configured and operational."
tags: [
    "projects",
    "weather forecast",
    "My first APP",
    "backend",
]
toc: true
thumbnail: "https://cdn.dribbble.com/users/1503026/screenshots/15321987/weather_app_neumorphism_4x.png"
---

If you haven't read it yet, in the [previous chapter](https://whatisthaodoing.today/post/my-1st-application-weather-forecast-chap.1-initializing-a-project/), I shared my inspiration for developing a weather forecasting web app and the cutting-edge tools I used to build it. Now, in chapter 2, I will talk about the technical aspects of backend development. Specifically, I will share my experience installing dependencies and adding a basic model, controller, and repository to lay the foundation for the app's functionality. So let's dive into the details of how I brought my vision to life.

## 3.Backend development

After initialize the app successfully, I started to write the server-side code that powers my web app. Here at the `backend` I'll choose a database to store my data, and write code to handle user authentication, server-side rendering, and any other functionality required by my app. 

### Stage 1: Installing dependencies

In order to use annotation: `@JsonSerialize` and `@JsonDeserialize`, I installed the `jackson` dependency from [maven repository](https://mvnrepository.com/).

<img src="/wf-app/jackson-databind.png" width="100%"/>

I chose the latest version `jackson '2.14.2'`

<img src="/wf-app/jackson-version.png" width="100%"/> 

After downloaded with `Gradle (short)`([why gradle short?]()), once again I went to check the dependency at `build.gradle`.

<img src="/wf-app/jackson-download.png" width="100%"/> 

In order to manage and easier to update the versions of any dependencies, I made a variable `jacksonVersion` for each of the dependency and pass the parameter `${jacksonVersion}`.

```java
var jacksonVersion = "2.14.2"
var swaggerVersion = "3.0.0"
var lombokVersion = "1.18.26"
var postgreSQLVersion = "42.5.4"
```

So that when needed to update the version, I just need to update the variable. It helps me save more time to look for where the dependency locate:smirk: among lots of other dependencies:fearful::sweat: like below for example.

[My github's link of dependencies](https://github.com/acapela000/WeatherForecastAPI/blob/basic-sql/build.gradle)

```java
dependencies {

	implementation 'org.springframework.boot:spring-boot-starter-web'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'

	// https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind
	//to serialize and deserialize json
	implementation "com.fasterxml.jackson.core:jackson-databind:${jacksonVersion}"

	// https://mvnrepository.com/artifact/io.springfox/springfox-boot-starter
	implementation "io.springfox:springfox-boot-starter:${swaggerVersion}"
	// https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui
	implementation "io.springfox:springfox-swagger-ui:${swaggerVersion}"

 	//	implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'

	// https://mvnrepository.com/artifact/org.projectlombok/lombok
	compileOnly "org.projectlombok:lombok:${lombokVersion}"
	annotationProcessor "org.projectlombok:lombok:${lombokVersion}"

	//to connect to database
	// https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa
	implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
	// https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-rest
	implementation 'org.springframework.boot:spring-boot-starter-data-rest'
	// https://mvnrepository.com/artifact/org.postgresql/postgresql
	implementation "org.postgresql:postgresql:${postgreSQLVersion}"
}
```

### Stage 2: Basic model, controller, repository
- Create `model`: `WeatherForecast`
- Create `controller`: `GetForecast`
- Create `repository`: `Database` and `Memorydatabase`. Why do I need to create the two of these classes? (Check at `repository` part)

<img src="/wf-app/structure-1.png" width="50%"/> 
 

**MODEL**

**WeatherForecast**

I made `model` called `WeatherForecast` with attributes: `temperature`, `humidity`, `precipitation`, `condition`, `city`, `date`. And following the rule of Java, I created `constructor` with `getter` and `setter`. I'm using annotation `JsonSerialize` and `JsonProperty`.

- `JsonSerialize`: to convert an object to stream that we can send over the network or save it as file or store in database for later usage (from Java object into Json format).
- `JsonDeserialize`:  to reconstruct an object stream from the serialized form to actual Java object(from Json format into Java object).
- `JsonProperty`: be used to map property names with Json keys during serialization and deserialization.

```java
// https://github.com/acapela000/WeatherForecastAPI/blob/f7e5eeb8accad05c2a6df6d237fbf452031c467a/src/main/java/com/charlieThao/weather_forcast_demo/model/WeatherForecast.java

@JsonSerialize
public class WeatherForecast {

    @JsonProperty
    private double temperature;
    @JsonProperty
    private double humidity;
    @JsonProperty
    private boolean precipitation;
    @JsonProperty
    private String condition;
    @JsonProperty
    private String city;
    @JsonProperty
    private Timestamp date;

    public WeatherForecast() {
    }

    public WeatherForecast(double temperature, double humidity, boolean precipitation, String condition, String city) {
        this(temperature, humidity, precipitation, condition, city, new Timestamp(new Date().getTime()));
    }

    public WeatherForecast(double temperature, double humidity, boolean precipitation, String condition, String city, Timestamp date) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.precipitation = precipitation;
        this.condition = condition;
        this.city = city;
        this.date = date;
    }

    // getter & setter
}

```

Here, in the second `constructor` I use `new Timestamp(new Date().getTime())` to get the current date and time.

```java
public WeatherForecast(double temperature, double humidity, boolean precipitation, String condition, String city) {
        this(temperature, humidity, precipitation, condition, city, new Timestamp(new Date().getTime()));
    }

```

And in the third constructor I pass all the attributes and set up the value for each attributes:

```java
public WeatherForecast(double temperature, double humidity, boolean precipitation, String condition, String city, Timestamp date) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.precipitation = precipitation;
        this.condition = condition;
        this.city = city;
        this.date = date;
    }

```

**CONTROLLER**

I created `GetForecast` class using annotation `@RestController` to specify this is `controller` and using `RequestMapping` to specify the `endpoint` by `/forecast`. 

```java
@RestController
@RequestMapping("/forecast")
public class GetForecast { 
    // full code 
    // https://github.com/acapela000/WeatherForecastAPI/blob/f7e5eeb8accad05c2a6df6d237fbf452031c467a/src/main/java/com/charlieThao/weather_forcast_demo/controller/GetForecast.java
}
```

Because class `MemoryDatabase` implement from interface `Database` so I created a new object of `MemoryDatabase` to connect with the database:

```java
Database db = new MemoryDatabase();

```

Continously, using annotation `@RequestMapping` to specify the `endpoint` by `/today/{city}` with the method is `GET` and type of format is `JSON` through `produces`. The `url` at this time will be `http://localhost:3000/forcast/today/{city}`.

- `@RequestMapping`: for mapping web requests onto methods in request-handling classes with flexible method signatures.
- `produces`: Narrows the primary mapping by media types that can be produced by the mapped handler.
- `value`: The primary mapping expressed by this annotation.

[More about Annotation Interface RequestMapping](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html)

```java
@RequestMapping (
            value = "/today/{city}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )

```

As you can see in the class, I'm using `getToday` in order to get the weather forecast on that day. By passing the variable `city` to the endpoint. If the program can not find any `weatherForecast` on that day, means that it's `null` then the program will return `not found` through function `notFound()`. Else, it returns that `weatherForecast` through function `ok()`.

- `ResponseEntity`: representing the whole HTTP response: status code, headers, and body. As a result, we can use it to fully configure the HTTP response.
- `notFound()`: Create a builder with a NOT_FOUND status.
- `ok(body)`: A shortcut for creating a ResponseEntity with the given body and the status set to OK.

[More about ResponseEntity](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/ResponseEntity.html)

```java
public ResponseEntity<WeatherForecast> getToday(@PathVariable("city") String city) {
        WeatherForecast weatherForecast = db.getWF(city);
        if (weatherForecast == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(weatherForecast);
    }

```

I'm using annotation `@RequestMapping` to specify the `endpoint` by `/week/{city}` with the method is `GET` and type of format is `JSON` through `produces`. The `url` at this time will be `http://localhost:3000/forcast/week/{city}`.

```java
@RequestMapping (
            value = "/week/{city}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)

```

And then, I created a list of `forecast` by using  `ResponseEntity<List<WeatherForecast>>` for a `week` with function `getWeek`. With `@PathVariable`, I passed the varaiable `city` to the `url`. The method `getWeek` will return `null` when there is no weather forecast in a day being found.

```java
    public ResponseEntity<List<WeatherForecast>> getWeek(@PathVariable("city") String city) {
        return null;
    }

```

**REPOSITORY**

Why do I need to create the two of these classes? Because at first I focused on `model` and `controller`. The `controller` will get the information from the database and in order to check that process is working or not, I need to created the mock-data in `MemoryDatabase`.

**Database**

In order to let the other class implement the method, I created the interface `Database` with 4 abstract methods: `createWF`, `updateWF`, `getWF`, `deleteWF` (WF means Weather Forecast) and pass needed variable for each of it. 

```java
// https://github.com/acapela000/WeatherForecastAPI/blob/f7e5eeb8accad05c2a6df6d237fbf452031c467a/src/main/java/com/charlieThao/weather_forcast_demo/repository/Database.java

public interface Database {

    public boolean createWF(String city, WeatherForecast weatherForecast);

    public WeatherForecast updateWF(String city, WeatherForecast wf);

    public WeatherForecast getWF(String city);

    public boolean deleteWF(String city);
}

```

**MemoryDatabase**

I created some mock-data by using `hashmap` with the `key` is a `string` and the `value` is a `weather forecast`.

```java
public HashMap<String, WeatherForecast> weatherForecastList = new HashMap<String, WeatherForecast>() {
        {
            put("New York", new WeatherForecast(26.0, 25.0, false, "cloudy", "New York"));
            put("Melbourn", new WeatherForecast(29.0, 20.0, true, "snowy", "Melbourn"));
        }
    };

```

The `MemoryDatabase` implement the `Database` so that it inherit all the method. I use annotation `@Override` to rewrite those methods as well as implement in details. The method `createWF` will return a `boolean` value `true` or `false`. If in the list `weatherForecastList` doesn't contain the `key` `city` that the we wanna create, it will put that `city` in the list and inform the user `true` or else `false`. For the `getWF` to display the list `weatherForecastList` by using function `get()` with the parameter `city`.

```java
public class MemoryDatabase implements Database {

    @Override
    public boolean createWF(String city, WeatherForecast wf) {
       if (!weatherForecastList.containsKey(city)) {
           weatherForecastList.put(city, wf);
           return true;
       }
        return false;
    }


    @Override
    public WeatherForecast getWF(String city) {
        return weatherForecastList.get(city);
    }

    // update and delete method
    // https://github.com/acapela000/WeatherForecastAPI/blob/f7e5eeb8accad05c2a6df6d237fbf452031c467a/src/main/java/com/charlieThao/weather_forcast_demo/repository/MemoryDatabase.java
}

```

Many thank you for reading, and in my next chapter, I will share about backend development with configurating `Swagger` and adding `MIT license`:blush:.
