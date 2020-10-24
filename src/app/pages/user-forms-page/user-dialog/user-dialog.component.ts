import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.sass']
})
export class UserDialogComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormValues,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    fb: FormBuilder,
    private api: ApiService,
  ) {
    this.userForm = fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      type: [''],
      min: [''],
      max: [''],
      max_length: [''],
      is_required: [''],
      order: ['', [Validators.required]],
      created_at: [{ value: '', disabled: true }],
      updated_at: [{ value: '', disabled: true }],
    });
  }

  public saveChanges(): void {
    const body = { form_field_values: [{ form_field_id: 5, value: 'string' }] };
    this.api.updateForm(body, this.id.value).subscribe(e => console.log(e))
    // this.dialogRef.close();
  }

  public get id(): AbstractControl {
    return this.userForm.get('id');
  }

  public get title(): AbstractControl {
    return this.userForm.get('title');
  }

  public get type(): AbstractControl {
    return this.userForm.get('type');
  }

  public get min(): AbstractControl {
    return this.userForm.get('min');
  }

  public get max(): AbstractControl {
    return this.userForm.get('max');
  }

  public get max_length(): AbstractControl {
    return this.userForm.get('max_length');
  }

  public get isRequired(): AbstractControl {
    return this.userForm.get('is_required');
  }

  public get order(): AbstractControl {
    return this.userForm.get('order');
  }

  public get createdAt(): AbstractControl {
    return this.userForm.get('created_at');
  }

  public get updatedAt(): AbstractControl {
    return this.userForm.get('updated_at');
  }

  ngOnInit(): void {
    console.log(this.data);
    this.userForm.patchValue(this.data);
  }

}
