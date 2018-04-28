import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class TaskService {

  constructor(private http:HttpClient) { }
  private apiUrl = environment.apiUrl;
  taskList = [];

  listTasks() {
    return this.http.get(this.apiUrl + 'api/tasks');
  }

  //For next project
  /*
    getTask(id) {
      return this.http.get(this.apiUrl + 'api/tasks' + id);
    }

    createTask(taskObject) {

    }

    updateTask(id, data) {

    }

    deleteTask(id) {
      return this.http.delete(this.apiUrl + 'api/tasks' + id);
    }
  */

}