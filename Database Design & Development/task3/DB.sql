CREATE DATABASE trinityHS
USE trinityHS

CREATE TABLE class ( 
c_id int PRIMARY KEY, 
c_start datetime,
c_end datetime,
c_type varchar(50)
)

CREATE TABLE supplier (
supp_id int IDENTITY(100, 20) PRIMARY KEY, 
supp_address varchar(80),
supp_name varchar(100), 
supp_contact_no varchar(20) 
)

CREATE TABLE instrument (
i_id int PRIMARY KEY,
supp_id int FOREIGN KEY REFERENCES supplier(supp_id),
i_name varchar(100),
i_quantity int,
i_rental money 
)

CREATE TABLE student ( 
s_id int PRIMARY KEY,
i_id int FOREIGN KEY REFERENCES instrument(i_id),
s_name varchar(100), 
s_type varchar(50),
s_regist_date datetime,
s_dob datetime,
s_contact_no varchar(20) 
)

CREATE TABLE teacher (
t_id int PRIMARY KEY,
t_name varchar(100),
t_contact_no varchar(20) 
)

CREATE TABLE attendance (
a_index int IDENTITY(10, 5) PRIMARY KEY,
c_id int FOREIGN KEY REFERENCES class(c_id), 
s_id int FOREIGN KEY REFERENCES student(s_id),
attend_time datetime NOT NULL,
daily_cost money,
)


CREATE TABLE class_subjects_linked (
cs_index int IDENTITY(10, 5) PRIMARY KEY,
c_id int FOREIGN KEY REFERENCES class(c_id), 
t_id int FOREIGN KEY REFERENCES teacher(t_id),
c_subject varchar(50) 
)

INSERT INTO class VALUES (1111, '20181018 08:00:00 AM', '20181018 01:34:09 PM', 'FULL_TIME')
INSERT INTO class VALUES (1112, '20181019 08:15:00 AM', '20181018 02:00:00 PM', 'PART_TIME')
INSERT INTO class VALUES (1113, '20181020 09:30:00 AM', '20181018 02:11:00 PM', 'PART_TIME_EVENING')

INSERT INTO supplier VALUES ('St Joseph''s St, Negombo', 'Yamaha Dealer', '031892834')

INSERT INTO instrument VALUES (103, 100, 'Violin', 13, 20398.00)
INSERT INTO instrument VALUES (102, 100, 'Guitar', 10, 15201.00)

INSERT INTO student VALUES (1, 103, 'Saline Man', 'FULL_TIME', '20181018 00:00:00 AM', '20000928 00:00:00 AM', '076 1234567')
INSERT INTO student VALUES (2, 103, 'Saline Woman', 'PART_TIME', '20181012 00:00:00 AM', '20000101 00:00:00 AM', '077 1234567')
INSERT INTO student VALUES (3, 103, 'Orange Man', 'PART_TIME_EVENING', '20181013 00:00:00 AM', '20000401 00:00:00 AM', '078 1234567')
INSERT INTO student VALUES (4, 102, 'Orange Woman', 'PART_TIME_EVENING', '20180715 00:00:00 AM', '20000602 00:00:00 AM', '079 1234567')
INSERT INTO student VALUES (5, 102, 'Banana Man', 'FULL_TIME', '20181018 00:00:00 AM', '20000516 00:00:00 AM', '032 1234567')

INSERT INTO teacher VALUES (10001, 'Dumbledore McField', '079 123467')

INSERT INTO attendance VALUES (1111, 1, '20181018 08:05:43 AM', 2000.00)
INSERT INTO attendance VALUES (1111, 1, '20181019 08:05:43 AM', 2000.00)
INSERT INTO attendance VALUES (1111, 1, '20181020 08:05:43 AM', 2000.00)
INSERT INTO attendance VALUES (1111, 2, '20181018 07:39:50 AM', 3000.00)

INSERT INTO class_subjects_linked VALUES (1111, 10001, 'Cleaning Instruments')
INSERT INTO class_subjects_linked VALUES (1111, 10001, 'Cleaning Instruments')

------------Demonstrative Queries---------

--#1 : Get student details of a specifc month--

SELECT 
s_id, s_regist_date, s_type
FROM student 
WHERE MONTH(s_regist_date) = 10 

--#2 : Get total income of a given student in a month--

SELECT 
s_id, SUM(daily_cost) As total_incoome
FROM attendance 
WHERE MONTH(attend_time) = 10 
GROUP BY s_id

--#3 : Student details with playing instruments--

SELECT 
student.s_id, instrument.i_name As instrument_name, student.s_name, student.s_type 
FROM student 
INNER JOIN instrument 
ON student.i_id = instrument.i_id

--#4 : Filter student's based on registration date--

SELECT s_name, s_regist_date, s_type FROM student 
WHERE s_regist_date = '20181018'

--#5 : Show only part time classes--

SELECT c_id, c_type 
FROM class 
WHERE c_type = 'PART_TIME'