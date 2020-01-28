-- change database 
use lessonone ;
--Find out how many tasks are in the task table
select count(*) from task;

--Find out how many tasks in the task table do not have a valid due date
select count(*) from task where due_date is null;

--Find all the tasks that are marked as done
select * from task where status_id = 3;

--Find all the tasks that are not marked as done
select * from task where status_id != 3;

--Get all the tasks, sorted with the most recently created first.
select * from task order by updated desc;

--Get the single most recently created task.
select *  from task order by updated desc limit 1;

--Get the title and due date of all tasks where the title or description contains database
select title,due_date from task where title like '%database%' or description like '%database%';

--Get the title and status (as text) of all tasks
select task.title,status.name from task inner join status on task.status_id = status.id;

--Get the name of each status, along with a count of how many tasks have that status
 select status.name,count(*) as count from task inner join status on task.status_id=status.id group by task.status_id;

--Get the names of all statuses, sorted by the status with most tasks first
 select status.name,count(*) as count from task inner join status on task.status_id=status.id group by task.status_id order by count desc;

-- I find latter above way through surffing on internet an to be sure about result I compare the result from Pryanka homework, these are my observatin:
-- in both command we recived the same result counter in matter of counting and name of the task. 
-- above solution is quite faster but seems more complicated (take a note here to come back again) 
select count(status_id), name 
from status join task on status.id = task.status_id
GROUP BY status.name
order by count(status_id) desc;