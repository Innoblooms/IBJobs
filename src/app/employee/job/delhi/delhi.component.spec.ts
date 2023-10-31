import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiComponent } from './delhi.component';

describe('DelhiComponent', () => {
  let component: DelhiComponent;
  let fixture: ComponentFixture<DelhiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelhiComponent]
    });
    fixture = TestBed.createComponent(DelhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
