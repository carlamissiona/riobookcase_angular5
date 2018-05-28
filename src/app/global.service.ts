import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {
  public loginMessage: string ="You are not Login";
  public errorMessage: string ="";
  public userRole: string ="";
  public username: string ="";
  public loginUser: string ="";
  public token: string ="";
  public isAdmin: boolean = false;
  public isLoggedIn: boolean = false;
 

  constructor() { }

}
