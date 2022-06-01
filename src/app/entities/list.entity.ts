import {TaskEntity} from './task.entity';

export interface List {
  id: number;
  boardId: number;
  name: string;
  tasks: TaskEntity[];
}
