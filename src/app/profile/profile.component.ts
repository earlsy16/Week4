import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any;

  constructor(private router: Router) {}

    ngOnInit(){
      // Retrieve user data from session storage
      const userString = sessionStorage.getItem('user');
      if (userString) {
        this.user = JSON.parse(userString);
        // Convert user age to number from string for use in form
        this.user.age = +this.user.age;
        console.log(this.user);
      } else {
        // Redirect to login if user data is not available
        this.router.navigate(['/login']);
      }
    }

    // Function to update user data and save to session storage
    updateProfile() {
      sessionStorage.setItem('user', JSON.stringify(this.user));
      // Refresh page to update HTML and form placeholders
      window.location.reload();
    }
  }