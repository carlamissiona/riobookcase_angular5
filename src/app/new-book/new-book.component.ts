import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

import { ActivatedRoute } from '@angular/router';

import { Router, Routes, RouterModule } from '@angular/router';

import { GlobalService } from '../global.service';
 



@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
    

  public book = {'id': '', 'title': '', 'author': '' , 'book_id':''};
  public token;
  public id;
  public genres;
  public sections;


  constructor(private _bookService: BooksService, private activeRoute: ActivatedRoute ,
              private _globalService: GlobalService, private router: Router) { }
  
 
  ngOnInit() {

    this.token = this._globalService.get_token();
    this.getGenres();
    this.getSection();
  }
  addBook(){

    let form = JSON.stringify(this.book);
    console.log(this.book); console.log("----");
    
    this._bookService.addBook(this.token, form).subscribe(
      data => {  
      	this.router.navigate(['/manage/books']);
      	this.book = data.book[0]; 
        

      }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );

  }
   
 
 
  getGenres(){
 
  	this._bookService.getGenre().subscribe(
      data => { 
      	//this.router.navigate(['/edit/book/'+this.book.id]);
      	this.genres = data[0];  

      }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );
   
  }

 
  getSection(){
  
   
  	this._bookService.getSection().subscribe(
      data => { 
        console.log("all section ===> "); console.log(data);  
      	this.sections = data[0];       	 
      	console.log(data[0]);
      	console.log("after fetch section");

      }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );
   
   
  }

}
