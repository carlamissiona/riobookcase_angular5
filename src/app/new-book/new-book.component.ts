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
    

  public book = {title:'' , author: '' , genre:0, section:0};
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
    console.log(form);
    console.log("adding ");
    this._bookService.addBook(this.token, this.book.id, form).subscribe(
      data => { 
        console.log("update===> after saved"); console.log(data);  
      	this.router.navigate(['/manage/books']);
      	this.book = data.book[0]; 
       
      	console.log(data[0]);
      	console.log("after fetch");

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
      	console.log(this.genres);
      	console.log("after fetch");

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
