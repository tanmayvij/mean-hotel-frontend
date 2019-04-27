import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ0ZXN0MiIsImxldmVsIjoxLCJpYXQiOjE1NTYyMDU0OTMsImV4cCI6MTU1NjI5MTg5M30.luqbDb-sSLxsX0LKFTaF6NTYDO4tS6kCI8V_d9pizmA'
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
