import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getApi() {
    return this.http.get('http://localhost:8080/getAllUsers');
  }

  postAPI() {

  }

  putAPI() {

  }


}
