import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {


  constructor(private http:HttpClient) {}

  getBooks() {
        return this.http.get('http://localhost:8000/book/api/list');
    }

}
