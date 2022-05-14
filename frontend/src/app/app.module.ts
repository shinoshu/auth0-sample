import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from '@auth0/auth0-angular';

import * as fromUser from './user/user.reducer';
import * as fromUserEntities from './user/user-entities.reducer';
import { UserEffects } from './user/user.effects';
import * as fromOrganizationEntities from './organization/organization-entities.reducer';
import { OrganizationEffects } from './organization/organization.effects';
import { JwtInterceptor } from './jwt.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';
import { environment } from '../environments/environment';
import { UserAddDialogComponent } from './user-add-dialog/user-add-dialog.component';
import { OrganizationAddDialogComponent } from './organization-add-dialog/organization-add-dialog.component';
import { UserOrganizationsDialogComponent } from './user-organizations-dialog/user-organizations-dialog.component';
import { OrganizationUsersDialogComponent } from './organization-users-dialog/organization-users-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    OrganizationsPageComponent,
    UserAddDialogComponent,
    OrganizationAddDialogComponent,
    UserOrganizationsDialogComponent,
    OrganizationUsersDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    StoreModule.forRoot({
      [fromUser.userFeatureKey]: fromUser.reducer,
      [fromUserEntities.usersFeatureKey]: fromUserEntities.reducer,
      // prettier-ignore
      [fromOrganizationEntities.OrganizationesFeatureKey]: fromOrganizationEntities.reducer,
    }),
    EffectsModule.forRoot([UserEffects, OrganizationEffects]),
    StoreDevtoolsModule.instrument(),
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
