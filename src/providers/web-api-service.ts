import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WebApiService {

  constructor(public http: Http) {
    console.log('Hello WebApiService Provider');
  }

  searchPeople(paramsUrl) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json, */*');
    return this.http.get(paramsUrl, { headers: headers });
  }
}
