import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';

import { Router, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
 
export class EditBookComponent implements OnInit {
   
  public book = {'id': '', 'title': '', 'author': '' , 'book_id':''};
  public genres;
  public sections;
  public id; 
  public token;
 
    


  constructor(private _bookService: BooksService, private _globalService: GlobalService, private activeRoute: ActivatedRoute ,  private router: Router ) { }
 

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params;
    this.token = this._globalService.get_token();
    this.id = routeParams.id;
    this.getOneBook(); 
    
    this.getSections();
    this.getGenres();
   }

 

  getOneBook(){
  	this._bookService.getOneBook(this.id, this.token).subscribe(
      data => {      
        this.book = data.book[0];
       }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );


  }
  editBook(event){
    let form = JSON.stringify(this.book);
   
  	this._bookService.updateBook(this.token, this.book.book_id, form).subscribe(
      data => {  
      	this.book = data.book[0]; 
      	 
        this.router.navigate(['/manage/books/']);
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

 
  getSections(){
  
   
    this._bookService.getSection().subscribe(
      data => { 
        this.sections = data[0];          

      }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );
   
   
  }

}
