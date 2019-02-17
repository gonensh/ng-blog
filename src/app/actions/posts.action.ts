import { Action } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export enum ActionTypes {
  LoadPosts = '[Posts] Load Posts',
  LoadPostsSuccess = '[Posts] Load Posts Success',
  LoadPostsFail = '[Posts] Load Posts Fail'
}

export class LoadPosts implements Action {
  readonly type = ActionTypes.LoadPosts;
}

export class LoadPostsSuccess implements Action {
  readonly type = ActionTypes.LoadPostsSuccess;
  constructor(payload: Post[]) {}
}

export class LoadPostsFail implements Action {
  readonly type = ActionTypes.LoadPostsFail;
  constructor(payload: any) {}
}

export type ActionUnion = LoadPosts | LoadPostsSuccess | LoadPostsFail;
