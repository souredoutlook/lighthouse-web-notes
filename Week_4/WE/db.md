# Databases

## [What are databases](https://youtu.be/Ls_LzOZ7x0c)

Just having data is not a good enough reason to have a database.

Potential problems:

size - what starts small grows then size problem becomes speed
ease of updating -
accuracy - manually updating information can create problems
security - some information could be sensitive controlling access and auditting becomes a problem
redundancy - good to have redundancy for backups, bad to have it for working files
importance - many companies data is it's entire business

A database gives us a structured system to put our data in that imposes rules we define on it's data and users.

## [Relational Databases](https://code.tutsplus.com/tutorials/relational-databases-for-dummies--net-30244)

Database - backend for storing app information in an organized way that can be searched and retrieved later.

Contains one or more tables

All rows have the same columns, each column contains the data itself.

Data can be inserted, retrieved, updated and deleted from a table. (insertion == creation for the puproses of crud)

A relational database organizes data into tables and links them based on defined relationships.

Retrieve and combine data from tables with a single query using the relationships

1. Get Data - ensure when tabling data to limit duplication as much as possible as it makes CRUD operations more challenging.
2. Remove repetitive data across columns - removing repetitive data across columns is called (1NF) first normal form
3. remove repetitive data across rows - removing repetitive data across rows is called (2NF) second normal form
4. Link tables with keys - the primary table key in the example was "username" - it is referenced in two other tables (it becomes the foreign key there)
   > in an environment where people may changes their username an autoincrementing userID might work better than using a "natural key"

### Relational Database Management Systems

RDBMS:

Commercial: Oracle, IBM DB2, Microsoft SQL Server

Free: MySQL, SQLite, PostgreSQL

### SQL

Structured Query Language is the standard language for working with RDBMSs

Common statements:

```SQL
CREATE DATABASE development; /*create a database, named 'development'*/

CREATE TABLE users (
  full_name VARCHAR(100)
  username VARCHAR(100)
)/*create a table named 'users'
  *each column is given a data type
  */

INSERT INTO users (full_name, username)
VALUES ("Boris Hadjur", "_Dreamlead"); /*insert a record (Create from CRUD)*/

SELECT text, created_at FROM tweets WHERE username="_Dreamlead"; /*retrieve all tweets belonging to a user (Retrieve from CRUD)*/

UPDATE users
SET full_name="Boris_H"
WHERE username="_Dreamlead" /*Update a user's name (the update operation in CRUD)*/

DELETE FROM users
Where username="_DreamLead"; /* delete a user (the Delete operation in CRUD) */
```

SQL statements are pretty similar to English - small variations in SQL between vendors called SQL dialects

## Entity Relationship Diagrams

ERD are used to understand how the tables in a relational database are connected to each other. They are a graphical representation of the data requirements for a database.

Diagramming before setting up a database can help to understand what tables you might need.

5 Parts of an ERD:

1. Entity - represents a person, place, or thing you want to track in a DB (all the things that are like this entity are an entity instance/row)
2. Attributes - various characteristics of an entity (ex. first name of entity instance)
3. Primary Keys - an attribute or group of attributes that uniquely identifies an instance of the entity. (must be unique - will uniquely identify each instance) \*\*\* sometimes it's a composite key
4. Relationship - describes how one or more entities interact with each other (use a verb "HAS")
5. Cardinality - the count of instances that are allowed or are necessary between entity relationships (minimum/maximum)

Cardinality with crows-foot notation:

![crow foot notation](asset/cardinality.png)

## SQL Basics

Creating a table and inserting data:

Typically specify the primary key first `id INTEGER PRIMARY KEY` for example.

```SQL
CREATE TABLE _ ( _ TYPE PRIMARY KEY, _ TYPE, _ TYPE, etc.)

INSERT INTO _ VALUES (_, '_', ); /* type matched to INTEGER, TEXT, REAL, etc. strings should use single quotes*/
```

Querying the table:

```SQL

SELECT name FROM groceries; /* always start with select, can use glob to get all column names */

SELECT * FROM groceries ORDER BY aisle; /*ordered by specified column*/

SELECT * FROM groceries WHERE aisle > 5 ORDER BY aisle; /*comparison operators*/

SELECT * FROM groceries WHERE item IN ('coffee');

SELECT * FROM groceries WHERE quantity BETWEEN 1 AND 2

SELECT * FROM groceries WHERE item LIKE 'B%' /*banana*/

SELECT * FROM groceries WHERE item LIKE '%a' OR '%e'

SELECT * FROM groceriers WHERE item LIKE '_a%' /*also banana _ is single char wild card*/

SELECT * FROM world WHERE capital LIKE concat('%',name,'%')
```

Aggregating data useful for getting maximum, minimum and sum of values in our database:

```SQL
SELECT SUM(quantity) FROM groceries;

SELECT MAX(quantity) FROM groceries;

SELECT ailse, SUM(quantity) FROM groceries GROUP BY ailse; /*get a new table that is the sum of quantities grouped by aisle, the initial aisle is merely outputting aisle numbers for formatting purposes but could be anything (although it shouldn't because that would be misleading*/
```

### "Sequel" or ESS-QUEUE-ELL

Structured English QUEry Language SEQUEL became SQL because SEQUEL was already trademarked.
