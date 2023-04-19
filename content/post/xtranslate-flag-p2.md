---
author: "Thao"
title: "My first journey with hotfix of Vietnamese flag on Xtranslation CHAP.2"
slug: "my-first-journey-with-hotfix-of-vietnamese-flag-on-xtranslation-chap.2"
date: "2023-03-22"
summary: "I was continuing to work on the hotfix issue.  After successfully fixing the it, I reached out to the author to request a review of my changes. Let's see what it will lead me."
tags: [
    "github",
    "coding",
    "hotfix",
    "My-first-journey-with-hotfix",
]
toc: false
draft: false
thumbnail: "https://wallpaperforu.com/wp-content/uploads/2021/09/Coding-Wallpapers28-346x230.jpg"
---

In the [previous chapter](https://whatisthaodoing.today/post/my-first-journey-with-hotfix-of-vietnamese-flag-on-xtranslation-chap.1) I discussed how I discovered the hotfix, and in this final chapter, I will describe how I resolved it. 

## Fixing the hotfix

Firstly, I created a directory on my computer named `Xtranslate`. This is where I kept my forked repository.

### Forking repository from the upstream repository

As the project belongs to the author, and to avoid making any changes to the original project, I created a `fork` of the project on GitHub.

[About fork on github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)

<img src="/hotfix-img/github-fork.png" width="90%"/>

After clicking, I created a new `fork`. By default, the repository name and description will be the same as the upstream repo. I kept the name of the `fork` repository the same as the upstream repository - `Xtranslate`. However, I provided a description that explained the content of the hotfix.

<img src="/hotfix-img/create-new-fork.png" width="100%"/>

Next I copied the link of the `fork` repository.

<img src="/hotfix-img/copy-link-github.png" width="60%"/>

and used `Powershell` to clone it to my local directory (where I stored the project).

<img src="/hotfix-img/pwshell-git-clone.png" width="100%"/>

### Adding `vi`: `vn` to dictionary list

Then I used `Visual Studio Code` to open the code.  Fortunately, I was using TypeScript for my own project, the same language used in the upstream project. I made the necessary changes related to the `flag` and the `language dictionary` by adding `"vi": "vn", // Vietnamese` in the `src` and `components` directories.

```ts
// https://github.com/acapela000/XTranslate/blob/master/src/components/select-language/select-language.tsx

export const langToFlagIconMap: Record<string, string> = {
  // Other countries's name...
  "yo": "ng", // Yoruba (Nigeria)
  "zu": "za", // Zulu (South Africa)
  "xh": "za", // Xhosa (South Africa)
  "vi": "vn", // Vietnamese
};

```

### Update version at `manifest.json`

At that moment, I had the understanding that any modification made to the open source code required a version upgrade. To gain more insight into versioning, I referred to this [document on versioning](https://semver.org/). Consequently, I executed a `PATCH` version for a minor bug fix, as advised.

<img src="/hotfix-img/semver-version.png" width="90%"/>

Returning to the codebase, I discovered that the webapp extension was defined in the `manifest.json` file. I accessed this file to upgrade the version.

`Manifest.json` is a configuration file that defines the parameters of an extension. Further information: [manifest.json?](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) (use `ctrl+F` to find `version`).

<img src="/hotfix-img/manifest-version.png" width="70%"/>

```ts
{
  "name": "XTranslate",
  "description": "__MSG_description__",
  "version": "2.76.2",
  "manifest_version": 3,
  "default_locale": "en",
  // ...
}
```
I followed the instructions in the `README` file to check the extension source directory with my `manifest.json`.

[README](https://github.com/acapela000/XTranslate/blob/master/README.md)

<img src="/hotfix-img/readme-run-build.png" width="100%"/>

To execute the build, I ran `npm run build`, but it failed due to a bug shown in the image below.

<img src="/hotfix-img/build-dist-bug.png" width="100%"/>

It seemed that the `rm` command was not present in `Windows`. I deleted the command but still encountered the same error with `-rf`, `./dist`, and `NODE_ENV=production`. 

```ts
{
  // https://github.com/acapela000/XTranslate/blob/master/package.json

"dev": "rm -rf ./dist && webpack --watch",
"build": "rm -rf ./dist && NODE_ENV=production webpack --progress",
"test": "jest"
}
```

I then removed the commands one by one until only `webpack --progress` was left, and it worked. This reminded me of the `gradle clean build` command, which removes everything before building.

<img src="/hotfix-img/webpack-progress.png" width="100%"/>

### Upload package to Chrome Extension

I navigated to the Chrome extension by opening the following link:

<img src="/hotfix-img/chrome-ex-ins-location.png" width="90%"/>

After that, I proceeded to the manage extension option:

<img src="/hotfix-img/manage-extension.png" width="70%"/>

I then changed the default mode to `Developer mode` by selecting it:

<img src="/hotfix-img/developer-mode.png" width="50%"/>

Next, I clicked on `Load unpacked` to access the directory where the hotfix project was stored:

<img src="/hotfix-img/load-unpacked.png" width="80%"/>

This action opened the folder window, and I selected the `dist` folder:

<img src="/hotfix-img/locale-folder.png" width="70%"/>

Before enabling the `Developer mode`, the extension versions were not visible:

<img src="/hotfix-img/bf-dev-mode.png" width="100%"/>

However, upon enabling the `Developer mode`, I could see all the versions of the extensions I had:

<img src="/hotfix-img/af-dev-mode.png" width="100%"/>

After completing all the steps, I observed that the version of the extension had been upgraded from `2.76.2` to `2.76.3`, which was indicated in the left corner of the extension:

<img src="/hotfix-img/version-upgraded.png" width="100%"/>

### Pull request to the author

Finally, I contacted the author through a `pull request` to inform them about the changes made in the hotfix. 

<img src="/hotfix-img/open-pull-request.png" width="60%"/>

After sending the message, I anxiously awaited the author's response. To my delight, the author replied with appreciation for my work and suggested that I localize the strings in the `_locales/vi/messages.json` file. The author also provided guidance on how to do this, which I followed and translated the `messages.json` from `en` to `vi`.

<img src="/hotfix-img/msg-to-author.png" width="100%"/>

[vi/messages.json on github](https://github.com/acapela000/XTranslate/blob/master/_locales/vi/messages.json)

I learned that it was not necessary to update the version with a `PATCH` version as I had initially thought. Therefore, I changed the version in the `manifest.json` file from `2.76.3` to `2.76.2`. I also discovered that the Xtranslate extension had recently been updated to version `2.90.0`.

Overall, contributing to open-source was a rewarding experience, and I aim to continue learning and growing in the wide (and wild🌊 :D🫠) and ever-changing tech world.

<img src="/hotfix-img/unlocked-archievement.png" width="100%"/>


Thank you for taking the time to read my post:blush:. I look forward to discussing other topics with you soon.
 