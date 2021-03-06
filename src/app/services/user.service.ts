import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: User): Observable<HttpResponse<any>> {
    const params = JSON.stringify(user);
    return this.http.post(baseURL + '/login', params, { observe: 'response' } );
  }

}
