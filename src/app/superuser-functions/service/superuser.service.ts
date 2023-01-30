import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingUser } from 'src/app/model/TrainingUser';

@Injectable()

export class SuperuserService {

  private allAssociateListAPI = 'http://localhost:8080/api/superuser/getallusers';
  private associateByidAPI = 'http://localhost:8080/api/superuser/getuserbyid';
  private associateByNameAPI = 'http://localhost:8080/api/superuser/getuserbyname'
  private associateListByDesignationAPI ='http://localhost:8080/api/superuser/getuserbydesignation';
  private associateListByLeadAPI = 'http://localhost:8080/api/superuser/getuserbylead';
  private associateListByLocationAPI = 'http://localhost:8080/api/superuser/getuserbylocation';
  private associateListByPlatformAPI = 'http://localhost:8080/api/superuser/getuserbyplatform';
  private updateAssociateAPI = 'http://localhost:8080/api/superuser/updateassociate/';
  private deleteAssociateAPI = 'http://localhost:8080/api/superuser/deleteassociate/';
  private addAssociateAPI = 'http://localhost:8080/api/superuser/addassociate/';

  constructor(private http:HttpClient) { }

  getAllAssociate():Observable<TrainingUser[]> {
    return this.http.get<TrainingUser[]>(this.allAssociateListAPI);
  }

  getAssociateById(empid:string):Observable<TrainingUser>{
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('empid', empid);
    return this.http.get<TrainingUser>(this.associateByidAPI+"?empid="+empid);
  }

  getAssociateByLocaition(location:string):Observable<TrainingUser[]> {
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('loc', location);
    return this.http.get<TrainingUser[]>(this.associateListByLocationAPI+"?loc="+location);
      }

   getAssociateByPlatform(platform:string):Observable<any> {
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('platform', platform);
    return this.http.get(this.associateListByPlatformAPI+"?platform="+platform);
      }

   getAssociateByDesignation(designation:string):Observable<TrainingUser[]> {
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('desig', designation);
    return this.http.get<TrainingUser[]>(this.associateListByDesignationAPI+"?desig="+designation);
   }

   getAssociateByLead(lead:string):Observable<TrainingUser[]> {
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('lead', lead);
    return this.http.get<TrainingUser[]>(this.associateListByLeadAPI+"?lead="+lead);
   }

   getAssociateByName(name:string):Observable<any> {
    // let param = new HttpParams();
    // let header = new HttpHeaders();
    // header = header.append('Content-Type', 'application/json');
    // param = param.append('name', name);
    return this.http.get(this.associateByNameAPI+"?name="+name);
   }


updateAssociate (empid:string , value:any):Observable<TrainingUser> {
  return this.http.put<TrainingUser>(this.updateAssociateAPI+empid, value);
// let body = JSON.stringify(value);
// return this.http.put(`${this.url_updateAssociate}/${empid}`,body);
}

createAssociate(value:string):Observable<TrainingUser> {
  return this.http.post<TrainingUser>(this.addAssociateAPI,value);
}

deleteAssociate (empid:string):Observable<any> {
  return this.http.delete<TrainingUser>(this.deleteAssociateAPI+empid);
}

}
