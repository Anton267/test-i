import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, canActivate: [LoginGuard]
  },
  {
    path: 'user', loadChildren: () => import('./pages/user-forms-page/user-forms.module')
      .then(m => m.UserFormsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
