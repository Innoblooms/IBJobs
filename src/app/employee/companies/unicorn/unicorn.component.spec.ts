import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornComponent } from './unicorn.component';

describe('UnicornComponent', () => {
  let component: UnicornComponent;
  let fixture: ComponentFixture<UnicornComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnicornComponent]
    });
    fixture = TestBed.createComponent(UnicornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
