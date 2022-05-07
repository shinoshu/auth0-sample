import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromOrganizationEntities from './organization-entities.reducer';

export const selectOrganizationEntitiesState =
  createFeatureSelector<fromOrganizationEntities.State>(
    fromOrganizationEntities.OrganizationesFeatureKey
  );

export const selectAll = createSelector(
  selectOrganizationEntitiesState,
  fromOrganizationEntities.selectAll
);
