import { Component, OnInit } from '@angular/core';
import {Board} from '../../entities/board.entity';
import {BoardService} from '../../services/board-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css']
})
export class CreateBoardComponent implements OnInit {

  board: Board = new class implements Board {
    id: number;
    title: string;
  };

  constructor(private boardService: BoardService, private router: Router) { }

  ngOnInit(): void {
  }

  saveBoard(): void {
    this.boardService.saveBoard(this.board);
    this.router.navigate(['/overview']);
  }
}
