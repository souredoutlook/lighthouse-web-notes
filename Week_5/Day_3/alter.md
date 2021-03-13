# [Alter Table](https://www.postgresqltutorial.com/postgresql-alter-table/)

Takes the form of `ALTER TABLE table_name ACTION;`

Can:

- add a column
- drop a column
- change the data type of a column
- rename a column
- set a default value for the column
- add a constraint to a column
- rename a table

To add a new column to a table, use `ALTER TABLE ADD COLUMN`:

```sql
ALTER TABLE table_name
ADD COLUMN column_name DATATYPE column_constraint;
```

To drop a column:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

To rename a column:

```sql
ALTER TABLE table_name
RENAME COLUMN column_name
TO new_column_name;
```

To change a default value of the colum, you use `ALTER TABLE ALTER COLUMN SET DEFAULT` or `DROP DEFAULT`

```sql
ALTER TABLE table_name
ALTER COLUMN column_name
[SET DEFAULT value | DROP DEFAULT];
```

To change a NOT NULL constraint ALTER TABLE ALTER COLUMN:

```sql
LTER TABLE table_name
ALTER COLUMN column_name
[SET NOT NULL| DROP NOT NULL];
```

To add a CHECK constraint, use ALTER TABLE ADD CHECK:

```sql
ALTER TABLE table_name
ADD CHECK expression;
```

To add a constraint to a table:

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name constraint_definition;
```

To rename a table use ALTER TABLE RENAME:

```sql
ALTER TABLE table_name
RENAME TO new_table_name;
```

### DROP TABLE

```SQL
DROP TABLE users;
-- all that is required

DROP TABLE users CASCADE;
-- will make sure that all records from other tables that depend on this table will also be deleted.

DROP TABLE IF EXISTS users CASCADE;
-- To avoid any SQL errors, it's good to make sure the table exists before dropping it.
```

### Now()

When we need a timestamp of the record creation we can use the constraint NOT NULL coupled with DEFAULT Now() to automatically produce the timestamp
