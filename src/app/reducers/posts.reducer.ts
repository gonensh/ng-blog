import * as PostsAction from '../actions/posts.action';
import { Post } from '../models/post.model';

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
  action: PostsAction.ActionUnion
): PostState {
  switch (action.type) {
    case PostsAction.ActionTypes.LoadPosts: {
      return { ...state, postsLoading: true };
    }

    case PostsAction.ActionTypes.LoadPostsSuccess: {
      return { ...state, postsLoading: false, postsLoaded: true };
    }

    case PostsAction.ActionTypes.LoadPostsFail: {
      return { ...state, postsLoading: false, postsLoaded: false };
    }

    default: {
      return state;
    }
  }
}
