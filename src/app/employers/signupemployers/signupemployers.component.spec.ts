import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupemployersComponent } from './signupemployers.component';

describe('SignupemployersComponent', () => {
  let component: SignupemployersComponent;
  let fixture: ComponentFixture<SignupemployersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupemployersComponent]
    });
    fixture = TestBed.createComponent(SignupemployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
