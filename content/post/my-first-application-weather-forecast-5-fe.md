---
author: "Thao"
title: ":sunny:  :umbrella:  :snowflake:  :leaves: My 1st application 'Weather forecast' CHAP.5: Creating mock database for the application."
emoji: ""
date: "2023-04-22"
summary: "After ensuring that the frontend is displaying properly and the backend is functioning smoothly, I am now facing a challenge of obtaining the weather forecast data from the database. In this chapter, I will discuss this issue in detail."
tags: [
    "projects",
    "weather-forecast",
    "My-first-APP",
    "frontend",
]
toc: true
draft: false
thumbnail: "https://media.istockphoto.com/id/1431938914/photo/multiple-database-is-placed-on-relational-database-tables-with-server-room-and-datacenter.jpg?b=1&s=170667a&w=0&k=20&c=swgku2Nuy192FCNcQFKTvEffdA_sGE9LQIfxuHn_Yik="
---
As we know, databases are essential for every application, and the greater the variety of databases we have, the more options we have for applications. To generate a mock database for a weather forecasting application, I used [`mockaroo.com`](https://www.mockaroo.com/).

## Create `schemas` - Table `tc_location`

Firstly, I created a `schemas` called `tc_location` with five fields: `id`, `city`, `country`, `state` and `name`. I configured the `format` as `CSV` with a maximum is 1000 `#Rows`.

<img src="/wf-app/mockaroo-tc-location.png" width="100%"/>

- `Schemas`: the table we are working on.
- `Add another field`: to add more field in the table.
- `#Rows`: The number of data we want to generate, with a maximum of 1000 rows and a minimum of 1 row. 
- `Generate Data`: to start generating new data.
- `Preview`: where we can see the table before officially creating it.
- `Format`: where we set up the format of the file/table, it can be `CSV` or `JSON` or  any other formats.

<img src="/wf-app/mockaroo-format-file.png" width="100%"/>

After clicking on `generate data`, the system automatically downloaded the schema/table.

## Upload `tc_location` to `dataset`

I clicked on `upload a dataset` 

<img src="/wf-app/mockaroo-upload-dataset.png" width="100%"/>

and chose the `tc_location` file.

<img src="/wf-app/mockaroo-setup-dataset.png" width="100%"/>

Now in `dataset`, I have `tc_location` in `CSV` format as the reference table for `tc_wf`.

<img src="/wf-app/mockaroo-dataset.png" width="100%"/>

And now, I have two tables/schemas, one is `tc_location` and the other is `tc_wf`. 

<img src="/wf-app/mockaroo-two-table.png" width="100%"/>

## About `Dataset Column` in `Mockaroo` and `tc_wf` table

I wanted to create weather forecast for today and the next 7 days for each location. Therefore, I generated 7000 records of weather forecasts for 1000 location records.

To link the two table, I configured the type of the field `location_id` to `Dataset Column` in the `tc_wf` schema. Next, I chose `Charlie` (the previous name of `tc_location` table) as the `dataset`, and at `Append Dataset`, I chose `Charlie` as well. I chose the `format` of the schema as `SQL`.

<img src="/wf-app/mockaroo-tc-wf.png" width="100%"/>

One issue  I encountered with `mockaroo` is that if I wanna set up `tc_location` as the `dataset` of `tc_wf`, I have to configure the `format` of `tc_location` as `CSV`. If it's not `CSV`, there will be no table displayed at `select a dataset` and `choose a dataset`. 

<img src="/wf-app/mockaroo-select-dataset.png" width="100%"/>

[Ref 1: Problem with dataset](https://forum.mockaroo.com/t/unable-to-select-the-field-i-want-to-use-when-using-a-dataset-column-type/6502)

[Ref 2: Problem with dataset](https://forum.mockaroo.com/t/unable-to-use-from-dataset-in-any-way/6596)

## Adding Database to Application

When I tried to use the `cmd` to add the database to the application, I encountered this bug. 

<img src="/wf-app/utf8-windows1251.png" width="100%"/>

Initially, I was perplexed by the issue at hand, which appeared to be a `syntax error` involving the character `'`. Subsequently, I utilized the `ctrl + F` command to identify the number of records containing the problematic character, and was dismayed to find that the number exceeded one thousand. Given the inefficiency of manually fixing or deleting the offending character in each instance, I set out to find a tool capable of automating the task.

Upon encountering the error message, which read "character with byte sequence 0x81 in encoding 'WIN1252' has no equivalent in encoding 'UTF8'", I resorted to conducting a search on Google. My quest led me to an exceptional tool, which boasts an unassuming layout but offers unparalleled functionality.

[Find the incredible tool here!](https://www.motobit.com/util/charset-codepage-conversion.asp?charset=windows-1250&acharset=windows-1251)

<img src="/wf-app/convert-tool.png" width="100%"/>

The tool's interface features several key components, including:
- `Charset of this document and textbox`: which allows for the upload of the file in question that requires conversion.
- `select a file`: which enables the user to choose the desired encoding for the converted file.
- `Select destination character set`: which type of encoding I want my file to be converted to.
- `Output data`: which specifies the name and format of the exported file.

I referred to another webpage when I successfully installed `PostgreSQL` and configured the environment variables to run `psql` using the `command prompt`.

[check out the following webpage for detailed instructions on how to install PostgreSQL on Windows](https://linuxhint.com/install-only-postgresql-client-tool-windows/)

In terms of application security, I came across a useful webpage when attempting to import a `PostgreSQL` database. The webpage provided me with valuable insights on how to use the psql command to import and export databases.

[Import a PostgreSQL Database with psql Command](https://snapshooter.com/learn/import-export-postgresql-database)

<img src="/wf-app/syntax-psql.png" width="100%"/>

Let's now take a look at how the database performs in the application's layout.

- (1): Search by country: `Spain`, clicking on the country card to get the weather forecast.
- (2): Go back to the main page by clicking on left `arrow`/`clover leaf`.
- (3): Search by city: `Oslo`, clicking on the city card to get the weather forecast.

<video style="width: 250px; margin: auto" controls>
  <source src="/wf-app/Database-video.mp4" type="video/mp4">
</video>

Many thank you for reading, and in my next chapter,I may continue sharing my experience with backend development using Docker:blush:.
