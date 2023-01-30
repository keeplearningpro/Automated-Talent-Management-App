import { SearchCertificationDatabaseService } from './../service/search-certification-database.service';
import { CertificateDetails } from './../model/CertificateDetails';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingUser } from '../model/TrainingUser';

@Component({
  selector: 'app-certification-info',
  templateUrl: './certification-info.component.html',
  styleUrls: ['./certification-info.component.css']
})
export class CertificationInfoComponent implements OnInit {

  public certificatelist : Observable<CertificateDetails[]>;
  technologyName:string;
  showCertificationList:boolean = false;
  private associate:TrainingUser;
  
  constructor(private certificationService:SearchCertificationDatabaseService) { }

  ngOnInit(): void {
    this.showCertificationList=false;
  }

  fetchCertificationListByTechnology(form:any) {
    this.technologyName=form.value.techname;
    this.showCertificationList = true;
    return this.certificatelist = this.certificationService.searchCertificationByName(this.technologyName);
    }


}
