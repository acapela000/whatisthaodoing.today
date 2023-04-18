---
author: "Thao"
title: "My first journey with hotfix of Vietnamese flag on Xtranslation CHAP.1"
slug: "my-first-journey-with-hotfix-of-vietnamese-flag-on-xtranslation-chap.1"
date: "2023-03-13"
summary: "Collaborate on an open source project about dictionary translation with hotfix about Vietnamese flag by using Typescript."
tags: [
    "github",
    "coding",
    "hotfix",
    "My-first-journey-with-hotfix",
]
toc: false
thumbnail: "https://blog.radware.com/wp-content/uploads/2021/06/AdobeStock_164909094-scaled.jpeg"
---

## How - When I found the hotfix
By chance, I attempted to use a browser with translation when I encountered an unknown word. My friend suggested a reliable tool, Xtranslation. Upon use, I noticed that the flag of the Vietnamese language was different from the usual flag displayed. 

<img src="/hotfix-img/translate-flag.png" width="60%"/>

<img src="/hotfix-img/flag-found-zoom.png" width="50%"/>

Upon zooming in, I realized that the flag belonged to an island.

<img src="/hotfix-img/flag-zoom.png" width="40%"/>

I then searched for the image on Google to determine which country or location the flag belonged to.

<img src="/hotfix-img/flag-search.png" width="80%"/>

I learned that the flag belonged to the Virgin Islands in the United States. Consequently, I sought a way to change the flag by searching for the code related to Xtranslate and found out that it was an open-source application.

<img src="/hotfix-img/github-search.png" width="70%"/>

<img src="/hotfix-img/flag-code-search.png" width="50%"/>

```ts
const langIconFile = langToFlagIconMap[locale] ?? locale;
    return require(`flag-icons/flags/4x3/${langIconFile}.svg`);
```

Afterwards, I searched for the library of flag icons.

<img src="/hotfix-img/flag-lib-search.png" width="70%"/>

In the library, when I searched for the prefix `vi` and `viet`, I found these flags.
[Flag Icons](https://flagicons.lipis.dev/)

<img src="/hotfix-img/prefix-search.png" width="50%"/>

<img src="/hotfix-img/flag-prefix-abb.png" width="50%"/>

Continuing my search, I discovered the code related to the flags. Fortunately, the application was built using Typescript, and since I am currently studying it, I was able to understand the code. 

[Link code from line 237](https://github.com/ixrock/XTranslate/blob/4ad4b0927417234ca3aa19b7e04a8a4e6378b512/src/components/select-language/select-language.tsx#L237)

```ts
export function getFlagIcon(locale: string): string | undefined {
  try {
    const langIconFile = langToFlagIconMap[locale] ?? locale;
    return require(`flag-icons/flags/4x3/${langIconFile}.svg`);
  } catch (error) {
    return undefined; // noop
  }
```

Therefore, the string we use to search for a flag, for example, `ce`, serves as the `key` in a map. It will return the corresponding value, in this case, `ph` which refers to the Philippines. The flag of that country will then be displayed. 

[Link code from line 206](https://github.com/ixrock/XTranslate/blob/4ad4b0927417234ca3aa19b7e04a8a4e6378b512/src/components/select-language/select-language.tsx#L206)

```ts
export const langToFlagIconMap: Record<string, string> = {
  "sq": "al", // Albanian
  "hy": "am", // Armenian
  "ce": "ph", // Cebuano (Philippines)
  "bn": "bd", // Bengali (Bangladesh)
  "ny": "mw", // Malawi, Zambia, Mozambique, Zimbabwe
  "cs": "cz", // Czech Republic
  "da": "dk", // Danish
  "en": "gb", // English
  "el": "gr", // Greek
  "ka": "ge", // Georgian
  "ha": "ne", // Hausa (West Africa)
  "haw": "hm", // Hawaiian
  "hi": "in", // Hindi (India)
  "te": "in", // Telugu (India)
  "ur": "pk", // Urdu (Pakistan)
  "ja": "jp", // Japanese
  "ko": "kr", // Korean
  "lo": "la", // Laos
  "uk": "ua", // Ukrainian
  "fa": "ir", // Iran (Persian)
  "ku": "iq", // Iraq, Kurdistan Region
  "ma": "nz", // Maori (New Zealand)
  "sw": "ke", // Swahili (Kenya, Rwanda, Tanzania, Uganda)
  "zh-CN": "cn", // Chinese (Simplified)
  "zh-TW": "tw", // Chinese (Taiwan)
  "yo": "ng", // Yoruba (Nigeria)
  "zu": "za", // Zulu (South Africa)
  "xh": "za", // Xhosa (South Africa)
};
```

In case the country string `key` we are searching for is not included in the list of countries, the `locale` variable will revert to the default value of `locale`. The following code snippet demonstrates this behavior:

```ts
langToFlagIconMap[locale] ?? locale;
```

As the list of countries above does not yet include `vi`, which represents the Vietnamese language in the translations list, the `locale` variable will default to `vi`. However, this conflicts with the flag icon for Virgin Islands, which also uses the `vi` code.

So how to contact the author:hushed:? how to change the flag:anguished:?To resolve this issue, it is necessary to reach out to the author of the code to request an update. In doing so, the flag icon for Vietnam can be added to the list of country codes, ensuring that it is correctly displayed when `vi` is used as the `locale`. 
Many thank you for reading, and in my next chapter, I will share how I tackled this hotfix:blush:.


