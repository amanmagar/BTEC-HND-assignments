CREATE DATABASE test --create only if you wish to test separately
USE test --use only if you wish to test separately
--USE trinityHS recommended to test with trinityHS
SET STATISTICS TIME ON --Run to benchmark each command

--Test Case 1

CREATE TABLE testx1 ( 
tst_id int PRIMARY KEY IDENTITY(10, 5),
tst_name varchar(50),
tst_date datetime,
tst_money money
)

SELECT * FROM testx1 -- Run to view
--Test Case 2

INSERT INTO testx1 VALUES ('abc', '20181018 00:00:00 AM', 2000.00)
INSERT INTO testx1 VALUES (34, '20191018 00:00:00 AM', 3000.00)
INSERT INTO testx1 VALUES ('efg', 20191018 00:00:00 AM, '3000.00')
UPDATE testx1 SET tst_id = '5' WHERE tst_id = 10


SELECT * FROM testx1 -- Run to view

--Test Case 3 

INSERT INTO testx1 VALUES (100, 'abc', '20181018', 2000.00)
INSERT INTO testx1 VALUES (100, 'abc', '20181018', 2000.00) 
UPDATE testx1 SET tst_id = null WHERE tst_id = 100 

SELECT * FROM testx1 -- Run to view

--Test Case 4

CREATE TABLE testx2 (
tst2_id int PRIMARY KEY,
tst_id int FOREIGN KEY REFERENCES testx1(tst_id) 
)

INSERT INTO testx2 VALUES (1, 15)
INSERT INTO testx2 VALUES (1, 13)
UPDATE testx2 SET tst_id = 12 WHERE tst2_id = 1
DELETE FROM testx1 WHERE tst_id = 15

SELECT * FROM testx2 -- Run to view