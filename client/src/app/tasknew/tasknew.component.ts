import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-tasknew',
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.css']
})
export class TasknewComponent implements OnInit {

  constructor(private taskService:TaskService, 
              private flashMessagesService:FlashMessagesService) { }

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
        taskNewForm.reset();;
        this.flashMessagesService.show('The new task has been successfully added!', 
          { cssClass: 'alert-success', timeout: 3000 }
        );
      });
    }
}
