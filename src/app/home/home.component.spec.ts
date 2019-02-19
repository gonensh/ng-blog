import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStoreModule } from '@reibo/ngrx-mock-test';

import { HomeComponent } from './home.component';
import { FiltersComponent } from '../posts/filters/filters.component';
import { PostsComponent } from '../posts/posts.component';
import { PostTileComponent } from '../posts/post-tile/post-tile.component';
import { JoinPipe } from '../pipes/join.pipe';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockStoreModule.forRoot('root', {})],
      providers: [],
      declarations: [
        HomeComponent,
        FiltersComponent,
        PostsComponent,
        PostTileComponent,
        JoinPipe
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
