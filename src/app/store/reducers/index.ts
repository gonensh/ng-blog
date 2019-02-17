import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as PostsReducer from './posts.reducer';

export interface PostsState {
  posts: PostsReducer.PostState;
}

export const reducers: ActionReducerMap<PostsState> = {
  posts: PostsReducer.reducer
};

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPostState = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);

export const getAllPosts = createSelector(
  getPostState,
  PostsReducer.getPosts
);

export const getPostsLoading = createSelector(
  getPostState,
  PostsReducer.getPostsLoading
);

export const getPostsLoaded = createSelector(
  getPostState,
  PostsReducer.getPostsLoaded
);
