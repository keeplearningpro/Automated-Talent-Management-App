import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { AssociateService } from '../service/associate.service';

@Component({
  selector: 'app-completion-date-update',
  templateUrl: './completion-date-update.component.html',
  styleUrls: ['./completion-date-update.component.css']
})
export class CompletionDateUpdateComponent implements OnInit {
  public employeeId:string;
  public associate:TrainingUser; 
  private newCertcompDate:string; 
  showDateForm:boolean=true;
  private updateForm:FormGroup;
  
  constructor(private route: ActivatedRoute , private router: Router, private associateService:AssociateService) { }

  ngOnInit(): void {
    this.associate = new TrainingUser();
    this.employeeId = this.route.snapshot.params['empid'];
    console.log(this.employeeId);
  }
  initializeUpdateOperation(formcompdate:any) {
    this.newCertcompDate=formcompdate.value.certcompdate;
    this.associateService.getAssociateById(this.employeeId).subscribe(res => {
    this.associate=res;
    this.triggerUpdateOperation(this.associate); 
    });
  }

  triggerUpdateOperation(associate:TrainingUser) {
    //console.log(this.mycertcompdate);
    //console.log(this.associate.certid);
    this.updateForm = new FormGroup({
      certid :new FormControl(this.associate.certid),
      certname:new FormControl(this.associate.certname),
      assignedby:new FormControl(this.associate.assignedby),
      certcompletiondate :new FormControl(this.newCertcompDate)
    });
    console.log(this.updateForm.value);
    this.associateService.updateCertificationDetails(this.employeeId,this.updateForm.value).subscribe(res =>{
    console.log('Certification Date Updated Successfully');
    this.router.navigate(['associateuser-functions', this.employeeId, 'selfdetails']);
    });

  }

}
