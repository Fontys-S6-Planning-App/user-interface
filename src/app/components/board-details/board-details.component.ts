import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {List} from '../../entities/list.entity';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {

  constructor(private listService: ListService, private route: ActivatedRoute) {
    this.lists = this.listService.getListsByBoardId(this.route.snapshot.params.id);
  }


  lists: Observable<List[]>;

  ngOnInit(): void {
  }

  deleteList(id: number): void {
    this.listService.deleteList(id);
  }
}

