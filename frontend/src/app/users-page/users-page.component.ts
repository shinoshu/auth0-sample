import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UserActions from '../user/user.actions';
import { selectAll } from '../user/user.selectors';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = this.store.select(selectAll);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
}
