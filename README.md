## Title
## A Test To Do List Project

## Description
This is a transactional website to create and read a project task list. It's done by building a general express framework for CRUD operations on the data - creating, reading, updating or deleting them - using REST APIs, and then calling those REST APIs both from server side Express and client side Angular framework based web interface to support the website.

## Purpose
This app is designed to demonstrate knowledge of building a transactional website by combining Node, Express, REST APIs, Angular and MongoDB.

## Solution Highlights
1. The solution provides a way to manage a project task list.
2. There are two parts of the site - one is Admin interface, made with Express, and the other is end-user interface, made with Angular. Admin inteface theme is Red, Black & White, and end user interface theme is Cyan, Black & White. This color distinction will help a user to know in which interface they are. Only Admin is allowed to update a task's start & end date, and to delete a task.
3. All four CRUD operations are supported and distributed between these two interfaces by handling at least two operations by the Angular (Create, Read, Update). Delete is handled in the Admin interface.
4. End user (Angular) part can create a new task, list existing task & do partial update (only task description and assignee) of an existing task.
5. Admin part can full update (all four fields inculding task start & end date) as well as delete an existing task. Admin part also has the option to test the REST APIs by calling client side JavaScript.
6. All CRUD operations, both server side and client side, are done consuming the rest APIs. 
7. Server side interface uses a "node-fetch" (https://www.npmjs.com/package/node-fetch) package to consume the REST APIs. 
8. "Test APIs" link/sub-menu interface use the client side JavaScript to consume the REST APIs.
9. All tasks are saved in the online MongoDB Atlas database.

## Tools Used
1. Node.js
2. Express framework
3. Angular 2+
4. Pug templating engine
5. MongoDB Atlas to store data
6. Mongoose ODM (Object Data Modeling) library
7. Bootstrap 4
8. Initial site was generated using Express applcation generator
9. Angular CLI was used to create initial Angular project
10. Packages and dependencies are managed using node package manager
11. HTML5, CSS3 and JavaScript
12. TypeScript
13. Various other npm packages

## How to Test (Production Server):
1. Browse URL: http://165.227.45.199:8181/ 

    <strong>Testing the Angular (End-User/Client) Interface:</strong>
    1. Homepage  displays current task list showing task description & assignee, and option to create a new task.
    2. Use the "Add a New Task" option to create a new task. As soon as a new task is created it will be shown in the task list at the bottom. 
    2. Each task list on the home page has a "View Details" link next to it. Clicking on the this link will take you to the "Task Details" page where you can see all the fields.
    3. Clicking on the "Edit Task" button on the details page will take you to the "Edit Task" page where you can update a task's desciption and assignee. To update the start and end date, and also to delete a task, you need to go to the "Admin" interface.

    <strong>Testing the Express (Admin) Interface:</strong>
    1. Click on the "Admin" menu from the Angular interface. This will take you to the Admin interface made with Express. It will show all the task list on the Admin home page.
    2. Use the "Update" and "Delete" link next to each task to update or delete a task. Any change will be reflected in the task list displayed on the Admin home page.
    3. If an operation (update or delete) is successful, a success message will be displayed.
    4. All operations consume REST APIs.
    5. While in the admin interface, click on the "Home" menu item to go back to Angular/End-User interface (site's main home page) or "Admin-Home" menu item to go back to the admin's home page.
    6. Use the "Test APIs" sub-menu from the top menu bar to test the REST APIs.
    7. Create a New Task: Fill up the task form (at least provide "Description") and then click "Create New" button. Use "Read All" button to check the new task.
    8. Retrieve all Tasks: Just click the "Read All" button. Use this button to retrieve and copy a Task Id; or to check if a create, update or delete is successfull.
    9. Retrieve a Particular Task: Copy and paste the ID of a task into the "Task ID" field and then click "Read by Id" button.
    10. Update a Task: Copy and paste the ID of a task into the "Task ID" field, use the "Read by Id" button to display the fields values, change any or all fields, and then click "Update". Use "Read All" button to check the update.
    11. Delete a Task: Copy and paste the ID of a task into the "Task ID" field and then click "Delete" button. Use "Read All" button to check the deletion.

## How to Install and Test Locally:
1. Download and install Node.JS from https://nodejs.org/en/download/ if you don't already have Node.JS. 
2. Also you need to have the necessary setup to install and run an Angular App locally on your machine. Please, check the documentation here: https://angular.io/docs.
3. Download or clone this Assignment 7 repository from GitHub: git@github.com:HarvardDCENode/assignment7-final-faruqem.git
4. Go to the main Angular client directory "assignment7-final-faruqem/client" (notice the "client" sub-folder name at the end) and run $ npm install to install any depedencies. Please, note that you need to go inside the "client" directory to run `$ npm install`, because this where my Client package.json file is.
5. Please, note that for this project I already shared the "dist" folder so you don't need to build it. Just in case you would like to rebuild, go to the "client" directory & run `$ ng build` or `$ ng build --env=prod` based on which environment file (development or production respectively) you would like to use.  
6. Go to the main project directory "assignment7-final-faruqem/server" (notice the "server" sub-folder name at the end) and run `$ npm install` (Please, note that you need to go inside the "server" directory to run $ npm install, because this where my Node/Express package.json file is, and also you need to run `$ npm start` from inside this directory because this is my main project folder.)
7. Create a file named .env in the "server" folder and insert the following two lines with your MongoDB user name and password:
    ```
    DB_USER=<Your_DB_USER>
    DB_PWD=<Your_DB_PW> 
    ```
8. Now run command `$ npm start` from the main project directory "server". 
9. Browse: http://localhost:8181/
10. For all testing follow the instructions provided above in the "How to Test (Production Server)" section by replacing the url part to: http://localhost:8181/
11. Press ctrl+c to stop the application.

## Contributors:
* Mohiuddin Faruqe
