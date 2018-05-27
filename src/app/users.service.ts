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
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Content-Type', 'application/json');
	let body = {'username' : username , 'angular_request' : '1' , 'password' : password , 'form_hash' : 'none'}
	let url = `http://localhost:8000/site/login/check/api`;
	// angular_request = 1 
 	let req =  this.http.post(url, body , { headers });
return req;

   }

}

