import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WebApiService {

  constructor(public http: Http) {
    console.log('Hello WebApiService Provider');
  }

  enviarDadosServidor(paramsUrl) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json, */*');
    headers.append('X-CSRFToken', 'csrftoken');

    return this.http.post(paramsUrl, { headers: headers });
  }
}
