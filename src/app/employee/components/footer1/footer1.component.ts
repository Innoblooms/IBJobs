import { Component } from '@angular/core';

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.css']
})
export class Footer1Component {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
