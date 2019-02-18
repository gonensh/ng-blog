import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersFail = '[Users] Load Users Fail',
  UserSelected = '[Users] User Selected'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;
  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LoadUsersFail;
  constructor(public payload: any) {}
}

export class UserSelected implements Action {
  readonly type = UsersActionTypes.UserSelected;
  constructor(public userId: number) {}
}

// TODO: Change public to readonly

export type UsersActionUnion =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | UserSelected;
