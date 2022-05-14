import { createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  selectedUserId: string | null;
}

export const initialState: State = {
  selectedUserId: null,
};

export const reducer = createReducer(
  initialState,
  on(UserActions.loadUserOrganizations, (state, action) => ({
    ...state,
    selectedUserId: action.id,
  }))
);
