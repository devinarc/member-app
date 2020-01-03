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

  //links for members entity 
  getAllDatas(apiName): Observable<any> {
    return this.http.get(baseUrl + '/' + apiName + '/all');
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
    const httpOptions = {
      headers: new HttpHeaders().set("Access-Control-Allow-Origin", "*")
    };
    return this.http.put(baseUrl + "/" + apiName + "/login" + body, httpOptions);
  }

}
