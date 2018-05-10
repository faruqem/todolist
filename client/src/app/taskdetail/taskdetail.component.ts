import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css'],
  providers: [TaskService]
})
export class TaskdetailComponent implements OnInit {

  constructor(  private route:ActivatedRoute, 
                private taskService:TaskService,
                private router: Router,
                private flashMessagesService: FlashMessagesService
              ) { }

  ngOnInit() {
    this.getTask();
  }

  task:any;
  editing:boolean=false;
  setEditMode(mode):void{
    this.editing = (mode ? true:false);
  }

  getTask():void {
    const param = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(param)
      .subscribe((task) => {
        this.task = task;
      })
  }

  updateTask(obj:any):void {
    this.task.description = obj.description;
    //this.task.startDate = obj.startDate; //Moved to Express Admin interface
    //this.task.endDate = obj.endDate; //Moved to Express Admin interface
    this.task.assignee = obj.assignee;
    this.taskService.updateTask(this.task._id, this.task) 
      .subscribe((result) => {
        location.reload();
        /*this.flashMessagesService.show('The task has been successfully updated!', 
            { cssClass: 'alert-success', timeout: 3000 }
        );*/
    });
  }

  /**
   * This function deletes task using TaskService
   * Anyway this delete responsibility has been moved to Express part,
   * it is kept here for future usage only.
   */
  /*
  deleteTask(){
    this.taskService.deleteTask(this.task._id)
        .subscribe((result)=>{
          this.router.navigate(['/']);
          this.flashMessagesService.show('The task has been successfully deleted!', 
                { cssClass: 'alert-success', timeout: 2000 }
          );
    })
  }
  */
}
