import { createAction, props } from '@ngrx/store';

export const loadOrganizations = createAction(
  '[Organization] Load Organizations'
);

export const loadOrganizationsSuccess = createAction(
  '[Organization] Load Organizations Success',
  props<{ data: any }>()
);

export const loadOrganizationsFailure = createAction(
  '[Organization] Load Organizations Failure',
  props<{ error: any }>()
);
