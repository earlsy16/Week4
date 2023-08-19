import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const serverURL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private httpClient: HttpClient) {

  }

  username: string = "";
  upwd: string = "";
  birthdate: string = '';
  age: number = 0;
  email: string = "";
  // Flag to check login status for logout
  isLoggedIn: boolean = false; 


  ngOnInit(): void {
    this.isLoggedIn = !!sessionStorage.getItem("user");
  }

  onLogin(event: Event) {
    event.preventDefault();
    console.log("Inside onLogin()")

    if (this.username === "" && this.upwd === "") {
      alert("Please enter a username and password.");
      return;
    }

    // Initialise user
    let user = { 
      username: this.username,
      upwd: this.upwd,
      email: '',
      birthdate: '',
      age: 0
      };

    this.httpClient.post(serverURL + '/api/auth', user, httpOptions).subscribe((data: any) => {
      console.log('Response Data: ', data);
      if (data.valid) {
        // Store user in session storage
        sessionStorage.setItem('user', JSON.stringify(data));
        // Flag user as logged in
        this.isLoggedIn = true;
        console.log("Inside user attribute setting, redirect to profile line below");
        this.router.navigate(['/profile']);
      }
    });
  }

}