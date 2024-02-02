CREATE DATABASE todoapp

CREATE TABLE todos(id VARCHAR(255) PRIMARY KEY,
user_email VARCHAR(255), title VARCHAR(30), progress INT, date VARCHAR(300))

CREATE TABLE users(email VARCHAR(255) PRIMARY KEY, hashed_password VARCHAR(255));

-- C:\Program Files\PostgreSQL\16\pgAdmin 4\runtime>"C:\Program Files\PostgreSQL\16\pgAdmin 4\runtime\psql.e
-- xe" "host=localhost port=5433 dbname=todoapp user=postgres sslmode=prefer connect_timeout=10" 2>>&1
-- psql (16.1)