import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ToolbarComponent} from '@/app/admin/components/toolbar/toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {SidenavComponent} from '@/app/admin/components/sidenav/sidenav.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, ToolbarComponent, MatSidenavModule, MatListModule, RouterModule, SidenavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  isSidenavOpen = false

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
