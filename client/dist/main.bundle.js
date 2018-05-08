webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tasklist_tasklist_component__ = __webpack_require__("./src/app/tasklist/tasklist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tasknew_tasknew_component__ = __webpack_require__("./src/app/tasknew/tasknew.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__taskdetail_taskdetail_component__ = __webpack_require__("./src/app/taskdetail/taskdetail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
    { path: 'tasklist', component: __WEBPACK_IMPORTED_MODULE_7__tasklist_tasklist_component__["a" /* TasklistComponent */] },
    { path: 'task/:id', component: __WEBPACK_IMPORTED_MODULE_9__taskdetail_taskdetail_component__["a" /* TaskdetailComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tasklist_tasklist_component__["a" /* TasklistComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tasknew_tasknew_component__["a" /* TasknewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__taskdetail_taskdetail_component__["a" /* TaskdetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    TaskService.prototype.listTasks = function () {
        return this.http.get(this.apiUrl + 'api/tasks');
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.apiUrl + 'api/tasks/' + id);
    };
    TaskService.prototype.createTask = function (data) {
        return this.http.post(this.apiUrl + 'api/tasks/', data);
    };
    TaskService.prototype.updateTask = function (id, data) {
        return this.http.put(this.apiUrl + 'api/tasks/' + id, data);
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete(this.apiUrl + 'api/tasks/' + id);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <span class='font-weight-bold'>Description:</span> {{ task.description }} | \n  <!--\n  <span class='font-weight-bold'>Start Date:</span> {{ task.startDate | date: 'yyyy-MM-dd' }} | \n  <span class='font-weight-bold'>End Date:</span> {{ task.endDate  | date: 'yyyy-MM-dd'}} |\n  -->\n  <span class='font-weight-bold'>Assignee:</span> {{ task.assignee }}\n  <a routerLink=\"/task/{{ task._id }}\">View Details</a>\n</p>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { puts } from 'util';
var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "task", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("./src/app/task/task.component.html"),
            styles: [__webpack_require__("./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/taskdetail/taskdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/taskdetail/taskdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"task\">\n  <!--<h5> {{ task.description }} Details</h5>-->\n  <div class=\"detailtask\"></div>\n  <div *ngIf=\"!editing\">\n    <h5>Task Details</h5><br>\n    <br>\n    <div><span class='font-weight-bold'>Description: </span> {{ task.description }}</div>\n    <br>\n    <div><span class='font-weight-bold'>Start Date: </span>{{ task.startDate | date: 'yyyy-MM-dd' }}</div>\n    <br>\n    <div><span class='font-weight-bold'>End Date: </span>{{ task.endDate | date: 'yyyy-MM-dd' }}</div>\n    <br>\n    <div><span class='font-weight-bold'>Assignee: </span>{{ task.assignee }}</div>\n    <br>\n    <button class=\"btn btn-info\" (click)=\"setEditMode(true)\">Edit Task</button>\n    <!--<button type=\"button\" (click)=\"deleteTask()\">Delete this Task</button>-->\n    <a class=\"btn btn-info\" href=\"/#/\">Back to Task List</a>\n  </div>\n</div>\n\n<div *ngIf=\"editing\">\n  <h5> Edit Task</h5><br>\n  <h6>Go to <a href=\"/admin\">Admin</a> menu to update dates or delete a task.</h6>\n  <br>\n  <form #form=\"ngForm\" (ngSubmit)=\"updateTask(form.value)\">\n    <div class=\"form-group\">\n          <label for=\"description\" class='font-weight-bold'>Description:</label>\n          <input #description name=\"description\" class=\"form-control\" [ngModel]=\"task.description\">\n          <br />\n          <!--\n          <label for=\"startDate\">Start Date:</label>\n          <input #startdate type=\"date\" name=\"startDate\" class=\"form-control\" [ngModel]=\"task.startDate\">\n          <br />\n          <label for=\"endDate\">End Date:</label>\n          <input #enddate type=\"date\" name=\"endDate\" class=\"form-control\" [ngModel]=\"task.endDate\">\n          <br />\n          -->\n          <label for=\"assignee\" class='font-weight-bold'>Assignee:</label>\n          <input name=\"assignee\" class=\"form-control\" [ngModel]=\"task.assignee\">\n    </div>\n    <button class=\"btn btn-info\" type=\"submit\">Save</button>\n    <button class=\"btn btn-info\" (click)=\"setEditMode(false)\">Cancel</button>\n    <!--<button type=\"button\" (click)=\"deleteTask()\">Delete this Task</button>-->\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/taskdetail/taskdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskdetailComponent = /** @class */ (function () {
    function TaskdetailComponent(route, taskService, router) {
        this.route = route;
        this.taskService = taskService;
        this.router = router;
        this.editing = false;
    }
    TaskdetailComponent.prototype.ngOnInit = function () {
        this.getTask();
    };
    TaskdetailComponent.prototype.setEditMode = function (mode) {
        this.editing = (mode ? true : false);
    };
    TaskdetailComponent.prototype.getTask = function () {
        var _this = this;
        var param = this.route.snapshot.paramMap.get('id');
        this.taskService.getTask(param)
            .subscribe(function (task) {
            _this.task = task;
        });
    };
    TaskdetailComponent.prototype.updateTask = function (obj) {
        var _this = this;
        this.task.description = obj.description;
        this.task.startDate = obj.startDate;
        this.task.endDate = obj.endDate;
        this.task.assignee = obj.assignee;
        this.taskService.updateTask(this.task._id, this.task)
            .subscribe(function (result) {
            //location.reload();
            _this.router.navigate(['/']);
        });
    };
    //Deletes task using TaskService
    TaskdetailComponent.prototype.deleteTask = function () {
        var _this = this;
        if (confirm("Are you sure you want to delete " + this.task.description + "?")) {
            console.log("deleting " + this.task._id);
            this.taskService.deleteTask(this.task._id)
                .subscribe(function (result) {
                alert("Task " + _this.task.description + " has been deleted");
                _this.router.navigate(['/']);
            });
        }
    };
    TaskdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-taskdetail',
            template: __webpack_require__("./src/app/taskdetail/taskdetail.component.html"),
            styles: [__webpack_require__("./src/app/taskdetail/taskdetail.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TaskdetailComponent);
    return TaskdetailComponent;
}());



/***/ }),

/***/ "./src/app/tasklist/tasklist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<h4 class=\"text-info\">Project Task List</h4>\n<br>\n<app-tasknew (taskNew)=\"reloadTaskList()\"></app-tasknew>\n\n<br>\n<p></p>\n<h5>{{ title }}</h5>\n<h6>To view/edit a task click on <strong>View Details</strong> next to specfic task.</h6>\n<br>\n<div>\n    <app-task *ngFor = 'let taskObject of taskList' \n        [task] = 'taskObject'>\n    </app-task>\n</div>\n<br>\n"

/***/ }),

/***/ "./src/app/tasklist/tasklist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasklistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasklistComponent = /** @class */ (function () {
    function TasklistComponent(taskService) {
        this.taskService = taskService;
        this.title = 'List of Tasks:';
        //@Input() task;
        this.taskList = null;
    }
    TasklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.listTasks().subscribe(function (tasks) {
            _this.taskList = tasks;
        });
    };
    TasklistComponent.prototype.reloadTaskList = function () {
        var _this = this;
        this.taskService.listTasks().subscribe(function (tasks) {
            _this.taskList = tasks;
        });
    };
    TasklistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasklist',
            template: __webpack_require__("./src/app/tasklist/tasklist.component.html"),
            styles: [__webpack_require__("./src/app/tasklist/tasklist.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]])
    ], TasklistComponent);
    return TasklistComponent;
}());



