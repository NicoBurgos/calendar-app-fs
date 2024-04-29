CREATE TABLE categories (
    id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL, color VARCHAR(7) NOT NULL, CONSTRAINT unique_name UNIQUE (name)
);

CREATE TABLE tasks (
    id SERIAL PRIMARY KEY, month VARCHAR(20) NOT NULL, day INT NOT NULL, category_name VARCHAR(100) NOT NULL, FOREIGN KEY (category_name) REFERENCES categories (name) ON UPDATE CASCADE
);

INSERT INTO
    categories (name, color)
VALUES ('holidays', '#ffae00'),
    ('work', '#ff0000')
INSERT INTO
    tasks (category_name, month, day)
VALUES ('holidays', 'January', 5),
    ('work', 'January', 1)