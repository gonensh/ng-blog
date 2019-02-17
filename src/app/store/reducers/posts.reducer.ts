import * as PostsAction from '../actions/posts.action';
import { Post } from '../../models/post.model';

export interface PostState {
  posts: Post[];
  postsLoading: boolean;
  postsLoaded: boolean;
}

export const initialState: PostState = {
  posts: [
    {
      id: 0,
      userId: 1,
      title: `Post 1`,
      body: 'Very interesting content here: ' + Math.random()
      // image: 'https://source.unsplash.com/random/230x178?r=' + Math.random(),
      // categories: ['Design', 'Development']
    },
    {
      id: 0,
      userId: 1,
      title: `Post 2`,
      body: 'Very interesting content here: ' + Math.random()
      // image: 'https://source.unsplash.com/random/230x178?r=' + Math.random(),
      // categories: ['Design', 'Development']
    }
  ],
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
      const posts = action.payload;
      return {
        ...state,
        postsLoading: false,
        postsLoaded: true,
        posts
      };
    }

    case PostsAction.ActionTypes.LoadPostsFail: {
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
