import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-add-dialog',
  templateUrl: './organization-add-dialog.component.html',
  styleUrls: ['./organization-add-dialog.component.scss'],
})
export class OrganizationAddDialogComponent {
  form = this.fb.group({
    name: [''],
  });

  constructor(private fb: FormBuilder) {}
}
