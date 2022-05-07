import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import * as OrganizationActions from './organization.actions';
import * as OrganizationEntitiesActions from './organization-entities.actions';
import { AppService } from '../app.service';

@Injectable()
export class OrganizationEffects {
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

  constructor(private actions$: Actions, private appService: AppService) {}
}
