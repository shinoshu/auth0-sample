import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrganizationsDialogComponent } from './user-organizations-dialog.component';

describe('UserOrganizationsDialogComponent', () => {
  let component: UserOrganizationsDialogComponent;
  let fixture: ComponentFixture<UserOrganizationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrganizationsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrganizationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
