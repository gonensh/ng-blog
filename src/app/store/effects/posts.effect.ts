import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostService } from '../../services/post.service';
import * as PostsAction from '../actions/posts.action';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions<PostsAction.LoadPosts>,
    private postService: PostService
  ) {}

  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(PostsAction.PostsActionTypes.LoadPosts),
    switchMap(action => {
      return this.postService.getPosts(action.userId).pipe(
        map(posts => new PostsAction.LoadPostsSuccess(posts)),
        catchError(error => of(new PostsAction.LoadPostsFail(error)))
      );
    })
  );
}
