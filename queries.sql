-- Init users table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    username TEXT NOT NULL,
    password TEXT(10000) NOT NULL,
    PRIMARY KEY(id)
);

-- Insert Bobby T
INSERT INTO users
    (username, password) 
VALUES
    ("Robert", "Potato");