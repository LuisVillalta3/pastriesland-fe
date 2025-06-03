import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

type UserDto = {
  email: string;
  name: string;
  lastName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(user: UserDto): Observable<any> {
    const uri = 'users'

    return this.http.post(uri, user)
  }
}
