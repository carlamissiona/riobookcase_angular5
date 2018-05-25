import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
 



@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
    
//  books: Obj[];
  
//  regModel: Book;
  
//  showNew: Boolean = false; 
   
  constructor(private bookservice: BooksService) {
    // fetch books
    	 
  }
  

  ngOnInit() {

  }

}
