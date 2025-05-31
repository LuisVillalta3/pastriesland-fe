import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

export const ADMIN_COOKIE_KEY = 'adminAccessToken'
export const COOKIE_KEY = 'accessToken'

type KeyType = 'admin' | 'client'

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
  saveToken(token: string, key: KeyType, duration: number = 60) {
    const date = new Date();
    date.setMinutes(date.getMinutes() + duration)

    this.cookieService.set(
      this.getTokenKey(key),
      token,
      date,
    )
  }

  deleteToken(key: KeyType) {
    this.cookieService.delete(this.getTokenKey(key))
  }

  deleteAllTokens() {
    this.cookieService.deleteAll()
  }

  getToken(key: KeyType) {
    return this.renewSessionIfExists(key)
  }

  private renewSessionIfExists(key: KeyType) {
    const session = this.cookieService.get(this.getTokenKey(key))

    if (session) {
      this.saveToken(session, key)
    }

    return session
  }

  private getTokenKey(key: KeyType) {
    return key == 'client' ? COOKIE_KEY : ADMIN_COOKIE_KEY
  }
}
