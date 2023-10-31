import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersnavbarComponent } from './employersnavbar.component';

describe('EmployersnavbarComponent', () => {
  let component: EmployersnavbarComponent;
  let fixture: ComponentFixture<EmployersnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployersnavbarComponent]
    });
    fixture = TestBed.createComponent(EmployersnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
