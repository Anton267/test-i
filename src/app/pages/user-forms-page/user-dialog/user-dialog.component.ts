import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.sass']
})
export class UserDialogComponent implements OnInit {

  public userForm = new FormArray([]);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Form,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private api: ApiService,
  ) { }

  public saveChanges(form: FormControl, i: number): void {
    const fieldId = this.data.form_field_values[i].form_field_id;
    const body = { form_field_values: [{ form_field_id: fieldId, value: form.value }] };
    this.api.updateForm(body, this.data.id).subscribe(e => console.log(e));
    // this.dialogRef.close();
  }

  ngOnInit(): void {
    this.data.form_field_values.forEach(data => {
      const control = new FormControl(data.value, Validators.required);
      this.userForm.push(control);
    });
    console.log(this.data);
    // console.log(this.userForm);
  }

}
