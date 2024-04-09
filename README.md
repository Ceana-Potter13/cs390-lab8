# cs390-lab8

###### What does the code (The script copy-paste) do? Explain here…
This code snippet does the following:
- Updates the time on the webpage
- Fetches simulated finance data and updates the
finance table with the simulated data
- Logs each updated item in the console

###### Expand the table, which two types of datatypes are used here?
INTEGER and TEXT

###### What are the columns you see? 
user_id, username, first_name, last_name, gender, password, status

###### Write a query using select and from to list all the data currently in user_details table.
SELECT * FROM user_details;

###### Write a query using where and order by to  list all users who identify as “Female” and sort the results by their first_name
SELECT * FROM user_details WHERE gender = 'Female' ORDER BY first_name;

###### Modify the previous query to only give the first 10 records. Use limit here!
SELECT * FROM user_details WHERE gender = 'Female' ORDER BY first_name LIMIT 10;

###### Use Lecture slides / Create table window as reference to select appropriate data type. Note keep date as text for now, also id has to be unique for all records. All fields are required.
CREATE TABLE finance_data (
    id integer primary key,
    title text,
    category text,
	amount integer,
	date text,
	type text
);