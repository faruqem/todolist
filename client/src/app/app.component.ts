import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TaskService ]
})
export class AppComponent {
  /*title = 'List of tasks:';
  constructor(private taskService:TaskService) {}

  //taskList = null;
  tasks = null;

  ngOnInit() {
    this.taskService.listTasks().subscribe((tasks) => {
      //this.taskList = tasks;
      this.tasks = tasks;
    });
  }*/
}
