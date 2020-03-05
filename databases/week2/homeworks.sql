use lessonone;

-- Part 1 : Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
Insert into task (title, description, created, updated, due_date, status_id, user_id)
values('Doing homeworks', "You shouldn't procastinate that much", '2020-02-03', '2020-02-03', '2020-02-06', 1, 10 );
-- Change the title of a task
UPDATE task
SET title = 'watering plants'
WHERE user_id = 1;

--Change a task due date
update task set due_date='2020-02-20 10:10:10' where id=1;

-- Change a task status
update task set status_id=2 where id=10;
--Mark a task as complete
update task set status_id=3 where id=8;
--Delete a task
delete from task where id=30;

--- Part2: School database

--Create a new database containing the following tables: 
create table class (id INT auto_increment,name varchar(20),begins date, ends date, primary key(id));

--Student: with the columns: id, name, email, phone, class_id (foreign key)
create table student(id int auto_increment, name varchar(25),email varchar(20), phone varchar(10),class_id int,primary key(id),foreign key(class_id) references class(id));

--Create an index on the name column of the student table.
create index presence on student (name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished

alter table class add column status enum('not-started', 'ongoing','finished');
-- extra what happens when you add a not null column after insert
alter table class add column status2 enum('not-started', 'ongoing','finished') not null;
-- extra how to remove a column
alter table class drop column status2;

--- Part 3: More queries

-- 
--Get all the tasks assigned to users whose email ends in @spotify.com
use hyf_lesson2;
-- we could have used * but we choose to select only title and description of the task
select  task.title,task.description,user_task.user_id, user.email
from task 
inner join user_task on user_task.task_id = task.id 
inner join user on user.id = user_id
where email regexp "@spotify.com$"  

-- Get all the tasks for 'Donald Duck' with status 'Not started'

select task.title,task.description,user.name,status.name
from task
inner join user_task on user_task.task_id = task.id
inner join user on user_task.user_id = user.id
inner join status on status.id = task.status_id
where user.name = 'Donald Duck' and status.name = 'Not started'

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
select *,user.name
from task
inner join user_task on user_task.task_id = task.id
inner join user on user.id = user_task.user_id
where user.name = 'Maryrose Meadows' and month(task.created)= 9

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
select month(created),count(*) from task
group by month(created)

 





