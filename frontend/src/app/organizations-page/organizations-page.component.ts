import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import * as OrganizationActions from '../organization/organization.actions';
import * as OrganizationEntitiesSelectors from '../organization/organization-entities.selectors';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss'],
})
export class OrganizationsPageComponent implements OnInit {
  organizations$ = this.store.select(OrganizationEntitiesSelectors.selectAll);

  displayedColumns: string[] = ['select', 'id', 'name'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(OrganizationActions.loadOrganizations());
    this.organizations$.subscribe(
      (organizations) =>
        (this.dataSource = new MatTableDataSource(organizations))
    );
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
