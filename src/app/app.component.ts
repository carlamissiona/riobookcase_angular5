import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';  
import { GlobalService } from './global.service';

import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'app';
  public isActive = false ;
  
  public books;
  public genres;
 

  constructor(private _bookService: BooksService,  private _globalService: GlobalService, private router: Router ) { }

   ngOnInit() {
    this.getBooks();
    // this.getGenres();

   }
  logout(){
        alert("hi logout");

        this.router.navigate(['']);
        this._globalService.set_loginMessage("You are not Login");
        this._globalService.set_isLoggedIn(false);
        this._globalService.clear_userRole();
        this._globalService.clear_token();
        this._globalService.clear_isAdmin();
        this._globalService.clear_username(); 
  }



    getBooks() {
    this._bookService.getBooks().subscribe(
     	 // the first argument is a function which runs on success
      data => { this.books = data; },
     	 // the second argument is a function which runs on error
      err => console.error(err),
      	 // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
}
