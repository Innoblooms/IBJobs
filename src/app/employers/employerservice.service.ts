import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployerserviceService {

  constructor(private http:HttpClient) { }


  EmployerReg(data:any){
    return this.http.post('http://localhost:3000/IBjobsController/saveEmployer',data)

  }

  PostJobs(data:any){
    return this.http.post('http://localhost:3000/IBjobsController/saveJobs',data)

  }

}
