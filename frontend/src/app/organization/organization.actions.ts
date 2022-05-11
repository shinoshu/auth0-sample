import { createAction, props } from '@ngrx/store';

import { Organization } from './organization.model';

export const loadOrganization = createAction(
  '[Organization] Load Organization',
  props<{ id: string }>()
);

export const loadOrganizationSuccess = createAction(
  '[Organization] Load Organization Success',
  props<{ data: any }>()
);

export const loadOrganizationFailure = createAction(
  '[Organization] Load Organization Failure',
  props<{ error: any }>()
);

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

export const createOrganization = createAction(
  '[Organization] Create Organization',
  props<{ organization: Organization }>()
);

export const createOrganizationSuccess = createAction(
  '[Organization] Create Organization Success',
  props<{ data: any }>()
);

export const createOrganizationFailure = createAction(
  '[Organization] create Organization Failure',
  props<{ error: any }>()
);

export const updateOrganization = createAction(
  '[Organization] Update Organization',
  props<{ Organization: Organization }>()
);

export const updateOrganizationSuccess = createAction(
  '[Organization] Update Organization Success',
  props<{ data: any }>()
);

export const updateOrganizationFailure = createAction(
  '[Organization] Update Organization Failure',
  props<{ error: any }>()
);

export const deleteOrganization = createAction(
  '[Organization] Delete Organization',
  props<{ id: string }>()
);

export const deleteOrganizationSuccess = createAction(
  '[Organization] Delete Organization Success',
  props<{ data: any }>()
);

export const deleteOrganizationFailure = createAction(
  '[Organization] Delete Organization Failure',
  props<{ error: any }>()
);
