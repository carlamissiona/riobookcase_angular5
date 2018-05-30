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

  
  public book = {};
  public genres;
  public sections;
  public id; 
  public token;
 
  


  constructor(private _bookService: BooksService, private _globalService: GlobalService, private activeRoute: ActivatedRoute , 
  			 private router: Router ) { }
 

  ngOnInit() {
    let routeParams = this.activeRoute.snapshot.params;
    this.token = this._globalService.get_token();
    this.id = routeParams.id;

    console.log(  this.id + "----"+ this.token);
    //this.getOneBook();
    //this.book = {form: {firstName:"John", lastName:"Doe", age:46 }};
    console.log(this.book);
    console.log('Above is the book form obj!!!!!');
    this.getOneBook();
    this.getSections();
    this.getGenres();
   }

 

  getOneBook(){
  	this._bookService.getOneBook(this.id, this.token).subscribe(
      data => {  this.book = data.book[0];
        //this.book = data;
       }, 
      err => console.error(err),
      () => console.log('done loading foods')
    );


  }
  editBook(event){
    let form = JSON.stringify(this.book);
    console.log(this.book); console.log("----");
    console.log(form);
    console.log("editeditclicked");
  	this._bookService.updateBook(this.token, this.book.id, form).subscribe(
      data => { 
        console.log("update===> after saved"); console.log(data);  
      	//this.router.navigate(['/edit/book/'+this.book.id]);
      	this.book = data.book[0]; 
      	console.log(data.book);
      	console.log(data);
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

 
  getSections(){
  
   
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
