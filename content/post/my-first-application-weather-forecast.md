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

## 4.Front-end development

Once I alomost have the back-end code in place, I created the user interface for my web app. This involves designing the layout and visual elements for my app, I'm using `TypeScript` to code fore frontend and render HTML as well as using `Tailwind` for css part. Besides that, I also use a front-end framework like NextJs to simplify the process.

Temporary layout for desktop's screen.

<img src="/wf-app/desktop-screen-landing-p.png" width="100%"/>

<img src="/wf-app/desktop-screen.png" width="100%"/>

I also tested the screen for the phone in order to make `grid` better between desktop screen and phone's layout.

<img src="/wf-app/phone-screen-test.jpg" width="80%"/>
**Get current location**

I search on google the way how to get the current location without using the Google Geo-API because it's not free. 

<img src="/wf-app/gg-geoapi.png" width="100%"/>

I found the page `freecodecamp` and I follow their instruction. But I can only get `latitude` and `longitude`.

- [`freecodecamp`](https://www.freecodecamp.org/news/how-to-get-user-location-with-javascript-geolocation-api/)

Then I attempted to search more about the way how to get the country, city, name, etc I found the page from Medium. I followed the instruction but I set up the attribute with `ip` and `country`. Because I read the [Geo-Location Databse](https://geolocation-db.com/json/) return the value `"country_code"`, `"country_name"`.

- [`Medium: How to get user IP address in React JS`](https://medium.com/how-to-react/how-to-get-user-ip-address-in-react-js-73eb295720d0)

```ts
// https://github.com/acapela000/WeatherForecastFrontend/commit/e6af930e7afc9201152fa70f9eb88a8132a7dfbb

interface GeoIP {
  ip: string;
  country: string;
}

```

Then I got it, I got the current `country` and `ip`.

<img src="/wf-app/country-ip.png" width="80%"/>

At that time, I feel OK with the result but before come to bed, I think "why don't I try to find more" to get the `city`, `country`, `state` (region) as I already set up in the backend. Then I search and search, then I found this page.

[Detect Location](https://blog.logrocket.com/detect-location-and-local-timezone-of-users-in-javascript-3d9523c011b9/)

Inside this page, I `meet` the one that I pretty like it [IP Info](ipinfo.io). Use it with `json` format and boooom I have it. I feel so happy when I found it.

<img src="/wf-app/country-state-city.png" width="80%"/>

Last step I need to do is to reset the attributes.

```js
// https://github.com/acapela000/WeatherForecastFrontend/commit/b865ff735d3061de003e1f71510e15d23b46a335

interface GeoIP {
    country: string;
    city: string;
    state: string
  }

  // code...

  .then((json) => {
        const currentGeoIP: GeoIP = {
            country: json.country, 
            city: json.city, 
            state: json.region}
        setGeoIP(currentGeoIP)
        return currentGeoIP;
      })

```

I thought that it will be displayed on the app but nooo it's empty and I know I may meet some error. I inspected the page, check what is happening here?!!

<img src="/wf-app/ipinfo-429.png" width="80%"/>

There it is! 429 error!! But what type of error it is :D ?

<img src="/wf-app/what-is-429.png" width="80%"/>

From the error's definition I know that some how the ip is not working well with the set up code. I check more on the inspect

<img src="/wf-app/429-error.png" width="80%"/>

<img src="/wf-app/inspect-network.png" width="80%"/>

then at `Network` \ `Preview`, I found this message: "You've hit the daily limit for the unauthenticated API. Create an API access token by signing up to get 50k req/month.". 

<img src="/wf-app/inspect-network-message.png" width="80%"/>

It's funny that I found out the whole process I work with `ipinfo.io` but I haven't sing-in :D. I immediately went to the page and sing-in and get the token.

<img src="/wf-app/ipinfo-token.png" width="80%"/>

Due to security, I created an `env` call `LOCATION_TOKEN` and went to `GetCurrentLocation()` to change the `url` of `fetch()`.

```ts
// https://github.com/acapela000/WeatherForecastFrontend/commit/b865ff735d3061de003e1f71510e15d23b46a335

fetch(`https://ipinfo.io/json?token=${process.env.LOCATION_TOKEN}`)

```

Then after the fixing error process, finnaly I got it. The status is `200` and the current location is displayed as well: `country`: `JP`, `state`: `Kanagawa`, `city`: `Yokohama`.

<img src="/wf-app/add-token.png" width="80%"/>

**Convert country code into country name**

Because I wanna get current location with `city`, `country`, `state` so I use `ipinfo.io/json`. But the provided country is in `country code` then I attempted to convert it to `country name`.

<img src="/wf-app/ip-info.png" width="80%"/>

I search for the list of country code to country name and intended to use it but later than that I regconized it's just a list, not a library so I can't use it.

- `https://www.iban.com/country-codes`
- `https://www.nationsonline.org/oneworld/country_code_list.htm`

<img src="/wf-app/country-code-name-libsearch.png" width="80%"/>

Then I remember about the post I wrote about the open source code from Xtranlation ([Reach the post here](https://whatisthaodoing.today/post/my-first-journey-with-hotfix-of-vietnamese-flag-on-xtranslation-chap.1/)), some resemble to the one that I wanna do. Then I started to create a list of country code to country name.

[Thank to the country code<=>name's source](https://gist.github.com/themeteorchef/dcffd74ca3ab45277c81#file-javascript-iso-country-code-to-country-name-conversion)

```ts
// https://github.com/acapela000/WeatherForecastFrontend/blob/main/src/lib/location/GetCountryName.tsx

const alpha2CountryCodeList: Record<string, string> = {
    // list of country code to country name
}

```

Then I convert it. Here I set up the default value for the variable `countryCode`. If any `country code` is excluded from the list, the defalut value will be a string of `alpha-2` of `country code` by `[countryCode] ?? countryCode`.

```ts
export function GetCountryName(countryCode: string): string {
    return alpha2CountryCodeList[countryCode] ?? countryCode;
}

```

Then I went to `GetCurrentLocation` to change the variable from `country: json.country` into this:

```ts
// https://github.com/acapela000/WeatherForecastFrontend/blob/main/src/lib/location/GetCurrentLocation.tsx

const currentGeoIP: GeoIP = {
          country: GetCountryName(json.country),
          city: json.city,
          state: json.region
        }

```

And here is the result:

<img src="/wf-app/convert-result.png" width="100%"/>

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
