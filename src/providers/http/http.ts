import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {
  public url: string;

  constructor(public http: Http) {
    this.url = 'http://localhost:3000/'
  }
  loadData(api, data) {
    let params = [];
    Object.keys(data).forEach(element => {
      let k = element + '=' + data[element];
      params.push(k);
    });
    let path = this.url + api + '?' + params.join('&');
    return this.http.get(path).map(
      res => res._body, 
      err => {
        console.log(err);
      }
    )
  }

  loadDataNoQuery(api) {
    let path = this.url + api + '?';
    return this.http.get(path).map(
      res => res._body,
      err => {
        console.log(err);
      }
    )
  }
}