/***/ }),

/***/ "./src/app/tasknew/tasknew.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tasknew/tasknew.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5> Add a New Task:</h5>\n  <form #taskNewForm=\"ngForm\" (ngSubmit)=\"saveTask(taskNewForm)\">\n    <div class=\"form-group\">\n      <label>Description* (Min 5 Characters!):\n        <input required minlength=\"5\" #description=\"ngModel\" placeholder=\"Task Description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"task.description\">\n      </label>\n    </div>\n    <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"description.errors.required\">\n        Description is required.\n      </div>\n      <div *ngIf=\"description.errors.minlength\">\n        Description must be at least 5 characters long.\n      </div>\n    </div>    \n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label>Start Date:\n          <input type=\"date\" name=\"startdate\" class=\"form-control\" [(ngModel)]=\"task.startDate\">\n        </label><span>&nbsp;&nbsp;</span>\n      </div>\n      <div class=\"form-group\">\n        <label>End Date:\n          <input type=\"date\" name=\"enddate\" class=\"form-control\" [(ngModel)]=\"task.endDate\">\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Assignee:\n        <input placeholder=\"Assigned To\" name=\"assignee\" class=\"form-control\" [(ngModel)]=\"task.assignee\">\n      </label>\n    </div>\n    \n    <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!taskNewForm.valid\">Save Task</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/tasknew/tasknew.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasknewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("./src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasknewComponent = /** @class */ (function () {
    function TasknewComponent(taskService) {
        this.taskService = taskService;
        //When a new task is created:
        this.taskNew = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        //Initilize new task variable
        //task:any = {};
        this.task = {
            description: null,
            startDate: null,
            endDate: null,
            assignee: null
        };
    }
    TasknewComponent.prototype.ngOnInit = function () {
    };
    //saveTask(taskNewForm):void {
    TasknewComponent.prototype.saveTask = function (taskNewForm) {
        var _this = this;
        this.taskService.createTask(this.task)
            .subscribe(function (task) {
            _this.taskNew.emit();
            taskNewForm.reset();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TasknewComponent.prototype, "taskNew", void 0);
    TasknewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasknew',
            template: __webpack_require__("./src/app/tasknew/tasknew.component.html"),
            styles: [__webpack_require__("./src/app/tasknew/tasknew.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]])
    ], TasknewComponent);
    return TasknewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: '/'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map