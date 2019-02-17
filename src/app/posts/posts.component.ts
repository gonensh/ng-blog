import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import * as PostsReducer from '../reducers';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private store: Store<PostsReducer.PostsState>) {}

  ngOnInit() {
    this.store.select(PostsReducer.getAllPosts).subscribe(posts => {
      this.posts = posts;
    });
  }
}

// TODO: Add ChangeDetectionStrategy.OnPush
