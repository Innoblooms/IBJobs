import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCompaniesComponent } from './it-companies.component';

describe('ItCompaniesComponent', () => {
  let component: ItCompaniesComponent;
  let fixture: ComponentFixture<ItCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItCompaniesComponent]
    });
    fixture = TestBed.createComponent(ItCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
