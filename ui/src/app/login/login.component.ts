import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { HttpClient,HttpParams } from  '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  username = '';
  password = '';
  API_URL = "http://localhost:8000"

  constructor(private auth:ApiServiceService,private http:HttpClient){}

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }


  login(e) {
    
    this.http.post(this.API_URL+'/auth/login/',e).subscribe(res => {
      console.log(res);
      
    })
  }

  Register(e) {
    console.log(e);
  }
}
