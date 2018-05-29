import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class GlobalService {
 // reference
  public loginMessage: string ="You are not Login";
  public errorMessage: string ="";
  public userRole: string ="";
  public username: string ="";
  public loginUser: string =""; // real name
  public token: string ="";
  public isAdmin: boolean = false;
  public isLoggedIn: boolean = false;
 

  constructor(private storage:LocalStorageService) { }

  get_loginMessage() {
       this.loginMessage = this.storage.retrieve('loginMessage');
       return this.loginMessage;
  }
  set_loginMessage(value: string) {
  	   this.loginMessage = value;
       this.storage.store('loginMessage',this.loginMessage);
  }
  clear_loginMessage(){
      this.storage.clear('loginMessage'); 
      this.loginMessage ="";
  }

  /* errorMessage */
  get_errorMessage() {
        this.errorMessage = this.storage.retrieve('errorMessage');
        return this.errorMessage;
  }
  set_errorMessage(value: string) {
      this.errorMessage = value;
      this.storage.store('errorMessage',this.errorMessage);
  }
  clear_errorMessage(){
      this.storage.clear('errorMessage'); 
      this.errorMessage ="";
  }
  /* userRole */
  get_userRole() {
        this.userRole = this.storage.retrieve('userRole');
        return this.userRole;
  }
  set_userRole(value: string) {
      this.userRole = value;
      this.storage.store('userRole',this.userRole);
  }
  clear_userRole(){
      this.storage.clear('userRole'); 
      this.userRole ="";
  }

   /* username */
  get_username() {
        this.username = this.storage.retrieve('username');
        return this.username;
  }
  set_username(value: string) {
      this.username = value;
      this.storage.store('username',this.username);
  }
  clear_username(){
      this.storage.clear('username'); 
      this.username ="";
  }

  /* isAdmin */
  get_isAdmin() {
        this.isAdmin = this.storage.retrieve('isAdmin');
        return this.isAdmin;
  }
  set_isAdmin(value: boolean) {
      this.isAdmin = value;
      this.storage.store('isAdmin',this.isAdmin);
  }
  clear_isAdmin(){
      this.storage.clear('isAdmin'); 
      this.isAdmin = null;
  } 
   /* isLoggedIn */
  get_isLoggedIn() {
        this.isLoggedIn = this.storage.retrieve('isLoggedIn');
        return this.isLoggedIn;
  }
  set_isLoggedIn(value: boolean) {
      this.isLoggedIn = value;
      this.storage.store('isLoggedIn',this.isLoggedIn);
  }
  clear_isLoggedIn(){
      this.storage.clear('isLoggedIn'); 
      this.isLoggedIn =null;
  }

   /* token */
  get_token() {
        this.token = this.storage.retrieve('token');
        return this.token;
  }
  set_token(value: string) {
      this.token = value;
      this.storage.store('token',this.token);
  }
  clear_token(){
      this.storage.clear('token'); 
      this.token =null;
  }
  
}
