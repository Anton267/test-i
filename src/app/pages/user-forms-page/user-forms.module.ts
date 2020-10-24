import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';
import { UserFormsRoutingModule } from './user-forms-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserTableComponent } from './user-table/user-table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';


@NgModule({
  declarations: [
    UserFormsPageComponent,
    UserTableComponent,
    UserDialogComponent,
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  entryComponents: [UserDialogComponent]
})
export class UserFormsModule { }
