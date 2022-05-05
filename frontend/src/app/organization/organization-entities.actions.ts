import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Organization } from './organization.model';

export const loadOrganizations = createAction(
  '[Organization/API] Load Organizations',
  props<{ organizations: Organization[] }>()
);

export const addOrganization = createAction(
  '[Organization/API] Add Organization',
  props<{ organization: Organization }>()
);

export const upsertOrganization = createAction(
  '[Organization/API] Upsert Organization',
  props<{ organization: Organization }>()
);

export const addOrganizations = createAction(
  '[Organization/API] Add Organizations',
  props<{ organizations: Organization[] }>()
);

export const upsertOrganizations = createAction(
  '[Organization/API] Upsert Organizations',
  props<{ organizations: Organization[] }>()
);

export const updateOrganization = createAction(
  '[Organization/API] Update Organization',
  props<{ organization: Update<Organization> }>()
);

export const updateOrganizations = createAction(
  '[Organization/API] Update Organizations',
  props<{ organizations: Update<Organization>[] }>()
);

export const deleteOrganization = createAction(
  '[Organization/API] Delete Organization',
  props<{ id: string }>()
);

export const deleteOrganizations = createAction(
  '[Organization/API] Delete Organizations',
  props<{ ids: string[] }>()
);

export const clearOrganizations = createAction(
  '[Organization/API] Clear Organizations'
);
