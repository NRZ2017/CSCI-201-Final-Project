-- Create database
CREATE DATABASE IF NOT EXISTS UserInfo;

-- Use the created database
USE UserInfo;

-- Create Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    balance DECIMAL(10, 2) DEFAULT 0
);

-- Create Portfolio table
CREATE TABLE Portfolio (
    trade_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    ticker VARCHAR(10) NOT NULL,
    numStock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
