-- create table author(
-- id serial primary key,
-- Fname varchar,
-- Lname varchar,
-- bio varchar,
-- img_path varchar
-- );

-- create table categories(
-- id serial primary key,
-- name varchar
-- );

-- create table comment(
-- id serial primary key,
-- username varchar,
-- post_date date,
-- blog_id integer,
-- body varchar,
-- visible boolean
-- );

-- create table blog(
-- id serial primary key,
-- title varchar,
-- author integer references categories (id),
-- category integer references author (id),
-- body varchar,
-- crate_date date,
-- pub_date date,
-- public boolean
-- );


-- ALTER TABLE blog RENAME COLUMN crate_date TO create_date;