import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../entities/board.entity';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  public getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>('https://localhost:7186/board');
  }
}
