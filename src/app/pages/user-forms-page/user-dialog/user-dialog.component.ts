import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';
import { UserCreateFormDialogComponent } from '../user-create-form-dialog/user-create-form-dialog.component';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.sass']
})
export class UserDialogComponent implements OnInit {

  public userForm: FormArray;
  private isHasChanges = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Form,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private api: ApiService,
    public dialog: MatDialog,
  ) { }

  public saveChanges(form: FormControl, i: number): void {
    const fieldId = this.data.form_field_values[i].form_field_id;
    const body = { form_field_values: [{ form_field_id: fieldId, value: form.value }] };
    this.api.updateForm(body, this.data.id).subscribe(e => {
      console.log(e);
      this.isHasChanges = true;
    });
  }

  public closeDialog(): void {
    this.dialogRef.close(this.isHasChanges);
  }

  public openNewFormDialog(): void {
    const max = this.data.form_field_values.reduce((prev, curr) => {
      return prev < curr.form_field_id ? curr.form_field_id : prev;
    }, 0);
    this.dialog.open(UserCreateFormDialogComponent, {
      minWidth: '50vw',
      data: { fieldId: this.data.id, formId: max + 1 }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getFormById(this.data.id);
        this.isHasChanges = true;
      }
    });
  }

  private getFormById(id: number): void {
    this.api.getFormById(id).subscribe(
      form => {
        this.data = form.data;
        this.createFormArray();
      }
    );
  }

  private createFormArray(): void {
    const userForm = new FormArray([]);
    this.data.form_field_values.forEach(data => {
      const control = new FormControl(data.value, Validators.required);
      userForm.push(control);
    });
    this.userForm = userForm;
  }

  ngOnInit(): void {
    this.createFormArray();
    console.log(this.data);
  }

}
