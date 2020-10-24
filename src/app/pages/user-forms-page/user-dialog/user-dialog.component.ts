import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.sass']
})
export class UserDialogComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormValues,
    fb: FormBuilder
  ) {
    this.userForm = fb.group({
      id: [''],
      title: [''],
      type: [''],
      min: [''],
      max: [''],
      max_length: [''],
      is_required: [''],
      order: [''],
      created_at: [{ value: '', disabled: true }],
      updated_at: [{ value: '', disabled: true }],
    });
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
