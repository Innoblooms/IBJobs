import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParttimejobComponent } from './parttimejob.component';

describe('ParttimejobComponent', () => {
  let component: ParttimejobComponent;
  let fixture: ComponentFixture<ParttimejobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParttimejobComponent]
    });
    fixture = TestBed.createComponent(ParttimejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
