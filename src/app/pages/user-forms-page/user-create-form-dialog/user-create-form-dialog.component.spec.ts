import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateFormDialogComponent } from './user-create-form-dialog.component';

describe('UserCreateFormDialogComponent', () => {
  let component: UserCreateFormDialogComponent;
  let fixture: ComponentFixture<UserCreateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
