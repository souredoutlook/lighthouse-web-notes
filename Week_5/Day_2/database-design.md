# Database Design

## First Normal Form

Often shortened to 1NF

Says that each column in a table should only have one value in it.

## Defining Table Relationships

When you define a primary key as a foreign key in another table, you have established a relationship between tables. You can exploit this relationship in either direction.

> The foregin key is on the many side!

### Many to Many

Because many to many relationships are not possible we need to sometimes use join/bridge/link tables

Naming convention for these tables is to use the name of each of the tables its linking, like: authortitle, or studentcohort

## Entity

We can view each entity as a table, which is generally true, though not always the case for more complicated ERDS

### Naming Convention

- use_snake_case for tables and columns
- pluralize table names, column names should be singular
- call your primary key `id`
- for most foreign keys use `<table>_key`
