import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  API_URL = "http://localhost:8000"

  constructor(private  httpClient:  HttpClient) { }

  AuthLogin(e){    
    console.log(typeof(e));
    return  this.httpClient.post(this.API_URL+'/auth/login/',e);
  }
}
