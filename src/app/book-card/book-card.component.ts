import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { BooksService } from '../books.service';
import { Router, Routes, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: .2 }), {optional: true}),

        query('.box', stagger('.40s', [
          animate('1.3s ease-in', keyframes([
            style({opacity: .2, transform: 'translateY(65%)' }),
            style({opacity: .7, transform: 'translateY(90px)' }),
            style({opacity: .8, transform: 'translateY(0)' }),
          ]))]), {optional: false}),
         query('.card-title', stagger('.60s', [
          animate('1.5s ease-in', keyframes([
            style({opacity: .2, transform: 'translateY(65%)' }),
            style({opacity: .7, transform: 'translateY(30%)' }),
            style({opacity: .8, transform: 'translateY(0)' }),
          ]))]), {optional: false})
      ])
    ])

  ]
})
export class BookCardComponent implements OnInit {
  
 

  public books;
  public genres;


  constructor(private _bookService: BooksService, private _globalService: GlobalService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBooks();
     

   }

   getBooks() {
    this._bookService.getBooks().subscribe(
      data => { this.books = data[0]; console.log(data); },
    
      err => console.error(err),
         // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  borrow(id){
       
      this._bookService.borrowBook(id).subscribe(
        data => { 
         
      
          console.log(data);
          console.log("after borrow");
          alert("You had successfully borrowed a book.");
          this.router.navigate(['']);
        }, 
        err => console.error(err),
        () => console.log('done loading foods')
      );
   

  }


}
