import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-organization-users-dialog',
  templateUrl: './organization-users-dialog.component.html',
  styleUrls: ['./organization-users-dialog.component.scss'],
})
export class OrganizationUsersDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
