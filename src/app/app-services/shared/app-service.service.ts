import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as API_CONFIG from '../../../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /**
   * @param path  GET function requires exact path
   */
  getApi(path: string) {
    return this.http.get(API_CONFIG.backendUrl + API_CONFIG.getAPIPath(path));
  }

  postAPI() {

  }

  putAPI() {

  }


}
