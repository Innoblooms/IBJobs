import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent {
  @Input() job: any;
}
