import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, Routes, RouterModule } from '@angular/router';


import { UsersService } from '../users.service';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username ="adminme";
  public password;
 
  constructor(private _userService: UsersService, private _globalService: GlobalService, private router: Router) { }

  ngOnInit() {

  }
   

  loginCheck(event) {
  		console.log("Revel");
  		console.log(event);
  		console.log(this.username);
  		console.log(this.password);
  		this._userService.getLoginCheck(this.username,this.password).subscribe(
  			  data => {

            console.log(data); console.log("hohohoho") 
            if( data['error_login'] == 1 ){

              console.log("Show error" + data['msg']);
              this._globalService.errorMessage = data['msg'];
            }else{
               // if login valid
               console.log("redirect to list with borrow button seen");
               console.log(data);
               this._globalService.loginMessage = "You are login as "+ data['user_log_username'];
               console.log(data['user_log_role'].includes('ROLE_ADMIN'));
                  this._globalService.isLoggedIn= true;
              if( data['user_log_role'].includes('ROLE_ADMIN') == true ) {
                  this._globalService.userRole = "Admin";
                  this._globalService.isAdmin= true;
                
       
              }else{
                  this._globalService.isAdmin= false;
               }

               this.router.navigate(['/']);


          },
  			  err => console.error(err),
		      // the third argument is a function which runs on completion
		      () => console.log('done login')
  		);

     
  }

}
