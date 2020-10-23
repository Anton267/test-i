import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  public dynamicForm: FormGroup;

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
  ) {
    this.dynamicForm = this.fb.group({
      // userForm: ['', Validators.required],
      userDynamicsForms: new FormArray([])
    });
  }

  get controls(): { [key: string]: AbstractControl } {
    return this.dynamicForm.controls;
  }

  get userDynamicsForms(): FormArray {
    return this.controls.userDynamicsForms as FormArray;
  }

  ngOnInit(): void {
    this.api.getFormList().subscribe(formList => {
      console.log(formList);
      formList.data.forEach(item => {
        const form = {};
        form[item.title] = ['', Validators.required];
        const group = this.fb.group(form);
        this.userDynamicsForms.push(group);
      });
      console.log(this.userDynamicsForms);
    });
  }

}
