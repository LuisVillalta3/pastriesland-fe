import {Routes} from '@angular/router';
import {HomeComponent} from '@client/pages/home/home.component';
import {MainLayoutComponent} from '@client/layouts/main-layout/main-layout.component';
import {SobreNosotrosComponent} from '@client/pages/sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sobre-nosotros', component: SobreNosotrosComponent },
      { path: 'inicio', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
    ],
  }
]
