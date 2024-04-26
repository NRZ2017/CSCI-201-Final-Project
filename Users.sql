-- Create database
CREATE DATABASE IF NOT EXISTS UserInfo;

-- Use the created database
USE UserInfo;

-- Create Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- Create Images table
CREATE TABLE Images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    image_name VARCHAR(100) NOT NULL,
    image_data LONGBLOB NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
