import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserTableComponent implements OnInit {

  public dataSource: MatTableDataSource<any>;
  public displayedColumns: string[] = ['id', 'title', 'type', 'updated_at'];
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  public expandedElement: string;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  public deleteForm(id: string | number): void {
    this.api.deleteForm(id).subscribe(e => this.getForms());
  }

  public openDialog(formValue: FormValues): void {
    this.dialog.open(UserDialogComponent, {
      width: '80vw',
      data: { ...formValue }
    });
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getForms(): void {
    this.api.getForms().pipe(
      catchError((err: Errors) => {
        let error: string;
        try {
          error = err.error.errors[0].title;
        } catch (error) {
          error = null;
        }
        console.error(error);
        this.toastr.error(error, 'Error');
        return of(null);
      })
    ).subscribe(formList => {
      console.log(formList);
      this.dataSource = new MatTableDataSource(formList.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    // this.api.getFormList().pipe(
    //   catchError((err: Errors) => {
    //     let error: string;
    //     try {
    //       error = err.error.errors[0].title;
    //     } catch (error) {
    //       error = null;
    //     }
    //     console.error(error);
    //     this.toastr.error(error, 'Error');
    //     return of(null);
    //   })
    // ).subscribe(formList => {
    //   console.log(formList);
    //   this.dataSource = new MatTableDataSource(formList.data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
    this.getForms();
    // const body = { form_field_values: [{ form_field_id: 33, value: 'TEST VALUE' }] };
    // this.api.createForm(body).subscribe(e => console.log(e));
    // this.api.getForms().subscribe(e => console.log(e));
  }

}
