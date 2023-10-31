import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostclassifiedComponent } from './postclassified.component';

describe('PostclassifiedComponent', () => {
  let component: PostclassifiedComponent;
  let fixture: ComponentFixture<PostclassifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostclassifiedComponent]
    });
    fixture = TestBed.createComponent(PostclassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
