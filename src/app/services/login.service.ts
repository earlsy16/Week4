import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {of,tap} from 'rxjs';
import {User} from '../user';


@Injectable({providedIn: 'root'})

export class LoginService {
constructor(private http: HttpClient, private router: Router){}

  isLoggedin(){
    if (sessionStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }

  login(username:string,password:string){
    return this.http.post<User>('http://localhost:3000/api/auth', { username: username, upwd: password });
  }

  logout(event:any){
    sessionStorage.removeItem('currentUser');
    this.router.navigateByUrl('');

  }
  setCurrentuser(newuser:any){
    sessionStorage.setItem('currentUser',JSON.stringify(newuser));
  }
  getCurrentuser(){
    return sessionStorage.getItem('currentUser');
  }
}
