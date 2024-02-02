CREATE DATABASE leads;
GO

USE leads;
GO

CREATE TABLE leadRegistrations (
    JobId int NOT NULL PRIMARY KEY,
	Accepted bit NOT NULL,
    FirstName varchar(50) NOT NULL,
    LastName varchar(50),
    Suburb varchar(50) NOT NULL,
    Category varchar(50) NOT NULL,
    DescriptionJob varchar(255) NOT NULL,
    Price decimal(10, 2) NOT NULL,
    Email varchar(100) NOT NULL,
    PhoneNumber varchar(20) NOT NULL,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	DeletedAt DATETIME DEFAULT NULL
);

INSERT INTO leadRegistrations (JobId, Accepted, FirstName, LastName, Suburb, Category, DescriptionJob, Price, Email, PhoneNumber)
VALUES 
    (5577421, 0, 'Bill', 'Doe', 'Yanderra 2574', 'Painters', 'Need to paint 2 aluminum windows and a sliding glass door', 62.00, 'bill@mail.com', '1234567890'),
    (5588872, 0, 'Craig', 'Smith', 'Woolooware 2230', 'Interior Painters', 'Internal walls 3 colors', 500.00, 'craig@mail.com', '9876543210'),
    (5141895, 1, 'Pete', null, 'Carramar 6031', 'General Building Work', 'Plaster exposed brick walls (see photos), square off 2 archways (see photos), and expand pantry (see photos).', 501.00, 'fake@mailinator.com', '0412345678'),
    (5121931, 1, 'Chris', 'Sanderson', 'Rio de Janeiro', 'Home Renovations', 'There is a two story building at the front of the main house that`s about 10x5 that we would like to convert into a self-contained living area.', 600.00, 'another.fake@hipmail.com', '04987654321')
GO