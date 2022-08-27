DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    post_context TEXT NOT NULL,
    post_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid INT,
    id INT PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY(userid) REFERENCES users(id)
);

CREATE TABLE comments (
    comment_context TEXT NOT NULL,
    comment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid INT,
    post_id INT,
    id INT PRIMARY KEY AUTO_INCREMENT,
    FOREIGN KEY(userid) REFERENCES users(id),
    FOREIGN KEY(post_id) REFERENCES posts(id)
);