import * as PostsAction from '../actions/posts.action';
import { Post } from '../../models/post.model';

export interface PostState {
  posts: Post[];
  postsLoading: boolean;
  postsLoaded: boolean;
}

export const initialState: PostState = {
  posts: [],
  postsLoading: false,
  postsLoaded: false
};

export function reducer(
  state = initialState,
  action: PostsAction.PostsActionUnion
): PostState {
  switch (action.type) {
    case PostsAction.PostsActionTypes.LoadPosts: {
      return { ...state, postsLoading: true };
    }

    case PostsAction.PostsActionTypes.LoadPostsSuccess: {
      const posts = action.payload;
      return {
        ...state,
        postsLoading: false,
        postsLoaded: true,
        posts
      };
    }

    case PostsAction.PostsActionTypes.LoadPostsFail: {
      const error = action.payload;
      return { ...state, postsLoading: false, postsLoaded: false };
    }

    default: {
      return state;
    }
  }
}

export const getPosts = (state: PostState) => state.posts;
export const getPostsLoading = (state: PostState) => state.postsLoading;
export const getPostsLoaded = (state: PostState) => state.postsLoaded;
