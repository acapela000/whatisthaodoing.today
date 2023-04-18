---
author: "Thao"
title: "My first hacking challenge CHAP.2: SQL Injection - URL Injection"
slug: "my-first-hacking-challenge-sql-injection-chap.2"
date: "2023-03-14"
summary: "In the second task, participants will work with an input box string, while the third task focuses on URL Injection. These challenges are designed to test the knowledge and problem-solving abilities in various cybersecurity scenarios. By completing these challenges, participants can gain valuable experience and insights into how to identify and mitigate security risks in real-world situations."
tags: [
    "sql",
    "hacking",
    "My-first-hacking-challenge",
]
toc: false
thumbnail: "https://geekflare.com/wp-content/uploads/2020/02/Code-injection-e1580817731194.jpg"
---

Welcome back to this post as I continue my exploration of the SQL Injection challenge on TryHackMe. In this second chapter, I will delve deeper into the technical aspects of the challenge and explore the intricacies of input box strings. With this challenge, I may be able to refine my skills in identifying and exploiting SQL vulnerabilities, and gain a better understanding of how hackers can use SQL Injection attacks to compromise systems. This chapter promises to be an exciting and informative continuation of my exploration of the world of cybersecurity challenges.

## Second chap - second task
1. Environment Setup.

To begin, let's discuss the first task, which involves setting up the environment. If you haven't already read so, please refer to the post in the previous chapter with the link below.

[Check at chap 1](https://whatisthaodoing.today/post/my-first-hacking-challenge-sql-injection-chap.1/)

 As I clicked on the "Go to challenge" button, I was filled with excitement and anticipation for what was to come.

<img src="/sql-injection-img/p2/Challenge-room-all-task-2.png" width="100%"/>

As on the previous task, the same testing, without reading the guidance from tryhackme first, I attempted to input `admin` for the `profileID` and `123` for the `password`. However, I was rejected because the account did not exist. 

<img src="/sql-injection-img/p2/ts2-testinput-1.png" width="100%"/>

After examining the query result, I noticed that the `profileID` and `password` were both strings. Therefore, I attempted the injection **`1' or '1'='1'-- -`** or can be **`1' or 1=1-- -`**. Here, `'1'='1'` or `1=1` is the same. Because the most inportant part is the `'` after the first `1` number in order to finish the string in the query `profileID = '...'`

The result of inputed query:

```sql
SELECT uid, name, profileID, salary, passportNr, email, nickName, password FROM usertable WHERE profileID = '1' or '1'='1'-- -' AND password = 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
```

This injection **`1' or '1'='1'-- -`** made the `profileID` valid and disable the `password`. It means I can put **`1' or '1'='1'-- -`** in the `profileID` and anything in the `password` field, unless it's empty.

<img src="/sql-injection-img/p2/ts2-disable-pass.png" width="100%"/>

The injection **`1' or '1'='1'-- -`** is a string version of **`1 or 1=1-- -`**, which I learned in the previous chapter. Using this injection allowed me to bypass the security measures and gain access to the system. Woo-hoo:grin:!!!
- - - - Boom:collision:!!! I got in:sparkles:!!!

<img src="/sql-injection-img/p2/ts2-second-flag.png" width="100%"/>

It's not that hard right:flushed:? Once I had successfully gained entry, I copied the flag `THM{...}` to the answer place.

<img src="/sql-injection-img/p2/ts2-THMflag.png" width="100%"/>

## Third task - URL Injection

Moving on to the third task, I encountered a new challenge - URL injection.

<img src="/sql-injection-img/p2/Challenge-room-all-task-3.png" width="100%"/>

As usual, I began by testing `admin` for `profileID` and `123` for `password`, but, as expected, there was no existing account.  Why I always put the same test, because usually that is the default for any `user` and `password`.

<img src="/sql-injection-img/p2/ts3-testinput.png" width="100%"/>

However, this time I could not inject the query directly into the `user` or `password` fields. This challenge uses a GET request when submitting the login form, so I had to inject the query on the URL.
The login and the client-side validation can then easily be bypassed by going directly to the URL.

<img src="/sql-injection-img/p2/ts3-url.png" width="100%"/>

The query I inputed **``1' or '1'='1'-- -``** is the same as in task 2.

```sql
SELECT uid, name, profileID, salary, passportNr, email, nickName, password FROM usertable WHERE profileID='1' or '1'='1'-- -' AND password='a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
```

I noticed that the query turned into `-1%27%20or%201=1--%20-`. This is because the browser will automatically urlencode the query. Urlencoding is necessary because the HTTP protocol does not support all characters in the request. When urlencoded, the URL looks like this:

<img src="/sql-injection-img/p2/ts3-url-injection.png" width="100%"/>

The %27 becomes the single quote (') character and %20 becomes a blank space. 

Once I had successfully injected the query into the URL, I was able to bypass the login and client-side validation by going directly to the URL.

And then - - - - - 
Wooo hooo:exclamation:!! I retrieved the flag for the third task:scream::laughing:!!

<img src="/sql-injection-img/p2/ts3-THMflag.png" width="100%"/>

As the same on task 1 and 2, I took the `THM{..}` to the answer place to officially complete the third challenge here.

I hope you found this chapter informative and helpful. In the next chapter, I will discuss the fourth task - POST Injection. Thank you so much for reading:blush:!
