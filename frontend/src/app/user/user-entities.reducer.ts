import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from './user.model';
import * as Actions from './user-entities.actions';

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
  on(Actions.addUser, (state, action) =>
    adapter.addOne(action.user, state)),
  on(Actions.upsertUser, (state, action) =>
    adapter.upsertOne(action.user, state)
  ),
  // prettier-ignore
  on(Actions.addUsers, (state, action) =>
    adapter.addMany(action.users, state)),
  on(Actions.upsertUsers, (state, action) =>
    adapter.upsertMany(action.users, state)
  ),
  on(Actions.updateUser, (state, action) =>
    adapter.updateOne(action.user, state)
  ),
  on(Actions.updateUsers, (state, action) =>
    adapter.updateMany(action.users, state)
  ),
  on(Actions.deleteUser, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(Actions.deleteUsers, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(Actions.loadUsers, (state, action) => {
    return adapter.setAll(action.users, state);
  }),
  // prettier-ignore
  on(Actions.clearUsers, (state) =>
    adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
