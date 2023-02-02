DROP DATABASE IF EXISTS abdelwaheb_db;
CREATE DATABASE IF NOT EXISTS abdelwaheb_db;
USE abdelwaheb_db;

CREATE TABLE admin (
id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE  user(
      id INT NOT NULL AUTO_INCREMENT,
     username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
    photo VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE sessions(
    id INT NOT NULL AUTO_INCREMENT,
    session VARCHAR (255) NOT NULL,
    user_id INT NOT NULL,
   logedin_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
   PRIMARY KEY (id),
   FOREIGN KEY (user_id) REFERENCES user(id)
);
-- CREATE TABLE messages (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     message TEXT NOT NULL,
--     timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
--    FOREIGN KEY (user_id) REFERENCES user(user_id)

-- );
-- CREATE TABLE streams (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT,
--   description TEXT,
--   title VARCHAR(255) NOT NULL,
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES user(user_id)
-- );
CREATE TABLE post (
id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    admin_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    comments INT DEFAULT 0,
    image VARCHAR(255),
    video VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (admin_id) REFERENCES admin(id)
);