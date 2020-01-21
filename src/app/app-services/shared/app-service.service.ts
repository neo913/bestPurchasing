import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as API_CONFIG from '../../../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient, private httpParams: HttpParams) { }

  /**
   * @param path  GET function requires exact path
   */
  getApi(path: string) {
    return this.http.get(API_CONFIG.backendUrl + API_CONFIG.getAPIPath(path));
  }

  postAPI(param: string, body: any): Observable<any> {
    const data = new HttpParams({fromObject: body});
    return this.http.post(API_CONFIG.backendUrl + API_CONFIG.getAPIPath(param), data);
  }

  putAPI() {

  }


}
