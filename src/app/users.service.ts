import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class UsersService {


 constructor(private http:HttpClient) {}

  getLoginCheck(username, password) { 
    console.log(username);
    console.log("hihii");

  		const headers = new HttpHeaders();	  
		let body = {'username' : username , 'angular_request' : '1' , 'password' : password , 'postForm_hash' : 'none'}
		headers.set('Origin', 'http://localhost:4200');
		headers.set('Access-Control-Allow-Headers', '*');
		headers.set('Access-Control-Request-Method', '*');
		headers.set('Access-Control-Allow-Origin', '*'); 
		let url = `http://127.0.0.1:8000/login/api/check`;
		 
		let postForm:FormData = new FormData();
		postForm.append('username', username);
		postForm.append('password', password);
		postForm.append('angular_request', '1'); 


		let req = this.http.post(
			url, postForm,
			{headers}
		);
		console.log( "=====" );
		console.log( body );
		console.log( req );
		return req;
 
 

   }

}

