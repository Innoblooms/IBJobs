import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiComponent } from './chennai.component';

describe('ChennaiComponent', () => {
  let component: ChennaiComponent;
  let fixture: ComponentFixture<ChennaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChennaiComponent]
    });
    fixture = TestBed.createComponent(ChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
