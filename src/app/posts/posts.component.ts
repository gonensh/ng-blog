import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import * as fromStore from '../store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  selectedUser$: Observable<number>;
  posts$: Observable<Post[]>;
  postsLoading$: Observable<boolean>;
  postsLoaded$: Observable<boolean>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.selectedUser$ = this.store.pipe(select(fromStore.getSelectedUser));
    this.posts$ = this.store.pipe(select(fromStore.getAllPosts));
    this.postsLoading$ = this.store.pipe(select(fromStore.getPostsLoading));
    this.postsLoaded$ = this.store.pipe(select(fromStore.getPostsLoaded));

    this.selectedUser$.subscribe(userId => {
      if (typeof userId !== 'undefined') {
        this.store.dispatch(new fromStore.LoadPosts(userId));
      }
    });
  }
}
