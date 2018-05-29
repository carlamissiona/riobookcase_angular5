import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage'; 


@Injectable()
export class BooksService {

  
  constructor(private http:HttpClient, private storage:LocalStorageService ) {}

  getBooks() {
  			//"90d5c61dc3dda0b3730b575be5abb903"
       
		  	const headers = new HttpHeaders();	 

			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/book/api/list/`;
			
			let response = this.http.get(url,{ headers });

			return response;
    }


 	getOneBook(id: number, token: string ) {
  			//"90d5c61dc3dda0b3730b575be5abb903"
       
		  	const headers = new HttpHeaders();	 

console.log("private id "+id);
		let postform:FormData = new FormData();
		postform.append('id', id+''); 

console.log(postform);
			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/book/api/get/one/`;
			
			let response = this.http.post(url, postform , {headers});

			return response;
    }
}
