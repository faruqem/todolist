import { Component, OnInit, Input } from '@angular/core';
import { puts } from 'util';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task;

  ngOnInit() {
  }

}
