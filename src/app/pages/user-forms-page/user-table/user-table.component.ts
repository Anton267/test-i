import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {

  public dynamicForm: FormGroup;
  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['id', 'title', 'type', 'updated_at'];
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

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

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.api.getFormList().subscribe(formList => {
      console.log(formList);
      // formList.data.forEach(item => {
      //   const form = {};
      //   form[item.title] = ['', Validators.required];
      //   const group = this.fb.group(form);
      //   this.userDynamicsForms.push(group);
      // });
      const x = [...formList.data, ...formList.data.slice(0, 4)];
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.userDynamicsForms);
    });
  }

}
