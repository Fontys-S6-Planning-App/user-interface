import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {List} from '../entities/list.entity';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  static readonly baseUrl: string = 'https://list-service.marktempelman.duckdns.org';
  // static readonly baseUrl: string = 'https://localhost:7186';

  constructor(private http: HttpClient) { }

  public getListsByBoardId(boardId: number): Observable<List[]> {
    return this.http.get<List[]>(ListService.baseUrl + '/lists/' + boardId);
  }

  public saveList(list: List): void {
    this.http.post(ListService.baseUrl + '/lists', list).subscribe();
  }

  public deleteList(id: number): void {
    this.http.delete(ListService.baseUrl + '/lists/' + id).subscribe();
  }

  public updateList(list: List): void {
    this.http.put(ListService.baseUrl + '/lists', list).subscribe();
  }
}
