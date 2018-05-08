import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class TaskService {

  constructor(private http:HttpClient) { }
  private apiUrl = environment.apiUrl;

  listTasks() {
    return this.http.get(this.apiUrl + 'api/tasks');
  }

  getTask(id) {
    return this.http.get(this.apiUrl + 'api/tasks/' + id);
  }

  createTask(data) {
    return this.http.post(this.apiUrl + 'api/tasks/', data);
  }

  updateTask(id, data) {
    return this.http.put(this.apiUrl + 'api/tasks/' + id, data);
  }
  
  /** 
   * Delete functionality has been moved to Express
   * Kept here for code completeness and future use
   */
  deleteTask(id) {
    return this.http.delete(this.apiUrl + 'api/tasks/' + id);
  } 
  
}