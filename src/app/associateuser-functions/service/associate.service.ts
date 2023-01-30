import { TrainingUser } from './../../model/TrainingUser';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AssociateService {

  private associateIdAPI='http://localhost:8080/api/associateuser/getuserbyid';
  private certificationDtlsUpdateAPI='http://localhost:8080/api/associateuser/updatecertification';

  constructor(private http:HttpClient) { }

  // httpoptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };
  
  getAssociateById(empid:string):Observable<TrainingUser>{
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // console.log('employee id reached here'+ empid);
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('empid', empid);
    return this.http.get<TrainingUser>(this.associateIdAPI+"?empid="+empid);
  }

  updateCertificationDetails(empid:string,certdetails:any):Observable<TrainingUser> {
     return this.http.put<TrainingUser>(this.certificationDtlsUpdateAPI+"/"+ empid, certdetails);
   }
  
}
