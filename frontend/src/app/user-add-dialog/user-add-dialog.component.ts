import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add-dialog',
  templateUrl: './user-add-dialog.component.html',
  styleUrls: ['./user-add-dialog.component.scss'],
})
export class UserAddDialogComponent {
  form = this.fb.group({
    name: [''],
    email: ['', Validators.email],
    password: [''],
  });

  constructor(private fb: FormBuilder) {}
}
