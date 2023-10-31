import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesEnquiryComponent } from './sales-enquiry.component';

describe('SalesEnquiryComponent', () => {
  let component: SalesEnquiryComponent;
  let fixture: ComponentFixture<SalesEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesEnquiryComponent]
    });
    fixture = TestBed.createComponent(SalesEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
