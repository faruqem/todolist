import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [ TaskService ]
})
export class TasklistComponent implements OnInit {
  title = 'List of Tasks:';
  constructor(private taskService:TaskService) { }

  //@Input() task;
  taskList = null;

  ngOnInit() {
    this.taskService.listTasks().subscribe((tasks) => {
      this.taskList = tasks;
    });
  }

  reloadTaskList():void{
    this.taskService.listTasks().subscribe((tasks)=>{
      this.taskList = tasks;
    });
   }
}
