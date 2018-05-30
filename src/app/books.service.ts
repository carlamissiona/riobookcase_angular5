import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage'; 
 


@Injectable()
export class BooksService {

  
  constructor(private http:HttpClient, private storage:LocalStorageService ) {}

  deleteBook(id,token) {

  			//"90d5c61dc3dda0b3730b575be5abb903"
       
		  	const headers = new HttpHeaders();	 

			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/book/api/delete/`;
			

			let postform:FormData = new FormData();
			postform.append('id', id); 
			postform.append('token', token); 
			let response = this.http.post(url,postform,{ headers });

			return response;
    }

 getGenre() {
  		
       
		  	const headers = new HttpHeaders();	 

			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/genre/api/list/`;
			
			let response = this.http.get(url,{ headers });

			return response;
  }
   getSection() {
  		
       
		  	const headers = new HttpHeaders();	 

			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/librarysection/api/list/`;
			
			let response = this.http.get(url,{ headers });

			return response;
  }


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


 	getOneBook(id: string, token: string ) {
       
		  	const headers = new HttpHeaders();	 

			let postform:FormData = new FormData();
			postform.append('id', id+''); 
			postform.append('token', token); 

 			headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');
			let url = `http://127.0.0.1:8000/book/api/get/one/`;
			
			let response = this.http.post(url, postform , {headers});

			return response;
    }

 

    updateBook( token: string , id: string , form: string ){

    		// form is stringified array

		  	const headers = new HttpHeaders();	 

			let postform:FormData = new FormData();
            
    		postform.append('form', form);
    		postform.append('id', id);
    		postform.append('token', token );
    		console.log(form);
    		console.log("====+++++++++");

    		headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');

				let url = `http://127.0.0.1:8000/book/api/edit/`;
			//let url = `http://127.0.0.1:8000/book/api/list/`;
			
			let response = this.http.post(url, postform , {headers});

			return response;


    }


    addBook( token: string , id: string , form: string ){

    		// form is stringified array

		  	const headers = new HttpHeaders();	 

			let postform:FormData = new FormData();
            
    		postform.append('form', form);
    		postform.append('id', id);
    		postform.append('token', token );
    		console.log(form);
    		console.log("====+++++++++");

    		headers.set('Origin', 'http://localhost:4200');
			headers.set('Access-Control-Allow-Headers', '*');
			headers.set('Access-Control-Request-Method', '*');
			headers.set('Access-Control-Allow-Origin', '*');
			headers.set('Content-Type', 'application/json');

		    let url = `http://127.0.0.1:8000/book/api/new/`;
			//let url = `http://127.0.0.1:8000/book/api/list/`;
			
			let response = this.http.post(url, postform , {headers});

			return response;


    }

    


}
