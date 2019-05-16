import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RestService {
  endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }
  private extractData(res: Response){
    let body = res;
    return body || [ ] || { };
  }
  getAnimals(): Observable<any>{
    return this.http.get(this.endpoint + 'animals/list-animal').pipe(
      map(this.extractData));
  }
  getManager(): Observable<any>{
    return this.http.get(this.endpoint + 'managers/list-managers').pipe(
      map(this.extractData));
  }
}
