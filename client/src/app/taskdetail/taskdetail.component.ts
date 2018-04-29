import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css'],
  providers: [TaskService]
})
export class TaskdetailComponent implements OnInit {

  constructor(  private route:ActivatedRoute, 
                private taskService:TaskService,
                private router: Router) { }

  ngOnInit() {
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
    this.task.startDate = obj.startDate;
    this.task.endDate = obj.endDate;
    this.task.assignee = obj.assignee;
    this.task.updateTask(this.task._id, this.task) 
      .subscribe((result) => {
        location.reload();
    });
  }

  //Deletes task using TaskService
  deleteTask(){
    if (confirm(`Are you sure you want to delete ${this.task.description}?`)){
      console.log(`deleting ${this.task._id}`);
      this.taskService.deleteTask(this.task._id)
        .subscribe((result)=>{
          alert(`Task ${this.task.description} has been deleted`);
          this.router.navigate(['/']);
        })
      }
  }
}
