import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() userId: string;

  posts$: Observable<Post[]>;

  constructor(private store: Store<fromStore.PostsState>) {}

  ngOnInit() {
    this.posts$ = this.store.select(fromStore.getAllPosts);
  }
}

// TODO: Add ChangeDetectionStrategy.OnPush
