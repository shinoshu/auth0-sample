import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromOrganization from './organization.reducer';
import * as fromOrganizationEntities from './organization-entities.reducer';

// prettier-ignore
export const selectOrganizationState =
  createFeatureSelector<fromOrganization.State>(
    fromOrganization.organizationFeatureKey
  );

export const selectOrganizationEntitiesState =
  createFeatureSelector<fromOrganizationEntities.State>(
    fromOrganizationEntities.organizationesFeatureKey
  );

export const selectOrganizationEntities = createSelector(
  selectOrganizationEntitiesState,
  fromOrganizationEntities.selectEntities
);

export const selectAllOrganizations = createSelector(
  selectOrganizationEntitiesState,
  fromOrganizationEntities.selectAll
);

export const selectCurrentOrganizationId = createSelector(
  selectOrganizationState,
  fromOrganization.selectSelectedOrganizationId
);

export const selectCurrentOrganization = createSelector(
  selectOrganizationEntities,
  selectCurrentOrganizationId,
  (organizationEntities, organizationId) =>
    organizationId && organizationEntities[organizationId]
);
