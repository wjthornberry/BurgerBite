-- Drops the burgers_db database if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the burgers_db database --
CREATE DATABASE burgers_db;

-- All of the following code will affect BurgerBites -- 
USE burgers_db;

-- Creates the burgers table within the burgers_db --
CREATE TABLE burgers (
    -- Makes a numeric id column called which cannot contain null and is a unique id for each product --
    id INT NOT NULL AUTO_INCREMENT,
    -- burger's name --
    burger_name VARCHAR(255) NOT NULL,
    -- devoured burger's name -- 
    devoured BOOLEAN NOT NULL,
    -- timestamp --
    date TIMESTAMP NOT NULL,
    -- Sets the primary key of the table to id -- 
    PRIMARY KEY (id),
);