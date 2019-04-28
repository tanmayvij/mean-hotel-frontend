import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + sessionStorage.token
    })
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getData(url: string) {
    return this.http.get(url)
  }
  postData(url: string, data: Object) {
    console.log(data);
    return this.http.post(url, data, httpOptions)
  }
}
