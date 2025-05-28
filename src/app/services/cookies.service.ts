import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

export const ADMIN_COOKIE_KEY = 'adminAccessToken'
export const COOKIE_KEY = 'accessToken'

type keyType = 'admin' | 'client'

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookieService: CookieService) { }

  /**
   *
   * @param token
   * @param key
   * @param duration - In Minutes
   */
  saveToken(token: string, key: keyType, duration: number = 15) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + duration)

    this.cookieService.set(
      this.getTokenKey(key),
      token,
      date,
    )
  }

  deleteToken(key: keyType) {
    this.cookieService.delete(this.getTokenKey(key))
  }

  deleteAllTokens() {
    this.cookieService.deleteAll()
  }

  private getTokenKey(key: keyType) {
    return key == 'client' ? COOKIE_KEY : ADMIN_COOKIE_KEY
  }
}
