import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Board} from '../../entities/board.entity';
import {BoardService} from '../../services/board-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(
    private boardService: BoardService
  ) {
    this.boards = this.boardService.getAllBoards();
    console.log(this.boards);
}

  boards: Observable<Board[]>;

  ngOnInit(): void {
  }

}
