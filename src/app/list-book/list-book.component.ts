import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

 
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
      data => { this.books = data[0]; console.log(data);},
       // the second argument is a function which runs on error
      err => console.error(err),
         // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }


}
