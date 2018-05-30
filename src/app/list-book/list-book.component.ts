import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

import { GlobalService } from '../global.service';

import { ActivatedRoute } from '@angular/router';

import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

 
  public books;
  public genres;
  public token;
  public id;


  constructor(private _bookService: BooksService, private activeRoute: ActivatedRoute ,
              private _globalService: GlobalService,  private router: Router) { }

  ngOnInit() {
    this.getBooks();
    this.token = this._globalService.get_token();
    console.log(  this.id + "----"+ this.token);
    //  console.log(this.book);
    console.log('Above is the book form obj!!!!!');

   }

   getBooks() {
    this._bookService.getBooks().subscribe(

      data => { this.books = data[0]; console.log(data);},

      err => console.error(err),
      
      () => console.log('done loading foods')
    );
  }

  deleteBook(id) {

    console.log(this.token+'deleting books' + id);
    this._bookService.deleteBook(id,this.token).subscribe(
       // the first argument is a function which runs on success
      data => { 
            console.log(data);



      },
       // the second argument is a function which runs on error
      err => console.error(err),
         // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }


}
