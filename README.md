## Title
## Assignment #7/Final Project

## Description
This is a transactional website to create and read a project task list. It's done by building a general express framework for CRUD operations on the data - creating, reading, updating or deleting them - using REST APIs, and then calling those REST APIs both from server side Express and client side Angular framework based web interface to support the website.

## Purpose
This assignment is designed to let students demonstrate their knowledge of building a transactional website by combining Node, Express, REST APIs, Angular and MongoDB.

## Solution Highlights
1. The solution provides a way to manage a project task list.
2. There are two parts of the site - one is Admin interface, made with Express, and the other is end-user interface, made with Angular. Admin inteface theme is Red, Black & White, and end user interface theme is Cyan, Black & White.
3. All four CRUD operations are supported and distributed between these two interfaces by handling at least two operations by the Angular (Create, Read, Update) as per the Assignment 7 requirements. Delete is handled in the Admin interface.
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
1. Browse URL: http://165.227.45.199:8787/ 

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
9. Browse: http://localhost:8787/
10. For all testing follow the instructions provided above in the "How to Test (Production Server)" section by replacing the url part to: http://localhost:8787/
11. Press ctrl+c to stop the application.

## Assignment 7 Requirements and other Comments for the Grader

### Structure

#### Express
1. Express application structure as described in Assignment #5 (start scripts, view/route/model directories, mongo/mongoose, a data service class, etc)
* <strong>Comment: </strong> My Express application is based on Assignment 5 and meeting all its requirements.

2. A REST API for all four CRUD operations, plus any other APIs your app may need (if any)
* <strong>Comment: </strong> I included a REST API for for all four CRUD operations.

3. You application may use Web/HTML routes as well, if you like.
* <strong>Comment: </strong> All my site functionalitles consume REST APIs - both the server side using a node-fetch package, and client side using Angular or client side JavaScript.

4. You should serve your Angular application using a static route in Express. In other words, your server code will be delivering both your Angular code and your Express app.
* <strong>Comment: </strong> Yes, I am serving my Angular application using a static route in Express. My server code is delivering both my Angular (end-user part/client) and Express (admin part) interface.

#### Angular
1. Angular application structure as described in Assignment #6.
* <strong>Comment: </strong> Yes my Angular application is based on Assignment #6 and meeting all its requirements.

2. A router with at least two views/pages.
* <strong>Comment: </strong> Yes, I have a router with at least two view pages.

3. At least two CRUD operations must be supported via Angular using your REST API. You may support all four operations in Angular, or do fewer in Angular and the others through the Express Web/HTML side. Duplication is fine (both Angular and Web/HTML methods), if that makes sense for your application.
* <strong>Comment: </strong> My Angular (end-user/client) part does Create, Read and Update operations using my REST APIs, and my Express (admin) part does Update and Delete operations also consuming REST APIs using node-fetch module. My Angular part also gives the option to test all REST APIs using a client side JavaScript.

4. Your REST API access should be contained in a data service class.
* <strong>Comment: </strong> Yes, my REST API access is contained in a data service class ("task.service.ts" file in the "client" folder).


### Functionality
1. Your application should provide the ability to do all four CRUD operations that lets user(s) manage information stored in the database. The information can be whatever is relevant to your site - information about people, pictures, sports teams, universities, blog posts, or whatever you've chosen as the purpose of your project. Your application should support being able to retrieve a resource(s), create a new resource, update existing ones, and delete them (all four CRUD operations).
* <strong>Comment: </strong> Yes my application supports all four CRUD operations - Create, Read & Update in the Angular (Client/End-User) part, and Update & Delete in the Express (Server/Admin) part.

2. At least two types of CRUD operations must be supported in your Angular application.
* <strong>Comment: </strong> Yes, at least two types of CRUD operations - Create, Read and Update is supported in my Angular part.

3. A beautiful visual design is not a requirement for this assignment, but your application should have a clear, easy-to-use interface.
* <strong>Comment: </strong> I used Bootstrap 4 to create a simple user friendly interface.

4. Your application should do something. This doesn't mean it has to be a completed, polished application ready in every detail to deploy to the public. It does mean that it should not simply be a collection of short, trivial, independent examples of each function.
* <strong>Comment: </strong> My application gives the facility to maintain a project task list, and all functionlities are related & provide a well structured flow of operations. All the foundation works are done. Based on this core I can create a much larger application with lot more functionalities.


### Submission
1. You should check your code into the project on github, and deploy and run your code on DO. The server and client parts of your app should be in the same github repo.
* <strong>Comment: </strong> This is my project GitHub repo and my production code are deployed to DO. Both my server and client parts are in this GitHub repo.

2. Your submission to Canvas should include the URLs to your app running on DO and your github repo.
* <strong>Comment: </strong> My Digital Ocean production site URL is http://165.227.45.199:8787 and my this GitHub repo URL is: https://github.com/HarvardDCENode/assignment7-final-faruqem, both are submitted to Canvas.

3. If your application requires explanation, provide this in the project's readme.md file.
* <strong>Comment: </strong> This is my GitHub repo with all the necessary explanations for my application.

## Contributors:
* Student: Mohiuddin Faruqe
* Course: CSCIE -31 (Introduction to Web Application Development using Node.JS)
* School: Harvard Extension School