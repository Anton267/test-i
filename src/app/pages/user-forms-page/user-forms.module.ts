import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';
import { UserFormsRoutingModule } from './user-forms-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    UserFormsPageComponent,
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    MatToolbarModule,
  ]
})
export class UserFormsModule { }
