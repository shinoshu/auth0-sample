import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';

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
          .pipe(map(() => UserEntitiesActions.deleteUser({ id: action.id })))
      )
    )
  );

  loadUserOrganizations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserOrganizations),
      switchMap((action) =>
        this.appService.getUserOrganizations(action.id).pipe(
          map((organizations) => ({
            user: {
              id: action.id,
              changes: { organizations },
            },
          })),
          map((user) => UserEntitiesActions.updateUser(user))
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
