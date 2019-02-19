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
        map(this.addFluffData),
        map(posts => new PostsAction.LoadPostsSuccess(posts)),
        catchError(error => of(new PostsAction.LoadPostsFail(error)))
      );
    })
  );

  /**
   * addFluffData - THIS IS A HACK FOR DEMO PURPOSES ONLY
   * This function adds information missing from the API that is required to match the comps
   * @param posts: Post[]
   */
  private addFluffData(posts) {
    return posts.map(post => {
      return {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
        image: 'https://source.unsplash.com/random/230x178?r=' + Math.random(),
        categories: [
          ...['Web', 'Print'].filter(category => {
            return Math.random() > 0.5;
          }),
          'Digital'
        ]
      };
    });
  }
}
