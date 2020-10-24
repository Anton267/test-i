import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';
import { CreateFormData } from '../models/create-form-data.model';

@Component({
  selector: 'app-user-create-form-dialog',
  templateUrl: './user-create-form-dialog.component.html',
  styleUrls: ['./user-create-form-dialog.component.sass']
})
export class UserCreateFormDialogComponent {

  public userCreateForm: FormControl;
  private isHasChanges = false;

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<UserCreateFormDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: CreateFormData,
  ) {
    this.userCreateForm = new FormControl('', Validators.required);
  }

  public createForm(): void {
    this.data ? this.updateForm() : this.create();
  }

  public create(): void {
    const body = { form_field_values: [{ form_field_id: 1, value: this.userCreateForm.value }] };
    this.api.createForm(body).subscribe(e => {
      console.log(e);
      this.isHasChanges = true;
      this.closeDialog();
    });
  }

  public updateForm(): void {
    const body = { form_field_values: [{ form_field_id: this.data.formId, value: this.userCreateForm.value }] };
    this.api.updateForm(body, this.data.fieldId).subscribe(e => {
      console.log(e);
      this.isHasChanges = true;
      this.closeDialog();
    });
  }

  public closeDialog(): void {
    this.dialogRef.close(this.isHasChanges);
  }

}


