import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as PostsReducer from './posts.reducer';
import * as UsersReducer from './users.reducer';

export interface AppState {
  posts: PostsReducer.PostState;
  users: UsersReducer.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  posts: PostsReducer.reducer,
  users: UsersReducer.reducer
};

// App state functions
export const getAppState = createFeatureSelector<AppState>('posts');

// User state functions
export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.users
);

export const getAllUsers = createSelector(
  getUserState,
  UsersReducer.getUsers
);

export const getUsersLoading = createSelector(
  getUserState,
  UsersReducer.getUsersLoading
);

export const getUsersLoaded = createSelector(
  getUserState,
  UsersReducer.getUsersLoaded
);

export const getSelectedUser = createSelector(
  getUserState,
  UsersReducer.getSelectedUser
);

// Post state functions
export const getPostState = createSelector(
  getAppState,
  (state: AppState) => state.posts
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
