import { createReducer, on } from '@ngrx/store';

import * as OrganizationActions from './organization.actions';

export const organizationFeatureKey = 'organization';

export interface State {
  selectedOrganizationId: string | null;
}

export const initialState: State = {
  selectedOrganizationId: null,
};

export const reducer = createReducer(
  initialState,
  on(OrganizationActions.loadOrganizationUsers, (state, action) => ({
    ...state,
    selectedOrganizationId: action.id,
  }))
);

export const selectSelectedOrganizationId = (state: State) =>
  state.selectedOrganizationId;
