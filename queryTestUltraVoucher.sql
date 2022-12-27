-- create a table customer
CREATE TABLE customer (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  parent_id INTEGER
);

-- insert values
INSERT INTO 
    customer 
VALUES 
    (1, 'Zaki', 2), 
    (2, 'Ilham', NULL), 
    (3, 'Irwan', 2), 
    (4, 'Arka', 3);

-- query test
SELECT 
    c.id, 
    c.name,
    pr.name as parent_name
FROM
    customer as c
LEFT JOIN 
    customer as pr 
    ON 
        c.parent_id = pr.id
ORDER BY 
    c.id;