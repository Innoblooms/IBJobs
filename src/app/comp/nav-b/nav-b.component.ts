import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-nav-b',
  templateUrl: './nav-b.component.html',
  styleUrls: ['./nav-b.component.css']
})
export class NavBComponent {



constructor(private authservice:AuthService, private router:Router){

}




  cartItems: any[] = [];

  isEmployee: boolean = true;

  // Property to control the navbar collapse on smaller screens
  isCollapsed: boolean = true;

  // Sample cart count - you can update this with actual data
  cartCount: number = 5; 

  // Toggle between employee and employer views
  toggleView(): void {
    this.isEmployee = !this.isEmployee;
  }

  // Close the navbar when a link is clicked
  closeNavbar(): void {
    this.isCollapsed = true;
  }

//Aurthor Ravindra yadav
//Start
logout(){
  this.authservice.logout()
  this.router.navigate(['/'])
}

logoutt(){
  this.authservice.logoutEmployer()
  this.router.navigate(['/'])
}

}
