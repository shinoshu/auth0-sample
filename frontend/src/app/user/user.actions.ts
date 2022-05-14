import { createAction, props } from '@ngrx/store';

import { User } from './user.model';

// prettier-ignore
export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ data: any }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);

// prettier-ignore
export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: any }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);

// prettier-ignore
export const createUser = createAction(
  '[User] Create User',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{ data: any }>()
);

export const createUserFailure = createAction(
  '[User] create User Failure',
  props<{ error: any }>()
);

// prettier-ignore
export const updateUser = createAction(
  '[User] Update User',
  props<{ user: User }>()
);

export const updateUserSuccess = createAction(
  '[User] Update User Success',
  props<{ data: any }>()
);

export const updateUserFailure = createAction(
  '[User] Update User Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[User] Delete User',
  props<{ id: string }>()
);

export const deleteUserSuccess = createAction(
  '[User] Delete User Success',
  props<{ data: any }>()
);

export const deleteUserFailure = createAction(
  '[User] Delete User Failure',
  props<{ error: any }>()
);

export const loadUserOrganizations = createAction(
  '[User] Load User Organizations',
  props<{ id: string }>()
);

export const loadUserOrganizationsSuccess = createAction(
  '[User] Load User Organizations Success',
  props<{ data: any }>()
);

export const loadUserOrganizationsFailure = createAction(
  '[User] Load User Organizations Failure',
  props<{ error: any }>()
);
