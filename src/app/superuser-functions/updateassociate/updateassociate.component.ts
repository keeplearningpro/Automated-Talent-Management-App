import { SearchCertificationDatabaseService } from './../../service/search-certification-database.service';
import { SuperuserService } from './../service/superuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CertificateDetails } from 'src/app/model/CertificateDetails';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateassociate',
  templateUrl: './updateassociate.component.html',
  styleUrls: ['./updateassociate.component.css']
})
export class UpdateassociateComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router,
    private superuserService:SuperuserService,private certificationService:SearchCertificationDatabaseService) { }

    employeeid:string;
    public certificatelist : Observable<CertificateDetails[]>;
    showCertificationList:boolean = false;
    newcertid:string
    newcertname:string;

    public updateCandidate:TrainingUser;
    showtechform:boolean = false;
    showdateform:boolean = false;
    updateform:boolean=false;
    form : FormGroup;
    finalform:FormGroup;
    asso_cur_certid:string
    asso_cur_certname:string;
    asso_cur_assignedby:string;
    asso_cur_targetdate:string;
    ast_name:string;
    public desig:string;
    public lead:string;
    public loc:string;
    public platform:string;
    public certid:string;
    public certname:string;
    public assignedby:string;
    public certcompletiondate:string;
    public decisionflag:boolean;
    public showconflictmsg:boolean;

  ngOnInit(): void {
    this.updateCandidate = new TrainingUser();
    this.employeeid = this.route.snapshot.params['empid'];
    this.superuserService.getAssociateById(this.employeeid).subscribe((data:TrainingUser) => {
    this.updateCandidate = data;
    });
    
    this.form = new FormGroup({
      desig :new FormControl('',[Validators.required]),
      lead :new FormControl('',[Validators.required]),
      loc :new FormControl('',[Validators.required]),
      platform :new FormControl('',[Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }
  
  fetchCertificateListByName(form:any) {
    var techname = form.value.techname;
    console.log(techname);
    this.showtechform = true;
    this.showCertificationList = true;
    return this.certificatelist = this.certificationService.searchCertificationByName(techname);
    }

    setNewCertificationInfo(certid:string,certname:string){
      this.showCertificationList = false;
      this.showdateform = true;
          this.newcertid = certid;
      this.newcertname = certname;
     
  }

  setNewCertificationData(formdate:any) {
    this.certcompletiondate = formdate.value.mydate;
    this.finalform = new FormGroup({
      desig :new FormControl(this.form.value.desig),
      lead :new FormControl(this.form.value.lead),
      loc :new FormControl(this.form.value.loc),
      platform :new FormControl(this.form.value.platform),
      certid : new FormControl(this.newcertid),
      certname : new FormControl(this.newcertname),
      assignedby : new FormControl('Superuser'),
      certcompletiondate : new FormControl(this.certcompletiondate)
    });
    console.log(this.finalform.value);
    this.updateAsssociateById();
      
  }

  updateAsssociateById() {
    this.superuserService.updateAssociate(this.employeeid,this.finalform.value).subscribe(res => {
    console.log('Associate Updated Successfully');
    this.router.navigateByUrl('/superuser-functions/moreactions');
    
    })

  }

  getNewDetails() {
       this.decisionflag = true;
    }
 
    initializeCertificationUpdate(){
      console.log("Going with Certification Update")
      console.log(this.updateCandidate.certid);
      if (this.updateCandidate.certid == '1001') //include date comparion
      {
        this.showtechform=true;
      }
      else 
      {
        this.asso_cur_certid=this.updateCandidate.certid;
        this.asso_cur_certname=this.updateCandidate.certname;
        this.asso_cur_assignedby=this.updateCandidate.assignedby;
        this.asso_cur_targetdate= this.updateCandidate.certcompletiondate;
        this.ast_name=this.updateCandidate.name;
        this.showconflictmsg=true
      }
      
    }


    initializeOtherUpdate() {
    console.log("going With Other Info Update")

    this.finalform = new FormGroup({
        desig :new FormControl(this.form.value.desig),
        lead :new FormControl(this.form.value.lead),
        loc :new FormControl(this.form.value.loc),
        platform :new FormControl(this.form.value.platform),
        certid : new FormControl(this.updateCandidate.certid),
        certname : new FormControl(this.updateCandidate.certname),
        assignedby : new FormControl(this.updateCandidate.assignedby),
        certcompletiondate : new FormControl(this.updateCandidate.certcompletiondate)
      });
    this.updateAsssociateById()

    }
}
