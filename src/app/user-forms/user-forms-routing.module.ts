import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';

const routes: Routes = [
  {
    path: '', component: UserFormsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserFormsRoutingModule { }
