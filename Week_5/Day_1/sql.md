# SQL

### Instructor: Vasily Klimkin

## Content

- Intro
- Why SQL
- PSQL
- First Query
- More Queries
- More DB Talks

## Why?

Let's say tinyApp get's scaled to 7 million users and they start asking for features: Likes, Favourites, Twitter Integrations, IMG integration, Analytics, Revenue Tracking

Let's say you implement them all and push the changes to gitHub. And heroku automatically restarts the app.

You just lost 7 million users. This is because heroku doesn't have database integration.

### Data Collection

To collect data we must be able to:

- Store it
- Co-relate it
- Retrieve it

### How we might do it now

Based on what we've been taught so far we might store the users and urls in seperate textfiles that grow and grow with our app.

CSV files is a pretty common way to store information already.

Risk: things crash in the middle of writing a new user and now the file is unreadable.

We would avoid this with a seperation of concerns by placing a backend server on AW3. But then we need to create a fileserver/dataserver to interact with the files for us.

### Good news

Services exist that will solve this problem for us: SQL PSQL etc.

SQL abstracts away the specific routing for interacting with routes on a data server using a language SQL that has various tools built in to do this in a general way for all data structures.

Instead of POST /urls we might had INSERT INTO 'urls' VALUES (... / ... / ... )

These relational databases allow use to store information in different tables that are linked usings primary keys and foreign keys

### Non-relational

Non relational databases are basically gigantic json objects.

All the skills you can use in non relational databases are transferrable to relational databases

## PSQL

PostgreSQL - we will be using over the next few weeks. (Default port is 5432)

CLI `PSQL`

To quit `\q`

Will always run in any directory - this is because databases are globally installed, as long as they are ON you can get in one from anywhere.

### Databases are not a node module so no -g

With linux - sudo app install ~~~
With mac - brew or download the postgres application (Francis says use brew)

### More commands

List all the datbases: `\l`
List all the users: `\du`
Connected to a specific database `\c _DATABASE_NAME_`

> It is helpful to think of a database like a folder of tables and connecting the database gets you into that folder. - V
> Display some sort of data in it `\dt`

The `PSQL -U` will let you log in a specific user
`psql <dbname>` will let you connect directly to a specific db

More commands `man psql`

> Recommend using db in the terminal to get your head around SQL before using a visualizer.

### Even More Commands - SQL Specific

to DELETE the DATABASE -- SQL Command

DROP DATABASE _NAME_; <--- must end with a semicolon

CREATE DATABASE _NAME_;

CREATE TABLE _NAME_ (_columnNAME_ SERIAL PRIMARY KEY DATATYPE, _anotherColumnNAME_ DATATYPE, etc.) <--- serial PRIMARY KEY means that the table will count for us by 1 whole integer per entry

> Why VARCHAR(255) vs. TEXT since 255 is the max anyway -> if you can use less characters it will be searched faster.

Seeding a table from a file of commands CTRL C CTRL V but theres another way... (seeding is the act of puttting data into your database.)

command to run a file externally from PSQL: `\i <filename>.sql` run it while connected to a database - easier to do it from the directory where the file of commands is located.

### ERD

An Entity Relationship Diagram is a picture that explains how the tables in a datbase are interacting (many tools that are good for creating this diagrams - dbBeaver)

## Writing Queries

```SQL

SELECT * FROM users;

SELECT email FROM users;

SELECT * FROM users WHERE id >= 2 OR id <= 4;

SELECT * FROM users WHERE id = 1;

SELECT * FROM urls WHERE user_id = 1;

SELECT * FROM urls WHERE long_url = '%.ca'

SELECT * FROM urls WHere long_url = 'www.a%.ca'

```

joins are a way to show data from two tables that have a relationship

```sql

SELECT * FROM users JOIN urls ON users.id = urls.user_id;

SELECT email, long_url FROM users JOIN urls ON users.id = urls.user_id;

SELECT COUNT(*) FROM users;

SELECT COUNT(*) FROM urls WHERE user_id = 4;

--how many urls does each user have
SELECT email, COUNT(long_url) FROM users JOIN urls ON users.id = urls.user_id GROUP BY email;

-- will show emails that have 0 urls
SELECT email COUNT(long_url) FROM uers LEFT JOIN urls ON users.id = urls.user_id
WHERE urls.user_id IS NULL GROUP BY email;

-- only show users with more than 3 inclusive urls
SELECT email, COUNT(long_url) FROM users LEFT JOIN urls ON users.id = urls.urser_id
GROUP BY email HAVING COUNT(long_url) > 2;
```

More info on SQL joins:

![joins](asset/join.png)

## SQL Order of Opertations:

- FROM
- JOIN -- must have an ON
- ON
- WHERE
- GROUP BY
- HAVING
- ORDER BY
- LIMIT

## Further Notes:

On an inner join if the foreign key is NULL the row will not be included in the result of the INNER JOIN.

If we want that data we need to have an OUTER JOIN

There are 3 types of outer join: Left, RIGHT or FULL

[More on joins here](https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/)

### GROUP BY and HAVING

group by applies aggregate functions to groups of data

having clause is evaluated before the select so we can't use an alias

> `GROUP BY` allows us to combine the results based on a column so an aggregate can be applied to each group.
> `HAVING` allows us to filter our results based on the result of an aggregate function.

Order by default is ascending 1-> 10;

### Nesting Queries

Queries can be nested in other queries

ex. we can write a select inside a select

if a query returns a single value we can use it in our select statement just like any other

we can also FROM sub select table when a query returns multiple results

we can also use a sub query in a WHERE clause (probably most common usage) when the result only has one column

## Can use the word ALL

ALL to allow >= > < <= to act over a list ex:

```sql
SELECT name
  FROM world
 WHERE population >= ALL(SELECT population
                           FROM world
                          WHERE population>0)
```

SELECT properties.\*, AVG(property_reviews.rating) as average_rating
FROM properties
FULL OUTER JOIN property_reviews ON properties.id = property_id
WHERE TRUE
GROUP BY properties.id
HAVING TRUE
ORDER BY cost_per_night
LIMIT 20;
