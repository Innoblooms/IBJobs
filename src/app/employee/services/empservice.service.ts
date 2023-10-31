import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  constructor(private http:HttpClient){}

  empreg(data:any){
    return this.http.post('http://localhost:3000/IBjobsController/saveUser',data)

  }
  forgotPassword(email: string) {
    return this.http.post('/api/forgot-password', { email });
}
 
}
