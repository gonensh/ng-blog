import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
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
