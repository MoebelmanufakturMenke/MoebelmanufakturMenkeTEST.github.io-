import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSideboardComponent } from './post-sideboard.component';

describe('PostSideboardComponent', () => {
  let component: PostSideboardComponent;
  let fixture: ComponentFixture<PostSideboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSideboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSideboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
