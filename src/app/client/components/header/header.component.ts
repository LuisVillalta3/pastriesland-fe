import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginModalComponent} from '@client/components/login-modal/login-modal.component';
import {CookiesService} from '@services/cookies.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  showNav = false
  isAtTop = window.scrollY === 0;

  isLoggedIn = false;

  private sub!: Subscription;

  constructor(
    private dialog: MatDialog,
    private cookieService: CookiesService,
  ) {}

  toggleShowNav() {
    this.showNav = !this.showNav;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0;
  }

  openLoginModal() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      minWidth: '250px',
      maxWidth: '1024px',
      width: 'calc(100% - 2rem)',
    })

    dialogRef.afterClosed().subscribe()
  }

  ngOnInit(): void {
    this.sub = this.cookieService.clientToken$.subscribe(
      token => this.isLoggedIn = !!token
    )
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  buttonAction() {
    if (!this.isLoggedIn) {
      this.openLoginModal()
      return
    }

    console.log('Estas loggeado vv')
    this.cookieService.deleteToken('client')
  }
}
