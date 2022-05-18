import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from './components/board/board.component';
import {AuthGuard} from './auth/auth.guard';
import {CreateBoardComponent} from './components/create-board/create-board.component';
import {UpdateBoardComponent} from './components/update-board/update-board.component';

const routes: Routes =
[
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: BoardComponent, canActivate: [AuthGuard] },
  { path: 'board/create', component: CreateBoardComponent, canActivate: [AuthGuard] },
  { path: 'board/update/:id', component: UpdateBoardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
