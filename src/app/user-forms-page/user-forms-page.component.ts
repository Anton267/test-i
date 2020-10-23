import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-user-forms-page',
  templateUrl: './user-forms-page.component.html',
  styleUrls: ['./user-forms-page.component.sass']
})
export class UserFormsPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }


  logout(): void {
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
