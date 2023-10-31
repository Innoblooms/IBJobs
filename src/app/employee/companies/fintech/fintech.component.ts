import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-fintech',
  templateUrl: './fintech.component.html',
  styleUrls: ['./fintech.component.css']
})
export class FintechComponent {
  myControl = new FormControl();

  options: string[] = [
    'Angular',
    'React',
    'Vue.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Node.js',
    'Python',
    'Java',
  ];
  
  filteredOptions: Observable<string[]> | undefined;
  constructor() { 
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (value ? this._filter(value) : this.options.slice()))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
