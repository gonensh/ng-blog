import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UsersAction from '../actions/users.action';
import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UsersAction.UsersActionTypes.LoadUsers),
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map(users => new UsersAction.LoadUsersSuccess(users)),
        catchError(error => of(new UsersAction.LoadUsersFail(error)))
      );
    })
  );
}
