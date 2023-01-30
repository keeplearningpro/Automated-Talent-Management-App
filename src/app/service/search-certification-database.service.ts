import { CertificateDetails } from './../model/CertificateDetails';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchCertificationDatabaseService {

  private certificationApi='http://localhost:8080/api/certification/getcertificatebyname';

  constructor(private http:HttpClient) { }

  searchCertificationByName(techname:string) : Observable<CertificateDetails[]> {
    let param = new HttpParams();
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    param = param.append('certname', techname);
    return this.http.get<CertificateDetails[]>(`${this.certificationApi}`, {headers:header , params:param});
  }
 
}
