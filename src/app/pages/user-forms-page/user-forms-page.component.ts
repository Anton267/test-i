import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserCreateFormDialogComponent } from './user-create-form-dialog/user-create-form-dialog.component';

@Component({
  selector: 'app-user-forms-page',
  templateUrl: './user-forms-page.component.html',
  styleUrls: ['./user-forms-page.component.sass']
})
export class UserFormsPageComponent implements OnInit {

  public userEmail: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.userEmail = localStorage.getItem('userEmail');
  }

  public openDialog(): void {
    this.dialog.open(UserCreateFormDialogComponent, {
      minWidth: '50vw'
    });
  }

  public logout(): void {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigateByUrl('/');
        }
      });
  }

  ngOnInit(): void {

  }

}
