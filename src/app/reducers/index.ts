import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as PostsReducer from './posts.reducer';

export interface State {
  postState: PostsReducer.PostState;
}

export const reducers: ActionReducerMap<State> = {
  postState: PostsReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
