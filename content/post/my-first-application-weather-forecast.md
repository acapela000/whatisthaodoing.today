---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My first application: `Weather forecast' CHAP."
date: "2023-03-11"
summary: "More content is uploading"
tags: [
    "projects",
    "weather forecast",
    "My first APP",
    "backend",
]
toc: true
draft: true
thumbnail: "https://cdn.dribbble.com/userupload/3907586/file/original-491db6fd55ae4d0c0b7a3d25392ba223.png?compress=1&resize=2048x1536&vertical=center"
---

## 3.Backend development

### Stage 7: Installing `Docker`

### Stage 8: Configurate PostgreSQL

**User**

```java
// https://github.com/acapela000/WeatherForecastAPI/commit/57b18545a405de753f26c1e55e32a7a20626f2c4#diff-66e79c2cdb9217fa84b823cfa3cc4fc49329420dec99f0cdc25899108b9752a6

@JsonSerialize
public class User {

    @JsonProperty
    private boolean isAdmin;
    @JsonProperty
    private String userName;
    @JsonProperty
    private String password;
    @JsonProperty
    private Date dateOfBirth;
    @JsonProperty
    private String email;
    @JsonProperty
    private String phoneNumber;
    @JsonProperty
    private String address;
    private String idNumber;
    private String idAccount;

    private final List<WeatherForecast> weatherForecastList = new ArrayList<>();

    public User() {
    }

    public User(
        boolean isAdmin, String userName, String password, Date dateOfBirth,
        String email, String phoneNumber, String address, String idNumber) {
            boolean isAdmin, String userName, String password, Date dateOfBirth,
            String email, String phoneNumber, String address, String idNumber) {
        this.isAdmin = isAdmin;
        this.userName = userName;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.idNumber = idNumber;
        this.idAccount = idNumber;
    }




    public boolean isAdmin() {
        return isAdmin;
    }
    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
@@ -69,32 +83,32 @@
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getIdNumber() {
        return idNumber;
    public String getIdAccount() {
        return idAccount;
    }

    public void setIdNumber(String idNumber) {
        this.idNumber = idNumber;
    public void setIdAccount(String idAccount) {
        this.idAccount = idAccount;
    }

    public List<WeatherForecast> getWeatherForecastList() {
        return weatherForecastList;
    }
}
}
```

**CONTROLLER**

**Forecast**

```java
// https://github.com/acapela000/WeatherForecastAPI/blob/basic-sql/src/main/java/com/charlieThao/weather_forcast_demo/controller/Forecast.java

@RestController
@RequestMapping("/forecast")
public class Forecast {
private WFDatabase db = new WFMemoryDatabase();

