import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Board} from '../entities/board.entity';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  static readonly baseUrl: string = 'https://board-service.marktempelman.duckdns.org';
  // static readonly baseUrl: string = 'https://localhost:7186';

  constructor(private http: HttpClient) { }

  public getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(BoardService.baseUrl + '/board');
  }

  public saveBoard(board: Board): void {
    this.http.post(BoardService.baseUrl + '/board', board).subscribe();
  }

  public deleteBoard(id: number): void {
    this.http.delete(BoardService.baseUrl + '/board/' + id).subscribe();
  }

  public updateBoard(board: Board): void {
    this.http.put(BoardService.baseUrl + '/board', board).subscribe();
  }
}
