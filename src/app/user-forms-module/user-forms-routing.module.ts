import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormGuard } from '../user-form.guard';
import { UserFormsPageComponent } from '../user-forms-page/user-forms-page.component';

const routes: Routes = [
  {
    path: '', component: UserFormsPageComponent, canActivate: [UserFormGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormsRoutingModule { }
