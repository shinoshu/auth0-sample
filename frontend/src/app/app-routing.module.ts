import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersPageComponent } from './users-page/users-page.component';
import { OrganizationsPageComponent } from './organizations-page/organizations-page.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'organizations',
    component: OrganizationsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
