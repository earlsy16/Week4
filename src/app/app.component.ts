import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private router: Router) { }

  // Define a function to check if the user is logged in
  isLoggedIn() {
    return !!sessionStorage.getItem('user');
  }

  logout() {
    // Clear user data from session storage
    sessionStorage.clear();
    // Redirect to the home page or any other desired page
    this.router.navigate(['/']);
  }
}