    @RequestMapping (
            value = "/today/{city}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WeatherForecast> getToday(@PathVariable("city") String city) {
        WeatherForecast weatherForecast = db.getWF(city);
        if (weatherForecast == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(weatherForecast);
    }

    @RequestMapping (
            value = "/week",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<WeatherForecast>> getWeek() {
        List<WeatherForecast> wfList = db.getListOfWF("", 7);
        if (wfList.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(wfList);
    }

    @RequestMapping(
            value = "/{city}",
            method = RequestMethod.DELETE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseMsg> deleteWFToday(@PathVariable("city") String city) {
        boolean isDeleted = db.deleteWF(city);
        if (isDeleted) {
            return ResponseEntity.ok(new ResponseMsg("Delete successfully!"));
        }
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(
            value = "/{city}",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ResponseMsg> createWFToday(@PathVariable("city") String city,
                                                     @RequestBody WeatherForecast wf) {
        boolean created = db.createWF(city, wf);
        if (created) {
            return ResponseEntity.ok(new ResponseMsg("Created successfully!"));
        }
        return ResponseEntity.badRequest().build();
    }

    @RequestMapping(
            value = "/{city}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<WeatherForecast> updateWFToday(@PathVariable("city") String city,
                                                         @RequestBody WeatherForecast wf) {
        WeatherForecast weatherForecast = db.updateWF(city, wf);
        if (weatherForecast != null) {
            return ResponseEntity.ok(weatherForecast);
        }
        return ResponseEntity.notFound().build();
    }

}
```

**User**

```java

@RestController
@RequestMapping("/user")
public class UserController {

private UserDatabaseInterface userdb = new UserMemoryDatabase();

@RequestMapping(
        value = "/create",
        method = RequestMethod.POST,
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<ResponseMsg> createUserAcc(@RequestBody User user) {
    String unique = UUID.randomUUID().toString();
    user.setIdAccount(unique);
    boolean created = userdb.creatUser(unique, user);
    if (created) {
        return ResponseEntity.ok(new ResponseMsg("User account is created successfully!"));
    }
    return ResponseEntity.notFound().build();
}

@RequestMapping(
        value = "/delete/{idAccount}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<ResponseMsg> deleteUserAcc(@PathVariable("idAccount") String idAccount) {
    boolean deleted = userdb.deleteUser(idAccount);
    if (deleted) {
        return ResponseEntity.ok(new ResponseMsg("Deleted successfully!"));
    }
    return ResponseEntity.notFound().build();
}

@RequestMapping(
        value = "/update/{idAccount}",
        method = RequestMethod.PUT,
        consumes = MediaType.APPLICATION_JSON_VALUE,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<User> updateUserAcc(@PathVariable String idAccount, @RequestBody User user) {
    User us = userdb.updateUser(idAccount, user);
    if (us != null) {
        return ResponseEntity.ok(us);
    }
    return ResponseEntity.badRequest().build();
}

@RequestMapping(
        value = "/{idAccount}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<User> getUserAcc(@PathVariable("idAccount") String idAccount) {
    User us = userdb.getUser(idAccount);
    if (us != null) {
        return ResponseEntity.ok(us);
    }
    return ResponseEntity.notFound().build();
}

@RequestMapping(
        value = "/",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<List<User>> getAllUserAcc() {
    return ResponseEntity.ok(userdb.getAllUser());
}
}
```

### Stage ?
**User**

At `user` `model`, I used annotation `@GeneratedValue` with `generator` `UUID` . and `@GenericGenerator` the `name` is also `UUID`, `strategy` is `org.hibernate.id.UUIDGenerator` means ???

```java
@GeneratedValue(generator = "UUID")
@GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
```

```java
// https://github.com/acapela000/WeatherForecastAPI/blob/basic-sql/src/main/java/com/charlieThao/weather_forcast_demo/model/User.java

@Entity
@Table(name = "tc_user")
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @Column(nullable = false, unique = true)
    private String userName;//"unique"

    @Column(nullable = false, unique = true)
    private String email;//"unique"

    @Column(nullable = false)
    private String password;//"hashed"

    @ManyToMany//"default to empty list"
//    @Column(nullable = false)
    @JoinTable(
            name = "tc_user_location",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "location_id"))
    private List<Location> locationList = new ArrayList<>();

    @ManyToMany()//"default to Role with name 'guest'"
    @Column(nullable = false)
    @JoinTable(
            name = "tc_user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roleList = new ArrayList<>();


    public User(String s, String nanami, String s1, String s2) {
    }
}
```






`ResponseEntity` is used in Spring MVC as the return value from an @Controller method.

[ResponseEntity Docs](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/ResponseEntity.html)

`@Controller` and `@RequestMapping` annotations to define an HTTP endpoint for managing inventory items

what is the difference between gradle and gradle (short) 

Before using Swagger, I reccommend using `Insomnia` to check for the status of local server.

[Download Insomnia for Windows](https://insomnia.rest/download) 

<img src="/wf-app/health-check-insomnia.png" width="100%"/>

I create an `GET` method and send the url `http://localhost:8080/health-check`. Insomnia return the `200` status, means the api is working.

If it doesn't work, we need to first: check the internet connection, then check ???

**More content is uploading...**

## Frontend development

Temporary layout for desktop's screen.

<img src="/wf-app/desktop-screen-landing-p.png" width="100%"/>

<img src="/wf-app/desktop-screen.png" width="100%"/>

I also tested the screen for the phone in order to make `grid` better between desktop screen and phone's layout.

<img src="/wf-app/phone-screen-test.jpg" width="80%"/>

**Deploy to vercel after adding current location**

I meet the `403 error` when I checked the deployment. The information of `current location` is not displayed.

<img src="/wf-app/vercel-current-location.png" width="100%"/>

I searched for `403 error` and check the `ip` status in local host. Everything is OK. So why? what is happening here?

<img src="/wf-app/what-is-403.png" width="100%"/>

So the `ipinfo` works well, in local host the current location is displayed as well. That means I miss something between the `server` and the `app`. Then I remember that I created an `env` before but I forgot to create an `enviroment variables` in vercel platform :D. Then instantly I went to the page to make it.

<img src="/wf-app/vercel-env.png" width="100%"/>

Then waitingggggg for deployment again.

<img src="/wf-app/vercel-current-location-building.png" width="100%"/>

Then finally, the deployment is successful.

<img src="/wf-app/vercel-current-location-ok.png" width="100%"/>

[Check the app here](https://weather-forecast.whatisthaodoing.today/)

<img src="/wf-app/vercel-current-location-layout.png" width="100%"/>

**More content is uploading...**

## 5.Testing - Deployment
### Deploying frontend

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

**More content is uploading...**

## 6.Maintenance and updates, utilities
Once your web app is live, it's important to monitor its performance, fix any bugs that arise, and add new features as needed. You may also want to consider integrating analytics tools to track user behavior and improve the user experience over time.

Coding tool:
- IntelliJ
- Visual studio code

**More content is uploading...**
