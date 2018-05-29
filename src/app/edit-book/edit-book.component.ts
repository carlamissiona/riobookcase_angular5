import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  
  public book;
  public genres;
  public id;
  public token;
 
  


  constructor(private _bookService: BooksService, private _globalService: GlobalService, private activeRoute: ActivatedRoute  ) { }
 

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params;
    this.token = this._globalService.get_token();
    this.id = routeParams.id;

    console.log(  this.id + "----"+ this.token);
    this.getOneBook();
    // this.getGenres();

   }

    

  getOneBook(){
  	this._bookService.getOneBook(this.id, this.token).subscribe(
      data => {  console.log('this is one book');  this.book = data[0]; console.log(data);}, 
      err => console.error(err),
      () => console.log('done loading foods')
    );


  }
 /* editBook(){
  	this._bookService.updateBook(this.token, this.book.id, this.book[form]).subscribe(
      data => { this.books = data[0]; console.log(data);}, 
      err => console.error(err),
      () => console.log('done loading foods')
    );


  }*/

}
