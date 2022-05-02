import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from './user.model';
import * as UserEntitiesActions from './user-entities.actions';

export const usersFeatureKey = 'users';

export interface State extends EntityState<User> {
  // additional entities state properties
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  // prettier-ignore
  on(UserEntitiesActions.addUser, (state, action) =>
    adapter.addOne(action.user, state)
  ),
  on(UserEntitiesActions.upsertUser, (state, action) =>
    adapter.upsertOne(action.user, state)
  ),
  // prettier-ignore
  on(UserEntitiesActions.addUsers, (state, action) =>
    adapter.addMany(action.users, state)
  ),
  on(UserEntitiesActions.upsertUsers, (state, action) =>
    adapter.upsertMany(action.users, state)
  ),
  on(UserEntitiesActions.updateUser, (state, action) =>
    adapter.updateOne(action.user, state)
  ),
  on(UserEntitiesActions.updateUsers, (state, action) =>
    adapter.updateMany(action.users, state)
  ),
  on(UserEntitiesActions.deleteUser, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(UserEntitiesActions.deleteUsers, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(UserEntitiesActions.loadUser, (state, action) =>
    adapter.setOne(action.user, state)
  ),
  on(UserEntitiesActions.loadUsers, (state, action) =>
    adapter.setAll(action.users, state)
  ),
  // prettier-ignore
  on(UserEntitiesActions.clearUsers, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
