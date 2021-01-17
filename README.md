# Expense Reimbursement System

## Project Description

The Expense Reimbursement System (ERS) will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement.

## Technologies Used

* Java - version 1.8
* Servlet api - 3.1
* PostgreSQL - 42.2.18
* Tomcat - 9.0.41
* React - 17.0
* JavaScript - ES6
* HTML - 5
* CSS - 3

## Features

* Users can log in
* Employees can submit reimbursements                             
* Employees can view past history of reimbursements
* Finance Managers can aprrove/deny reimbursements
* Finace Managers can view all reimbursements

## Getting Started

### Server-side

#### Requirements 

* Java IDE
  * ex Eclipse
* Maven
* Servlet container
  * Tomcat
* SQL client software
  * ex DBeaver
* PostgreSQL database

#### Step 1

`git clone https://github.com/2011Canada/project-1-jeevanselva.git`

#### Step 2

> execute ERS.sql

#### Step 3

> import as Existing Maven Project

#### Step 4

> Update Maven project

#### Step 5

> Set up run configuration to run on server

#### Step 6
> Modify environment variables with database credentials

#### Step 7
> run the application on the server

### Client-side

#### Requirements

* NodeJS
* NPM

#### Step 1

`git clone https://github.com/jeevanselva/project-1-jeevanselva-ers-static.git`

#### Step 2

> cd into the application on a terminal and execute
`npm install`

#### Step 3
`npm start`

#### Step 4
> access http://localhost:3000 on web browser

## Usage

* User can log in according to credentials stored in the database
* User will be routed to manager or employee user interface depending on role
* Employee can view all past reimbursements
* Employee can submit new reimbursements
* Manager can view all reimbursements of all employees
* Manager can approve or deny new reimbursements

## License
This project uses the following license: GNU General Public License
