import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username ="adminme";
  public password;
 
  constructor(private _userService: UsersService) { }

  ngOnInit() {

  }
   

  loginCheck(event) {
  		console.log("Revel");
  		console.log(event);
  		console.log(this.username);
  		console.log(this.password);
  		this._userService.getLoginCheck(this.username,this.password).subscribe(
  			  data => { console.log(data); console.log("hohohoho") },
  			  err => console.error(err),
		      // the third argument is a function which runs on completion
		      () => console.log('done login')
  		);

     
  }

}
