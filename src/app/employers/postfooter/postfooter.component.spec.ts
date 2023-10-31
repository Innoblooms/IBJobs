import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostfooterComponent } from './postfooter.component';

describe('PostfooterComponent', () => {
  let component: PostfooterComponent;
  let fixture: ComponentFixture<PostfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostfooterComponent]
    });
    fixture = TestBed.createComponent(PostfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
