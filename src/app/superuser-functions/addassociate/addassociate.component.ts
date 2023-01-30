import { SuperuserService } from './../service/superuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addassociate',
  templateUrl: './addassociate.component.html',
  styleUrls: ['./addassociate.component.css']
})
export class AddassociateComponent implements OnInit {

  constructor(private route: ActivatedRoute , private router: Router,
    private superuserService:SuperuserService) { }

    showdata:boolean = false;
    associateAttributeForm : FormGroup;
    empid:string;
    name:string;
    desig:string;
    lead:string;
    loc:string;
    platform:string;
    emaiil:string;
    certid:string;
    certname:string;
    assignedby:string
    certcompletiondate:string;

  ngOnInit(): void {
    this.associateAttributeForm=new FormGroup({
      empid:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      desig:new FormControl('',[Validators.required]),
      lead:new FormControl('',[Validators.required]),
      loc:new FormControl('',[Validators.required]),
      platform:new FormControl('',[Validators.required]),
      emailid:new FormControl('',[Validators.required]),
      certid:new FormControl('1001'),
      certname:new FormControl('TBD'),
      assignedby:new FormControl('Unassigned'),
      certcompletiondate:new FormControl('01/01/1900')
    });
  }
  
  get f() {
    return this.associateAttributeForm.controls;
  }
  
  addNewAssociate() {
    console.log(this.associateAttributeForm.value);
    this.superuserService.createAssociate(this.associateAttributeForm.value).subscribe(res => {
      console.log('New Associate Create Successfully');
      this.router.navigateByUrl('/superuser-functions/moreactions');
    })
  }

}
