import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]>;
  postsLoading$: Observable<boolean>;
  postsLoaded$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store.select(fromStore.getSelectedUser).subscribe(userId => {
      if (typeof userId !== 'undefined') {
        this.store.dispatch(new fromStore.LoadPosts(userId));
      }
    });

    this.posts$ = this.store.select(fromStore.getAllPosts);
    this.postsLoading$ = this.store.select(fromStore.getPostsLoading);
    this.postsLoaded$ = this.store.select(fromStore.getPostsLoaded);
  }
}

// TODO: Add ChangeDetectionStrategy.OnPush
