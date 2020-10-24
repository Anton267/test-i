import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/shared/api.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { UserCreateFormDialogComponent } from '../user-create-form-dialog/user-create-form-dialog.component';
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
  public displayedColumns: string[] = ['id', 'type', 'created_at', 'updated_at'];
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  public expandedElement: string;
  public pageSizeOptions: number[] = null;
  public pageSize: number = null;

  constructor(
    private api: ApiService,
    public dialog: MatDialog,
  ) { }

  public openNewFormDialog(): void {
    this.dialog.open(UserCreateFormDialogComponent, {
      minWidth: '50vw'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getForms();
      }
    });
  }

  public openDialog(formValue: FormValues): void {
    this.dialog.open(UserDialogComponent, {
      width: '80vw',
      data: { ...formValue }
    }).afterClosed().subscribe(res => {
      if (res) {
        this.getForms();
      }
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
    this.api.getForms().subscribe(formList => {
      console.log(formList);
      setTimeout(() => {
        this.dataSource = new MatTableDataSource(formList.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.setPaginator(formList.meta.per_page, formList.meta.pages_count);
    });
  }

  public deleteForm(id: number): void {
    this.dialog.open(DialogConfirmComponent, {
      minWidth: '50vw'
    }).afterClosed().subscribe(res => {
      if (res) {
        this.api.deleteForm(id).subscribe(() => this.getForms());
      }
    });
  }

  private setPaginator(perPage: number, pagesCount: number): void {
    const paginatorStep = Math.floor(perPage / pagesCount);
    const maxPaginatorCount = Math.max(perPage / paginatorStep);
    const pageSizeOptions = [];
    let count = 1;
    while (count <= maxPaginatorCount) {
      pageSizeOptions.push(paginatorStep * count);
      count++;
    }
    if (perPage > pageSizeOptions[pageSizeOptions.length - 1]) {
      pageSizeOptions.push(perPage);
    }
    this.pageSizeOptions = pageSizeOptions;
    this.pageSize = pagesCount;
  }

  ngOnInit(): void {
    this.getForms();
    // this.api.getFormList().pipe(
    // ).subscribe(formList => {
    //   console.log(formList);
    //   this.dataSource = new MatTableDataSource(formList.data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

}

