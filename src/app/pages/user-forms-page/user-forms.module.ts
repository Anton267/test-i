import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';
import { UserFormsRoutingModule } from './user-forms-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    UserFormsPageComponent,
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    MaterialModule,
  ]
})
export class UserFormsModule { }
