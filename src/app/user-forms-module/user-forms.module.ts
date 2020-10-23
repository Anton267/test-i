import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';
import { UserFormsRoutingModule } from './user-forms-routing.module';



@NgModule({
  declarations: [
    UserFormsPageComponent,
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
  ]
})
export class UserFormsModule { }
