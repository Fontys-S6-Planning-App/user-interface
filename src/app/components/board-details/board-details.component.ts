import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {List} from '../../entities/list.entity';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {

  constructor(private listService: ListService, private route: ActivatedRoute, private taskService: TaskService) {
    this.listService.getListsByBoardId(this.route.snapshot.params.id).subscribe(l => {
      this.lists = l;
      this.lists.forEach(li => {
        this.taskService.getTasksByListId(li.id).subscribe(t => li.tasks = t);
      });
    });
  }


  lists: List[];

  ngOnInit(): void {
    console.log(this.lists);
  }

  deleteList(id: number): void {
    this.listService.deleteList(id);
  }
}

