import { SearchCertificationDatabaseService } from './../../service/search-certification-database.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CertificateDetails } from 'src/app/model/CertificateDetails';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { AssociateService } from '../service/associate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enrol-for-certification',
  templateUrl: './enrol-for-certification.component.html',
  styleUrls: ['./enrol-for-certification.component.css']
})
export class EnrolForCertificationComponent implements OnInit {

  public certificatelist : Observable<CertificateDetails[]>;
  public employeeId:string;
  public associate:TrainingUser;
  public technologyName:string;

  public showCertificationList:boolean = true;
  public showTable:boolean = false;
  public showEnrolmentForm:boolean = false;
  public certid:string;
  public certcompdate:string;
  private enrolCertificationForm : FormGroup;
  private selectedCertId:string;
  private selectedCertName:string;
  private selectedCertCompDate:string;

  constructor(private certificationService:SearchCertificationDatabaseService,
    private associateService:AssociateService, private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.associate = new TrainingUser();
    this.employeeId = this.route.snapshot.params['empid'];
    console.log(this.employeeId);
    this.associateService.getAssociateById(this.employeeId).subscribe((data:TrainingUser) => {
    this.associate = data;
    this.showEnrolmentForm=false;
    });
  }

  displayform(certid:string,certname:string){
    this.showCertificationList=false;
    this.showTable = false;
    this.showEnrolmentForm=true;
    this.selectedCertId = certid;
    this.selectedCertName = certname;
    //console.log(this.mycertid);
  }
  fetchCertificateListByName(form:any) {
    this.technologyName = form.value.techname;
    ///console.log(techname);
    this.showCertificationList = true;
    this.showTable = true;
    return this.certificatelist = this.certificationService.searchCertificationByName(this.technologyName);
    }

    
    enrolForCertification(formcert:any) {
      this.selectedCertCompDate=formcert.value.certcompdate;
      console.log(this.selectedCertCompDate);
      this.showCertificationList=false;
      this.enrolCertificationForm = new FormGroup({
        certid :new FormControl(this.selectedCertId),
        certname:new FormControl(this.selectedCertName),
        assignedby:new FormControl('Associate'),
        certcompletiondate :new FormControl(this.selectedCertCompDate)
      });
     console.log(this.enrolCertificationForm.value); 
     this.associateService.updateCertificationDetails(this.employeeId,this.enrolCertificationForm.value).subscribe(res =>{
     console.log('Enrolled Successfully for Chosen Certiication');
     this.router.navigate(['associateuser-functions', this.employeeId , 'selfdetails']);
     })
   
    }

}
