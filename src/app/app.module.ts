import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {  MatButtonModule, MatToolbarModule  } from '@angular/material';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { ListSectionComponent } from './list-section/list-section.component';
import { HomeComponent } from './home/home.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksService } from './books.service';
import { NewGenreComponent } from './new-genre/new-genre.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewBookComponent
  },
  {
    path: 'new/genre',
    component: NewGenreComponent
  },
  {
    path: 'overview/:id',
    component: OverviewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoginComponent,
    ProfileComponent,
    NewBookComponent,
    ListBookComponent,
    ListGenreComponent,
    ListSectionComponent,
    HomeComponent,
    BookCardComponent,
    NewGenreComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule ,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
   
  ],
  exports: [RouterModule,MatButtonModule],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    
     



}
