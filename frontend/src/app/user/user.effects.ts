import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import * as UserActions from './user.actions';
import * as UserEntitiesActions from './user-entities.actions';
import { AppService } from '../app.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) =>
        this.appService
          .getUser(action.id)
          .pipe(map((user) => UserEntitiesActions.loadUser({ user })))
      )
    )
  );

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      switchMap(() =>
        this.appService
          .getUsers()
          .pipe(map((users) => UserEntitiesActions.loadUsers({ users })))
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createUser),
      switchMap((action) =>
        this.appService
          .createUser(action.user)
          .pipe(map((user) => UserEntitiesActions.addUser({ user })))
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap((action) =>
        this.appService
          .updateUser(action.user)
          .pipe(map((user) => UserEntitiesActions.updateUser({ user })))
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap((action) =>
        this.appService
          .deleteUser(action.id)
          .pipe(map(({ id }) => UserEntitiesActions.deleteUser({ id })))
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
