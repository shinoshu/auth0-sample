import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import * as OrganizationActions from './organization.actions';
import * as OrganizationEntitiesActions from './organization-entities.actions';
import { AppService } from '../app.service';

@Injectable()
export class OrganizationEffects {
  loadOrganization$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadOrganizations),
      switchMap(() =>
        this.appService
          .getOrganizations()
          .pipe(
            map((organizations) =>
              OrganizationEntitiesActions.loadOrganizations({ organizations })
            )
          )
      )
    )
  );

  loadOrganizations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadOrganizations),
      switchMap(() =>
        this.appService
          .getOrganizations()
          .pipe(
            map((organizations) =>
              OrganizationEntitiesActions.loadOrganizations({ organizations })
            )
          )
      )
    )
  );

  createOrganizations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.createOrganization),
      switchMap((action) =>
        this.appService
          .createOrganization(action.organization)
          .pipe(
            map((organization) =>
              OrganizationEntitiesActions.addOrganization({ organization })
            )
          )
      )
    )
  );

  updateOrganizations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.updateOrganization),
      switchMap((action) =>
        this.appService
          .updateOrganization(action.organization)
          .pipe(
            map((organization) =>
              OrganizationEntitiesActions.updateOrganization({ organization })
            )
          )
      )
    )
  );

  deleteOrganizations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.deleteOrganization),
      switchMap((action) =>
        this.appService.deleteOrganization(action.id).pipe(
          map(() =>
            OrganizationEntitiesActions.deleteOrganization({
              id: action.id,
            })
          )
        )
      )
    )
  );

  loadOrganizationUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrganizationActions.loadOrganizationUsers),
      switchMap((action) =>
        this.appService.getOrganizationUsers(action.id).pipe(
          map((users) => ({
            organization: {
              id: action.id,
              changes: { users },
            },
          })),
          map((organization) =>
            OrganizationEntitiesActions.updateOrganization(organization)
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private appService: AppService) {}
}
