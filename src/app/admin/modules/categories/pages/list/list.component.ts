import {Component, inject, OnInit} from '@angular/core';
import type {GridApi, GridOptions, GridReadyEvent} from 'ag-grid-community';
import {BreadcrumbItem} from '@/app/admin/components/breadcrumb/breadcrumb.component';
import {TableComponent} from '@/app/admin/components/table/table.component';
import {PageContextService} from '@/app/admin/services/page-context.service';
import {createGridOptions} from '@/app/admin/util/create-grid-options.util';
import {CATEGORY_COLUMN_DEFS } from '@/app/admin/modules/categories/pages/list/constants';
import {CategoryService} from '@/app/admin/modules/categories/category.service';
import {NotificationService} from '@/app/core/services/notification.service';
import {categoryTitle, createBcList, defaultBcList} from '@/app/admin/modules/categories/constants';
import {Router} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DeleteDialogComponent} from '@/app/admin/components/confirm-dialog/delete-dialog.component';


@Component({
  selector: 'app-list',
  imports: [TableComponent, MatDialogModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  constructor(
    private pageContext: PageContextService,
    private readonly categoryService: CategoryService,
    private notification: NotificationService,
    private router: Router,
  ) {}

  gridOptions: GridOptions<any> = {}

  gridApi!: GridApi

  loading: boolean = false

  ngOnInit(): void {
    setTimeout(() => {
      this.pageContext.setTitle(categoryTitle)
      this.pageContext.setBreadcrumbs(defaultBcList)
      this.pageContext.setCreationLink('categories/create')
    });
    //
    this.gridOptions = createGridOptions<any>({
      columnDefs: CATEGORY_COLUMN_DEFS,
      onGridReady: this.onGridReady.bind(this),
      loading: this.loading,
      context: {
        componentParent: this
      }
    })
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.loadData()
  }

  loadData() {
    this.loading = true;

    this.categoryService.getAll().subscribe({
      next: (res) => {
        this.gridApi?.setGridOption("rowData", res.data!.results)
      },
    })

    this.loading = false
  }

  onDelete(rowData: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: '¿Desea borrar esta categoría?',
        message: `Si borra la categoría ${rowData.name} no se podra recuperar`,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.deleteCategory(rowData.id)
    })
  }

  async onEdit(rowData: any) {
    await this.router.navigate([`admin/categories/${rowData.id}/edit`])
  }

  deleteCategory(id: string) {
    console.log(id)
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.loadData()
      }
    })
  }
}
