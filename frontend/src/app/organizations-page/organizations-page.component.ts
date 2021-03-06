import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

import * as OrganizationActions from '../organization/organization.actions';
import * as OrganizationSelectors from '../organization/organization.selectors';
import { OrganizationAddDialogComponent } from '../organization-add-dialog/organization-add-dialog.component';
import { OrganizationUsersDialogComponent } from '../organization-users-dialog/organization-users-dialog.component';

@Component({
  selector: 'app-organizations-page',
  templateUrl: './organizations-page.component.html',
  styleUrls: ['./organizations-page.component.scss'],
})
export class OrganizationsPageComponent implements OnInit {
  organizations$ = this.store.select(
    OrganizationSelectors.selectAllOrganizations
  );
  selectedOrganization$ = this.store.select(
    OrganizationSelectors.selectCurrentOrganization
  );

  displayedColumns: string[] = ['select', 'id', 'name', 'members'];
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(OrganizationActions.loadOrganizations());
    this.organizations$.subscribe(
      (organizations) =>
        (this.dataSource = new MatTableDataSource(organizations))
    );
  }

  add() {
    const dialogRef = this.dialog.open(OrganizationAddDialogComponent);
    dialogRef.afterClosed().subscribe((organization) => {
      if (organization) {
        this.store.dispatch(
          OrganizationActions.createOrganization({ organization })
        );
      }
    });
  }

  delete(organizations: any) {
    // TODO: deleteOrganization -> deleteOrganizations
    organizations.forEach((organization: any) => {
      this.store.dispatch(
        OrganizationActions.deleteOrganization({ id: organization.id })
      );
    });
  }

  // ?????????
  openDialog(id: string) {
    this.selectedOrganization$.pipe(first()).subscribe((organization) => {
      organization &&
        this.dialog.open(OrganizationUsersDialogComponent, {
          data: organization,
        });
    });

    this.store.dispatch(OrganizationActions.loadOrganizationUsers({ id }));
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
