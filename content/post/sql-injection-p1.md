---
author: "Thao"
title: "My first hacking challenge: SQL Injection chap.1"
date: "2023-03-13"
summary: "For first-time hackers, TryHackMe's SQL Injection challenge can be both exciting and intimidating. Participants are tested on their ability to identify and exploit SQL vulnerabilities in the first task, while learning about common attack methods and preventative measures. Successfully completing the challenge builds confidence and prepares participants for future cybersecurity challenges. It's a valuable learning experience for anyone interested in cybersecurity."
tags: [
    "sql",
    "hacking",
    "My first hacking challenge",
]
toc: false
thumbnail: "https://www.thesslstore.com/blog/wp-content/uploads/2020/04/sql-injection-attack.jpg"
---

I have always been intrigued by the field of cybersecurity, and recently a friend recommended tryhackme.com to me. Eager to explore the world of hacking, I decided to take on my first challenge involving SQL Injection.

To my surprise, the experience was exhilarating and more stimulating than I had anticipated. I was completely engrossed in the task, eager to learn and solve more challenges.

Starting with the easier level, I can confidently say that my experience thus far has been nothing short of thrilling. This post serves as a testament to my excitement and eagerness to continue learning and exploring the world of hacking.

Here's to my first successful hacking task, the beginning of a long journey filled with endless possibilities.

## First chap - first task
1. Environment Setup.

Following the instructions provided by tryhackme, I selected the region closest to me 

<img src="/sql-injection-img/p1/Choosing-Region.png" width="100%"/>

and downloaded the OpenVPN.

<img src="/sql-injection-img/p1/Download-OpenVPN.png" width="80%"/>

After opening the file, I connected to the VPN.

<img src="/sql-injection-img/p1/OpenVPN-Connected.png" width="45%" />

*Note*: Sometimes, the connection may face problems such as the `server hostname [locked]` or connection timeout. 

<img src="/sql-injection-img/p1/Connection-Timeout.png" width="45%" />

In such cases, I suggest trying the following:
- Download the OpenVPN app again
- Check the internet connection
- Change the VPN region and regenerate it again

2. Accessing the room
Clicking on `Join room` and `Start machine`, I waited for the virtual machine to start. After it started, I gained access to the virtual server on port `5000`.

<img src="/sql-injection-img/p1/Join-room.png" width="100%" />

The journey officially started at this point.
The challenge room appeared with all the tasks, and I was excited to tackle them immediately. 

<img src="/sql-injection-img/p1/Challenge-room-all-tasks.png" width="100%" />

Without reading the guidance from tryhackme first, I attempted to input `admin` for the `profileID` and `123` for the `password`. However, I was rejected because the account did not exist. 

<img src="/sql-injection-img/p1/test-input.png" width="100%" />

I then attempted the SQL injection phrase that people usually talk about, **`' OR 1=1-- -`**, with a random password. But, once again, I was rejected. 

<img src="/sql-injection-img/p1/input-query-1.png" width="100%" />

After reading the challenge title (I was reckless), "SQL Injection: Input box non-string," I tried again and changed the input to **`1 or 1=1-- -`**. There! Success! I was able to gain access.OMG!!!:astonished:

<img src="/sql-injection-img/p1/completed-task-1.png" width="100%" />

Hooray!!! Yahoooo!!!:heart_eyes:

Many thank for reading my post until here:heart:. In conclusion, I am thrilled to have completed my first hacking challenge. Though it may seem like a small step, it has opened the door to tremendous excitement in learning how to hack and increase my knowledge of cybersecurity. I look forward to share with you guys my next chapter with next task:smile:.
