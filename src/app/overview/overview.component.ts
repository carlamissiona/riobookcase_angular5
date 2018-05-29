import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  
  public books;
  public genres;
  public id;


  constructor(private _bookService: BooksService, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.getBooks();
    // this.getGenres();
    let routeParams = this.activeRoute.snapshot.params;
    this.id = routeParams.id;
    console.log(this.books);
    console.log(this.id);

   }

   getBooks() {
   console.log();
    this._bookService.getBooks().subscribe( 
      data => {
        this.books = data[0]; 
        console.log(data);

      },       
      err => console.error(err),
         
      () => console.log('done loading foods')
    );
  }

}
