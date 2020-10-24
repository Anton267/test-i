import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public form: FormGroup;
  public hideShowPasswordIcon = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['test1@test.com', [Validators.required, Validators.email]],
      password: ['asdTjdgfbn36km', [Validators.required, Validators.minLength(6)]]
    });
  }

  public login(): void {
    this.authService.login({ email: this.email.value, password: this.password.value })
      .subscribe(success => {
        if (success) {
          this.router.navigateByUrl('/user');
        }
      });
  }

  public get email(): AbstractControl {
    return this.form.get('email');
  }

  public get password(): AbstractControl {
    return this.form.get('password');
  }

}
