import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsponsorComponent } from './postsponsor.component';

describe('PostsponsorComponent', () => {
  let component: PostsponsorComponent;
  let fixture: ComponentFixture<PostsponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsponsorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
