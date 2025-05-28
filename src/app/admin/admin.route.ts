import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      {
        path: 'categories',
        loadChildren: () =>
          import('./modules/categories/categories.module').then(m => m.CategoriesModule)
      },
    ]
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

