import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Organization } from './organization.model';
import * as OrganizationActions from './organization-entities.actions';

export const organizationesFeatureKey = 'organizationes';

export interface State extends EntityState<Organization> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Organization> =
  createEntityAdapter<Organization>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(OrganizationActions.addOrganization, (state, action) =>
    adapter.addOne(action.organization, state)
  ),
  on(OrganizationActions.upsertOrganization, (state, action) =>
    adapter.upsertOne(action.organization, state)
  ),
  on(OrganizationActions.addOrganizations, (state, action) =>
    adapter.addMany(action.organizations, state)
  ),
  on(OrganizationActions.upsertOrganizations, (state, action) =>
    adapter.upsertMany(action.organizations, state)
  ),
  on(OrganizationActions.updateOrganization, (state, action) =>
    adapter.updateOne(action.organization, state)
  ),
  on(OrganizationActions.updateOrganizations, (state, action) =>
    adapter.updateMany(action.organizations, state)
  ),
  on(OrganizationActions.deleteOrganization, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(OrganizationActions.deleteOrganizations, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(OrganizationActions.loadOrganizations, (state, action) =>
    adapter.setAll(action.organizations, state)
  ),
  on(OrganizationActions.clearOrganizations, (state) =>
    adapter.removeAll(state)
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
