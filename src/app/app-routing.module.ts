import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'user', loadChildren: () => import('./user-forms-module/user-forms.module')
      .then(m => m.UserFormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
