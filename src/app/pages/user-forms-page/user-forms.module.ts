import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';
import { UserFormsRoutingModule } from './user-forms-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserTableComponent } from './user-table/user-table.component';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { MaterialModule } from 'src/app/shared-modules/material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserCreateFormDialogComponent } from './user-create-form-dialog/user-create-form-dialog.component';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';


@NgModule({
  declarations: [
    UserFormsPageComponent,
    UserTableComponent,
    UserDialogComponent,
    UserCreateFormDialogComponent,
    DialogConfirmComponent,
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    SharedModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSlideToggleModule,
  ],
  entryComponents: [UserDialogComponent, UserCreateFormDialogComponent, DialogConfirmComponent]
})
export class UserFormsModule { }
