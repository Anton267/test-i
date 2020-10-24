import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-create-form-dialog',
  templateUrl: './user-create-form-dialog.component.html',
  styleUrls: ['./user-create-form-dialog.component.sass']
})
export class UserCreateFormDialogComponent {

  public userCreateForm: FormGroup;
  private isHasChanges = false;
  @Input() private fieldId: number;

  constructor(
    fb: FormBuilder,
    private api: ApiService,
    public dialogRef: MatDialogRef<UserCreateFormDialogComponent>,
    public dialog: MatDialog,
  ) {
    this.userCreateForm = fb.group({
      id: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      value: ['', [Validators.required]],
    });
  }

  public createForm(): void {
    const body = { form_field_values: [{ form_field_id: this.id.value, value: this.value.value }] };
    this.api.createForm(body).subscribe(e => {
      console.log(e);
      this.userCreateForm.reset();
      this.isHasChanges = true;
    });
  }

  public updateForm(): void {
    const body = { form_field_values: [{ form_field_id: this.id.value, value: this.value.value }] };
    this.api.updateForm(body, this.fieldId).subscribe(e => {
      console.log(e);
      this.isHasChanges = true;
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

