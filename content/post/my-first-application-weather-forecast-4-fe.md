---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.4: Frontend development: Get current location & Convert from country code to country name"
emoji: ""
date: "2023-03-20"
summary: "While the first three chapters focused on backend development, this fourth chapter will shift gears to delve into the world of frontend development."
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
    "frontend",
]
toc: true
draft: false
thumbnail: "/wf-app/wf-thumbnail-c4.png"
---

While the first three chapters focused on backend development, this fourth chapter will shift gears to delve into the world of frontend development about how I attempted to get current location and to convert country code to country name.

## 4.Front-end development

Once I had the backend code in place, I created the user interface for my web app. This involves designing the layout and visual elements for my app, I'm using React on top of `TypeScript` to for frontend to render HTML as well as using `Tailwind` for CSS part. Besides that, I also use a frontend framework like NextJS to simplify the process.

### Get current location

I search on google the way how to get the current location without using the Google Geo-API because I can not get some trial for that. 

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

At that time, I feel OK with the result but before going to bed, I think "why don't I try to find more" to get the `city`, `country`, `state` (region) as I already set up in the backend. Then I search and search, then I found this page.

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

### Convert country code into country name

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


Many thank you for reading my post, and in my next chapter, continously I will share about frontend development when I deploy to Vercel:blush:.
