
-- SCHEMA: public

-- DROP SCHEMA IF EXISTS public ;

CREATE SCHEMA IF NOT EXISTS "TP5"
    AUTHORIZATION pg_database_owner;


CREATE TABLE IF NOT EXISTS "TP5".students
(
    id SERIAL PRIMARY KEY,
    first_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default",
    age integer,
    gender character(1) COLLATE pg_catalog."default",
    document_number character varying(20) COLLATE pg_catalog."default",
    city_of_residence character varying(50) COLLATE pg_catalog."default",
    university_book_number character varying(20) COLLATE pg_catalog."default"
    
);

TABLESPACE pg_default;
