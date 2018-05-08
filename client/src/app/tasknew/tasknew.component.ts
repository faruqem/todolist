import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasknew',
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.css']
})
export class TasknewComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }

  //When a new task is created:
  @Output() taskNew = new EventEmitter();

  //Initilize a new task variable
  //task:any = {};
  //Task class is defined in task.ts
  task: Task = {
    description: null,
    startDate: null,
    endDate: null,
    assignee: null
  };

  //saveTask(taskNewForm):void {
  saveTask(taskNewForm):void {
    this.taskService.createTask(this.task)
      .subscribe((task)=>{
        this.taskNew.emit();
        taskNewForm.reset();
      });
    }
}
