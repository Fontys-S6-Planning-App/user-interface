import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BoardComponent} from './components/board/board.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes =
[
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: BoardComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
