import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import {User} from "../user";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private router: Router, private loginService: LoginService) {}
 
  errormsg = "";
  newuser:User = new User();
  username:string = "";
  password:string = "";
  loggedin:boolean = false;

  ngOnInit() {
    if (sessionStorage.getItem('currentUser')){
      this.loggedin = true;
    }else{
      this.loggedin = false;
    
    }
  }

  signin(event:any){
    console.log("at signin");
    event.preventDefault();
    this.loginService.login(this.username,this.password).subscribe({
      next:
        (data)=>{
          if (data.valid == true){
            this.newuser = new User(data.username,data.email)
            this.loginService.setCurrentuser(this.newuser);
            this.router.navigate(['/profile']);
          }else{
           
            this.errormsg = "There is a problem with the credentials";
          }
      
      error:
        this.errormsg = "There is a problem with the credentials";
      
    }
      
   
  })

}
}
