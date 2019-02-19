import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTileComponent } from './post-tile.component';
import { JoinPipe } from '../../pipes/join.pipe';
import { Post } from 'src/app/models/post.model';

describe('PostTileComponent', () => {
  let component: PostTileComponent;
  let fixture: ComponentFixture<PostTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostTileComponent, JoinPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTileComponent);
    component = fixture.componentInstance;
    component.post = new Post({
      id: 0,
      userId: 0,
      title: '',
      body: ''
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
