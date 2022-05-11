import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationUsersDialogComponent } from './organization-users-dialog.component';

describe('OrganizationUsersDialogComponent', () => {
  let component: OrganizationUsersDialogComponent;
  let fixture: ComponentFixture<OrganizationUsersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationUsersDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
