-- Creation of the Database 
Create Database SocialMediadb; 
-- Selecting the Database
Use SocialMediadb;
-- Creating the tables 
-- The Use table 
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY
);
-- Post table
CREATE TABLE Post (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
-- Bookmarks table 
CREATE TABLE Bookmarks (
    bookmark_id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    user_id INT,
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
); 
-- Inserting data to the database
-- Sample data
INSERT INTO `User` () VALUES ();
INSERT INTO `User` () VALUES ();
INSERT INTO `User` () VALUES ();
-- Post table
INSERT INTO Post (user_id) VALUES (1);
INSERT INTO Post (user_id) VALUES (1);
INSERT INTO Post (user_id) VALUES (2);
INSERT INTO Post (user_id) VALUES (3);
-- Bookmarks table
INSERT INTO Bookmarks (post_id, user_id) VALUES (1, 2);
INSERT INTO Bookmarks (post_id, user_id) VALUES (2, 3);
INSERT INTO Bookmarks (post_id, user_id) VALUES (3, 1);
INSERT INTO Bookmarks (post_id, user_id) VALUES (4, 2);
-- Viewing ther data in the tables
Select * From User;

Select * From Post;

Select * From Bookmarks;
