import * as UsersAction from '../actions/users.action';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
  usersLoading: boolean;
  usersLoaded: boolean;
  selectedUserId?: number;
}

export const initialState: UserState = {
  users: [],
  usersLoading: false,
  usersLoaded: false
};

export function reducer(
  state = initialState,
  action: UsersAction.UsersActionUnion
): UserState {
  switch (action.type) {
    case UsersAction.UsersActionTypes.LoadUsers: {
      return { ...state, usersLoading: true };
    }

    case UsersAction.UsersActionTypes.LoadUsersSuccess: {
      const users = action.payload;
      return {
        ...state,
        usersLoading: false,
        usersLoaded: true,
        users,
        // Pre-select the first user as the default
        selectedUserId: users[0].id
      };
    }

    case UsersAction.UsersActionTypes.LoadUsersFail: {
      return { ...state, usersLoading: false, usersLoaded: false };
    }

    case UsersAction.UsersActionTypes.UserSelected: {
      const selectedUserId = action.userId;
      return {
        ...state,
        usersLoading: false,
        usersLoaded: false,
        selectedUserId
      };
    }

    default: {
      return state;
    }
  }
}

export const getUsers = (state: UserState) => state.users;
export const getUsersLoading = (state: UserState) => state.usersLoading;
export const getUsersLoaded = (state: UserState) => state.usersLoaded;
export const getSelectedUser = (state: UserState) => state.selectedUserId;
