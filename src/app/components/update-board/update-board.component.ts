import { Component, OnInit } from '@angular/core';
import {Board} from '../../entities/board.entity';
import {BoardService} from '../../services/board-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-board',
  templateUrl: './update-board.component.html',
  styleUrls: ['./update-board.component.css']
})
export class UpdateBoardComponent implements OnInit {

  constructor(private boardService: BoardService, private router: Router, private route: ActivatedRoute,) { }

  board: Board = new class implements Board {
    id: number;
    title: string;
  };

  ngOnInit(): void {
    this.board.id = this.route.snapshot.params.id;
  }

  updateBoard(): void {
    this.boardService.updateBoard(this.board);
    this.router.navigate(['/overview']);
  }

}
