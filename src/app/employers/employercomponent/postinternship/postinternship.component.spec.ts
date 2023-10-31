import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinternshipComponent } from './postinternship.component';

describe('PostinternshipComponent', () => {
  let component: PostinternshipComponent;
  let fixture: ComponentFixture<PostinternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostinternshipComponent]
    });
    fixture = TestBed.createComponent(PostinternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
