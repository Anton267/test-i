import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-create-form-dialog',
  templateUrl: './user-create-form-dialog.component.html',
  styleUrls: ['./user-create-form-dialog.component.sass']
})
export class UserCreateFormDialogComponent {

  public userCreateForm: FormGroup;
  private isHasChanges = false;

  constructor(
    fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<UserCreateFormDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { fieldId: number, formId: number },
  ) {
    this.userCreateForm = fb.group({
      value: ['', [Validators.required]],
    });
    // if (data) {
    //   this.userCreateForm = fb.group({
    //     value: ['', [Validators.required]],
    //   });
    // } else {
    //   this.userCreateForm = fb.group({
    //     id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    //     value: ['', [Validators.required]],
    //   });
    // }
  }

  public createForm(): void {
    this.data ? this.updateForm() : this.create();
  }

  public create(): void {
    const body = { form_field_values: [{ form_field_id: 1, value: this.value.value }] };
    this.api.createForm(body).subscribe(e => {
      console.log(e);
      this.userCreateForm.reset();
      this.isHasChanges = true;
    });
  }

  public updateForm(): void {
    const body = { form_field_values: [{ form_field_id: this.data.formId, value: this.value.value }] };
    this.api.updateForm(body, this.data.fieldId).subscribe(e => {
      console.log(e);
      this.isHasChanges = true;
      this.closeDialog();
    });
  }

  public closeDialog(): void {
    this.dialogRef.close(this.isHasChanges);
  }

  public get id(): AbstractControl {
    return this.userCreateForm.get('id');
  }

  public get value(): AbstractControl {
    return this.userCreateForm.get('value');
  }

}


