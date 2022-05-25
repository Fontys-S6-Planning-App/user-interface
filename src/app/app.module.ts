import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { UpdateBoardComponent } from './components/update-board/update-board.component';
import { BoardDetailsComponent } from './components/board-details/board-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HeaderComponent,
    CreateBoardComponent,
    UpdateBoardComponent,
    BoardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
