import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';  


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
  

  constructor(private _bookService: BooksService) { }

   ngOnInit() {
    this.getBooks();
    // this.getGenres();

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
