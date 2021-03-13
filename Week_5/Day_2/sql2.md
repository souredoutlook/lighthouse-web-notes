# Database Design

### Instructor: Andy Lindsay

## Content

- Primary/Foreign Keys
- Naming Conventions
- Data Types
- Relationship Types
- Design Concepts
- Entity Relationship Diagrams
- Breakout: Convert 2 Spreadsheets
- Student Suggestion ERD(s)

## Primary Keys

- A way of uniquely identifying a record
- CANNOT be null
- does not need to an auto incrementing integer
- email can work if a unique constraint is put on it
  - Tying a primary key to a string creates an issue because you are betting that it will NEVER change.
  - Even with `ON UPDATE CASCADE`

### Foreign Keys

- FK must be the same type as the PK

### Composite Keys

- This unique combination of fields creates a primary key
  - Recommend staying away from this as they are harder to query and slower too

### Naming Conventions

- field/table names should snake_case
- table names are always PLURAL
  - tables are a collection
- 'id' for primary keys
  - foreign key then always references 'id' which is easy to remember

## PSQL types

- Much more of a concern in the old days
- When a record is created even if the field is NULL the database sets aside space.

- Numeric Types
  - smallinst
  - integer
  - bigInt
  - decimal
  - numeric
  - real
  - double precision
  - smallserial
  - serial
  - bigserial
- Good choices are integer, varchar, boolean
  - canada has letters in the postal code so it's clear to store it as a string
  - not necessarily as evident with american postal codes
    - still must be strings as leading 0's will be truncated

### Relationship Types

- One to One - 1 record in the first table is related to only 1 record in the second
  - Next door to useless unless - only time I might do this is to save space.
    - example employees table with 1000 employees but only 5 have a username and password: we can pull those 5 out into a seperate table so we dont have 995 null values
- One to Many - by far most common type. also works as many to one.
- Many to Many - one or more records in the first is related to one or more records in the second. Cannot be implemented with two tables. Requires a third table called a join/junction/bridge
  - create it inadvertantly ALL THE TIME (effectively two or more one to many relationships)

## Design Concepts

- Make fields `required` - the record in it's inital state.
  - Think about what information will be in the record in it's initial state.
- Default values - use intelligent default values to speed up inserts.
  - Most common is timestamps - like NOW or CURRENT_DATE, active boolean field defaults true,
- Calculated field - field whose value can be derived from one or more other fields.
- Can use first_name and last_name to calculate full_name
  - same for invoice TOTAL
    - There is no point in storing this info because it can be calculated on the fly in our queries.
    - Bad practice because it can quickly become out of sync
- The process of normalization is to reduce redundancy and get to a single source of truth
- Pull repeated values out of the table
  - This is for speed - for example
    - SUM(item.price)
      - for..of
      - reduce 100x slow
  - pulling repeated values out to a lookup table
  - Try not to delete anything
    - Consider active boolean for "removing" information

## ERD's

- Entity Relationship Diagram

  - A way of visualizing our tables and the relationship between them.

- For mideterms - design the blue sky with all stretch and then strip it back to basic requirements.
