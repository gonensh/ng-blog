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
  posts$: Observable<Post[]>;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.store.select(fromStore.getSelectedUser).subscribe(userId => {
      if (typeof userId !== 'undefined') {
        this.store.dispatch(new fromStore.LoadPosts(userId));
      }
    });

    this.posts$ = this.store.select(fromStore.getAllPosts);
  }
}

// TODO: Add ChangeDetectionStrategy.OnPush
