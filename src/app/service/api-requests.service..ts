import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {
  results: Object;


  constructor(private http: HttpClient) { }


  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  //links for members entity 
  getAllDatas(apiName): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    };
    return this.http.get(baseUrl + '/' + apiName + '/all', httpOptions);
  }

  getAllLocations(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    };
    return this.http.get(baseUrl + '/locations', httpOptions);
  }

  getOne(apiName, id): Observable<any> {
    return this.http.get(baseUrl + '/' + apiName + '/' + id)
  }

  createOne(apiName, body): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    };
    return this.http.put(baseUrl + "/" + apiName + "/save" + body, httpOptions);
  }

  updateOne(apiName, id, body): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    };
    return this.http.put(baseUrl + "/" + apiName + "/update/" + id, body, httpOptions);
  }

  login(apiName, body): Observable<any> {
    return this.http.post(baseUrl + "/" + apiName + "/login", body, { headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*"), responseType: 'text' });
  }

}
