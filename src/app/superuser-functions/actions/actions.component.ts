import { SuperuserService } from './../service/superuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  public associateList: Observable<TrainingUser[]>;
  employeeid: string;
  public associate: Observable<TrainingUser>;
  public associateObjectList: TrainingUser[];
  public updatedLocArray: string[] = [];
  //associateObject: TrainingUser;
  showTable: boolean = false;
  formLocation: FormGroup;
  formPlatform: FormGroup;
  formDesignation: FormGroup;
  formLead: FormGroup;
  form: FormGroup;
  showLocForm: Boolean = false;
  showPltForm: Boolean = false;
  showDesigForm: Boolean = false;
  showLdForm: Boolean = false;
  showNmForm: Boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
    private superuserservice:SuperuserService) { }

  ngOnInit(): void {
      this.superuserservice.getAllAssociate().subscribe((data: TrainingUser[]) => {
      this.prepareData(data);
    }, (err) => {
      console.log(err);
    });
  }

  prepareData(observabledata: TrainingUser[]) {
    console.log('Data prepared');
    this.associateObjectList = observabledata;
  }

  showLocationForm() {
    this.formLocation = new FormGroup({
      location: new FormControl('', Validators.required)
    });
    this.showTable = false;
    this.showNmForm = false;
    this.showPltForm = false;
    this.showDesigForm = false;
    this.showLdForm = false;
    this.showLocForm = true;
  }

  showPlatformForm() {
    this.formPlatform = new FormGroup({
      platform: new FormControl('', Validators.required)
    })
    this.showTable = false;
    this.showNmForm = false;
    this.showDesigForm = false;
    this.showLdForm = false;
    this.showLocForm = false;
    this.showPltForm = true;
  }

  showDesinationForm() {
    this.formDesignation = new FormGroup({
      designation: new FormControl('', Validators.required)
    })
    this.showTable = false;
    this.showNmForm = false;
    this.showLdForm = false;
    this.showLocForm = false;
    this.showPltForm = false;
    this.showDesigForm = true;

  }

  showLeadForm() {
    this.formLead = new FormGroup({
      leadname: new FormControl('', Validators.required)
    })
    this.showTable = false;
    this.showNmForm = false;
    this.showLocForm = false;
    this.showPltForm = false;
    this.showDesigForm = false;
    this.showLdForm = true;
  }

  showNameForm() {
    this.showTable = false;
    this.showLocForm = false;
    this.showPltForm = false;
    this.showDesigForm = false;
    this.showLdForm = false;
    this.showNmForm = true;
  }

  fetchAssociateByLocation() {
    var loc = this.formLocation.value.location;
    console.log(loc);
    this.showTable = true;
    return this.associateList = this.superuserservice.getAssociateByLocaition(loc);

  }

  fetchAssociateByPlatform() {
    var plt = this.formPlatform.value.platform;
    this.showTable = true;
    return this.associateList = this.superuserservice.getAssociateByPlatform(plt);
  }

  fetchAssociateByDesignation() {
    var desig = this.formDesignation.value.designation;
    this.showTable = true;
    return this.associateList = this.superuserservice.getAssociateByDesignation(desig);
  }

  fetchAssociateByLead() {
    var lead = this.formLead.value.leadname;
    this.showTable = true;
    return this.associateList = this.superuserservice.getAssociateByLead(lead);
  }

  fetchAssociateByName(form: any) {
    var assoname = form.value.associatename;
    this.showTable = true;
    return this.associateList = this.superuserservice.getAssociateByName(assoname);
  }


}
