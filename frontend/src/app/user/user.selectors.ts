import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromUser from './user.reducer';
import * as fromUserEntities from './user-entities.reducer';

// prettier-ignore
export const selectUserState =
  createFeatureSelector<fromUser.State>(
    fromUser.userFeatureKey
  );

export const selectUserEntitiesState =
  createFeatureSelector<fromUserEntities.State>(
    fromUserEntities.usersFeatureKey
  );

export const selectUserEntities = createSelector(
  selectUserEntitiesState,
  fromUserEntities.selectEntities
);

export const selectAllUsers = createSelector(
  selectUserEntitiesState,
  fromUserEntities.selectAll
);

export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.selectSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userId && userEntities[userId]
);
