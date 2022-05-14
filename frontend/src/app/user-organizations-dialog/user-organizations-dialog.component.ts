import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-organizations-dialog',
  templateUrl: './user-organizations-dialog.component.html',
  styleUrls: ['./user-organizations-dialog.component.scss'],
})
export class UserOrganizationsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
