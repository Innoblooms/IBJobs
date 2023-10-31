import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinjobComponent } from './walkinjob.component';

describe('WalkinjobComponent', () => {
  let component: WalkinjobComponent;
  let fixture: ComponentFixture<WalkinjobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinjobComponent]
    });
    fixture = TestBed.createComponent(WalkinjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
