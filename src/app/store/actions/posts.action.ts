import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Posts',
  LoadPostsSuccess = '[Posts] Load Posts Success',
  LoadPostsFail = '[Posts] Load Posts Fail'
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
  public userId: number;
  constructor(userId: number) {
    this.userId = userId;
  }
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionTypes.LoadPostsSuccess;
  constructor(public payload: Post[]) {}
}

export class LoadPostsFail implements Action {
  readonly type = PostsActionTypes.LoadPostsFail;
  constructor(public payload: any) {}
}

export type PostsActionUnion = LoadPosts | LoadPostsSuccess | LoadPostsFail;
