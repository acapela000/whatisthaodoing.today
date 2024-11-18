---
author: "Thao"
title: "My first hacking challenge CHAP.3: SQL Injection - POST Injection "

date: "2023-03-24"
summary: "POST Injection"
tags: [
    "sql",
    "hacking",
    "My-first-hacking-challenge",
]
toc: false
draft: false
thumbnail: "https://wallpaperaccess.com/full/417651.jpg"
---

Welcome back to my post with the third chap about SQL Injection challenge on tryhackme.

## Third chap - fourth task
1. Environment Setup.

[Check at chap 1](https://whatisthaodoing.today/post/my-first-hacking-challenge-sql-injection-chap.1/)

I went to room 4

<img src="/sql-injection-img/p2/Challenge-room-all-task-4.png" width="100%"/>

As in the previous chapter, I tested by input `profileID` with `admin` and `password` with `123` and as the same result as previous time, it rejected.

```sql
SELECT uid, name, profileID, salary, passportNr, email, nickName, password FROM usertable WHERE profileID='1' or '1'='1'-- -' AND password='a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
```

And because this challenge is `POST` so I can't see any thing from the `url` 



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

