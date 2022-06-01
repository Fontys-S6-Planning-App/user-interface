import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskEntity} from '../entities/task.entity';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  static readonly baseUrl: string = 'https://task-service.marktempelman.duckdns.org';
  // static readonly baseUrl: string = 'https://localhost:7020';

  constructor(private http: HttpClient) { }

  public getTasksByListId(listId: number): Observable<TaskEntity[]> {
    console.log(TaskService.baseUrl + '/tasks/' + listId);
    return this.http.get<TaskEntity[]>(TaskService.baseUrl + '/tasks/' + listId);
  }
}
