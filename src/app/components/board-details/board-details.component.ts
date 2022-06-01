import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {List} from '../../entities/list.entity';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../services/task.service';
import {TaskEntity} from '../../entities/task.entity';

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
  newListName: string;
  newTaskName: string;
  newTaskDescription: string;

  ngOnInit(): void {
    console.log(this.lists);
  }

  deleteList(id: number): void {
    this.listService.deleteList(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  createList(): void {
    // create a new list
    const list = new class implements List {
      boardId: number;
      id: number;
      name: string;
      tasks: TaskEntity[];
    };
    list.boardId = this.route.snapshot.params.id;
    list.name = this.newListName;
    this.listService.saveList(list);
    this.newListName = '';
  }

  createTask(listId): void {
    const task = new class implements TaskEntity {
      id: number;
      listId: number;
      name: string;
      description: string;
    };
    task.listId = listId;
    task.name = this.newTaskName;
    task.description = this.newTaskDescription;
    this.taskService.saveTask(task);
    this.newTaskName = '';
    this.newTaskDescription = '';
  }
}

