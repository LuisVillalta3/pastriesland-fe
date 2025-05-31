import {Routes} from '@angular/router';
import {ListComponent} from './pages/list/list.component';
import {FormComponent} from '@/app/admin/modules/categories/pages/form/form.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: FormComponent },
  { path: ':id/edit', component: FormComponent }
];
