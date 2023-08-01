import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // Declare class properties
  email: string = "";
  password: string = "";

  // Create users array for login check
  users = [
    {"email": "abc@com.au", "password": "abc"},
    {"email": "bcd@com.au", "password": "bcd"},
    {"email": "cde@com.au", "password": "cde"},
  ]

  constructor(private router: Router){}


  // Login function for login attempts
  login() {
    // Check if email and password BOTH match any user in the users array
    const user = this.users.find(u => u.email === this.email && u.password === this.password);

    if (user) {
      // Redirect to account page if login is successful
      this.router.navigate(['/account']);
    } else {
      // Show error message if invalid
      alert('Invalid email or password');
    }
  }
}
