import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

import * as UserActions from '../user/user.actions';
import * as UserSelectors from '../user/user.selectors';
import { UserAddDialogComponent } from '../user-add-dialog/user-add-dialog.component';
import { UserOrganizationsDialogComponent } from '../user-organizations-dialog/user-organizations-dialog.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  users$ = this.store.select(UserSelectors.selectAllUsers);

  displayedColumns: string[] = [
    'select',
    'id',
    'name',
    'email',
    'organizations',
  ];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
    this.users$.subscribe(
      (users) => (this.dataSource = new MatTableDataSource(users))
    );
  }

  add() {
    const dialogRef = this.dialog.open(UserAddDialogComponent);
    dialogRef.afterClosed().subscribe((user) => {
      if (user) {
        this.store.dispatch(UserActions.createUser({ user }));
      }
    });
  }

  delete(users: any) {
    // TODO: deleteUser -> deleteUsers
    users.forEach((user: any) => {
      this.store.dispatch(UserActions.deleteUser({ id: user.user_id }));
    });
  }

  openDialog(id: string) {
    this.store.dispatch(UserActions.loadUserOrganizations({ id }));

    const user$ = this.store
      .select(UserSelectors.selectCurrentUser)
      .pipe(first());

    user$.subscribe((user) => {
      this.dialog.open(UserOrganizationsDialogComponent, {
        data: user,
      });
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }
}
