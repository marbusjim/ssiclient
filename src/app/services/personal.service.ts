import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Personal} from '../shared/Personal';

@Injectable()
export class PersonalService {

  constructor(private http: HttpClient) { }

  getListPersonals(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/personal', { headers: headers});
  }

  savePersonal(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/personal/save', params, { headers: headers} );
  }

  deletePersonal(personal: Personal): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/personal/' + personal.id, { headers: headers});
  }
}