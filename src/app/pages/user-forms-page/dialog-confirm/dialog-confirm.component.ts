import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm',
  template: `
  <h2 mat-dialog-title>Confirm Delete</h2>
  <mat-dialog-actions align="end">
  <button mat-button mat-dialog-close cdkFocusInitial>Cancel</button>
  <button mat-button color="warn" (click)="closeDialog()">Delete</button>
  </mat-dialog-actions>
  `,
})
export class DialogConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
  ) { }

  public closeDialog(): void {
    this.dialogRef.close(true);
  }
}
