import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUserEntities from './user-entities.reducer';

export const selectUserEntitiesState =
  createFeatureSelector<fromUserEntities.State>(
    fromUserEntities.usersFeatureKey
  );

export const selectAll = createSelector(
  selectUserEntitiesState,
  fromUserEntities.selectAll
);
