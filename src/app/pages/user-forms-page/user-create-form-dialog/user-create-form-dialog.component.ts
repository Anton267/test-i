import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-create-form-dialog',
  templateUrl: './user-create-form-dialog.component.html',
  styleUrls: ['./user-create-form-dialog.component.sass']
})
export class UserCreateFormDialogComponent {

  public userCreateForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private api: ApiService,
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
    });
  }

  public get id(): AbstractControl {
    return this.userCreateForm.get('id');
  }

  public get value(): AbstractControl {
    return this.userCreateForm.get('value');
  }

}

