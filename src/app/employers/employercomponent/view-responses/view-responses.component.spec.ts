import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewResponsesComponent } from './view-responses.component';

describe('ViewResponsesComponent', () => {
  let component: ViewResponsesComponent;
  let fixture: ComponentFixture<ViewResponsesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewResponsesComponent]
    });
    fixture = TestBed.createComponent(ViewResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
