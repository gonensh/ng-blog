import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor() {
    // TODO: Get posts from ngrx store
    // TODO: Fetch posts from typicode/jsonplaceholder into the store using an effect
    this.posts = [];
    const fakePostCount = 8;
    for (let i = 0; i < fakePostCount; i++) {
      this.posts.push({
        title: `Post ${i}`,
        content: 'Very interesting content here: ' + Math.random(),
        image: 'https://source.unsplash.com/random/230x178?r=' + Math.random(),
        categories: ['Design', 'Development']
      });
    }
  }

  ngOnInit() {}
}

// TODO: Add ChangeDetectionStrategy.OnPush
