import {Routes} from '@angular/router';
import {HomeComponent} from '@client/pages/home/home.component';
import {MainLayoutComponent} from '@client/layouts/main-layout/main-layout.component';
import {SobreNosotrosComponent} from '@client/pages/sobre-nosotros/sobre-nosotros.component';
import {ProductsComponent} from '@client/pages/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sobre-nosotros', component: SobreNosotrosComponent },
      { path: 'productos', component: ProductsComponent },
      { path: 'inicio', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
    ],
  }
]
