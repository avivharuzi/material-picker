import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ColorService {

  constructor(public http: HttpClient) { }

  getColors(): Observable<any> {
    return this.http.get('assets/data/colors.json').map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getSchema(slug: string): Observable<any> {
    return this.http.get('assets/data/colors.json').map((response: any) => {
      return response.filter(schema => schema.slug === slug)[0];
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }
}
