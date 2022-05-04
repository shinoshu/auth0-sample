import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import * as UserActions from '../user/user.actions';
import { selectAll } from '../user/user.selectors';
import { UserAddDialogComponent } from '../user-add-dialog/user-add-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = this.store.select(selectAll);

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }

  add() {
    const dialogRef = this.dialog.open(UserAddDialogComponent);
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.store.dispatch(UserActions.createUser({ user }));
      }
    });
  }
}
