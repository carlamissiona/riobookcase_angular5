import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BooksService {

  
  constructor(private http:HttpClient) {}

  getBooks() {
  			//"90d5c61dc3dda0b3730b575be5abb903"
       
		  	const headers = new HttpHeaders();	 

			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/book/api/list/`;
			 
			return  this.http.get(url,{ headers });
    }
 
}
