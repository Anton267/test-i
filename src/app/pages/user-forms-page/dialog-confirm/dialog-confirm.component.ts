import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-confirm',
  template: `
  <h2 mat-dialog-title>Confirm Delete</h2>
  <mat-dialog-actions align="end">
  <button mat-button mat-dialog-close cdkFocusInitial>Cancel</button>
  <button mat-button [mat-dialog-close]="true" >Delete</button>
  </mat-dialog-actions>
  `,
})
export class DialogConfirmComponent { }
