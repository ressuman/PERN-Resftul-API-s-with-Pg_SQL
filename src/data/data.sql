-- File:data/data.sql

-- Drop the table if it already exists
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INT CHECK (age >= 0),
    profile TEXT,
    phone VARCHAR(20),
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP
);

-- Insert 10 sample users
INSERT INTO users (name, email, age, profile, phone)
VALUES
('Alice Johnson', 'alice@example.com', 25, 'Developer from NY', '123-456-7890'),
('Bob Smith', 'bob@example.com', 30, 'Designer in LA', '987-654-3210'),
('Charlie Green', 'charlie@example.com', 28, 'Photographer from TX', '555-000-1111'),
('Diana Prince', 'diana@example.com', 27, 'Content creator', '222-333-4444'),
('Ethan Hunt', 'ethan@example.com', 35, 'Freelancer and writer', '333-444-5555'),
('Fiona Brown', 'fiona@example.com', 23, 'UX Researcher', '111-222-3333'),
('George White', 'george@example.com', 31, 'Marketing strategist', '444-555-6666'),
('Hannah Adams', 'hannah@example.com', 29, 'Software engineer', '666-777-8888'),
('Isaac Newton', 'isaac@example.com', 26, 'Physics tutor', '999-888-7777'),
('Jane Doe', 'jane@example.com', 32, 'Project manager', '000-111-2222');
