import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

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

  //Initilize new task variable
  task:any = {};

  //saveTask(taskNewForm):void {
  saveTask(taskNewForm):void {
    this.taskService.createTask(this.task)
      .subscribe((task)=>{
        this.taskNew.emit();
        taskNewForm.reset();
      });
    }
}
