-- Part 4: Meal application

-- create the database
create database meal_share;

-- create model
use meal_share;

create table Meal(
	id INt auto_increment,
	title varchar(30) NOT NULL,
	description text, 
	location varchar(50),
	serving_time datetime,
	max_reservation INT,
    price decimal NOT NULL,
    created_date datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
    );
    
create table Reservation (
	id INT auto_increment,
    number_of_guests INT,
    meal_id INT,
    created_date datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	primary key(id),
    foreign key (meal_id) references Meal(id)
    );
    
create table Review(
	id INT auto_increment,
    title varchar(30) NOT NULL,
    description text,
    meal_id int,
    stars int,
    created_date datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key(id),
    foreign key(meal_id) references Meal(id)
    )    



--Queries
--Meal

--Get all meals
select * from Meal;
--Add a new meal
insert into Meal 
values(default, ' Zereshk Polo','Barberry Rice','Copenhagenmm',null,null,5,null)
-- Get a meal with any id, fx 1
select * from Meal where Meal.id = 2;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET title = 'Fesenjan', description= 'Pomegranate Walnut Stew', location = 'Copenhagen',
serving_time = '2020-02-02',
max_reservation = 5,
price = 125
where id=1;
-- 
update Meal  
Set title= 'Bademjan',
description='Eggplant And Tomato Stew',
max_reservation = 4,
serving_time = '2020-03-10'
where id = 2;
--Delete a meal with any id, fx 1
delete from Meal 
where id=3 or id =4;


--Reservation
--Get all reservations
select * from Reservation;
--Add a new reservation
values(default,4,2,default);
select * from Reservation;

--Get a reservation with any id, fx 1
select * from Reservation
where id =4; 
--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update Reservation 
set number_of_guests= 3, meal_id=1
where id= 1;

--Delete a reservation with any id, fx 1
delete from Reservation 
where id =10;


-- Review
--Get all reviews
select * from Review;
-- Add a new review
insert into Review
values(default, 'yummy','amazing',1,4,default);
-- Get a review with any id, fx 1
select * from Review 
where id =2;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update Review
set title = 'could be better',
meal_id = 1
where id =2;
-- Delete a review with any id, fx 1
delete from Review 
where id =3;

-- Additional queries

--Get meals that has a price smaller than a specific price fx 90
-- we can use Meal.title instead * but it wasn't clear to me which is really asked 
-- condition also can be price <= 90
select * from Meal where price < 90;

--Get meals that still has available reservations
select count(*) as current_reservation ,Meal.title,Meal.max_reservation
from Reservation 
inner join Meal on Reservation.meal_id = Meal.id 
group by Meal.id  
having current_reservation < max_reservation    

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select * from Meal
where title regexp 'Rød grød med';

--Get meals that has been created between two dates
select * from Meal
where (created_date between '2020-02-05 14:15:55' and '2020-02-29 10:15:55');

--Get only specific number of meals fx return only 5 meals
select * from Meal
limit 3;

--Get the meals that have good reviews
select * ,Review.stars
from Meal
inner join Review on Review.meal_id = Meal.id
where Review.stars > 4;

--Get reservations for a specific meal sorted by created_date
select  * ,Meal.title 
from Reservation
inner join Meal on Reservation.meal_id = Meal.id
where Meal.title = 'Fesenjan'
order by Reservation.created_date;

--Sort all meals by average number of stars in the reviews
select  Meal.title,sum(Review.stars)/count(*)
from Review
inner join Meal on Meal.id = Review.meal_id
group by meal_id

