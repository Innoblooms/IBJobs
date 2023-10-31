import { Component } from '@angular/core';

@Component({
  selector: 'app-employersnavbar',
  templateUrl: './employersnavbar.component.html',
  styleUrls: ['./employersnavbar.component.css']
})
export class EmployersnavbarComponent {
  public isNavbarCollapsed: boolean = true;

  // Toggle the navbar based on its current state
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  cartCount: number = 0;
  

}
