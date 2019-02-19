import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStoreModule } from '@reibo/ngrx-mock-test';

import { PostsComponent } from './posts.component';
import { PostTileComponent } from './post-tile/post-tile.component';
import { JoinPipe } from '../pipes/join.pipe';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockStoreModule.forRoot('root', {})],
      declarations: [PostsComponent, PostTileComponent, JoinPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
