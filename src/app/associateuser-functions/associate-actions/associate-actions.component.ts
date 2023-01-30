import { AssociateService } from './../service/associate.service';
import { Component, OnInit } from '@angular/core';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-associate-actions',
  templateUrl: './associate-actions.component.html',
  styleUrls: ['./associate-actions.component.css']
})
export class AssociateActionsComponent implements OnInit {
  public employeeId:string;
  public associate:TrainingUser;
  public showAssocateData:boolean = false;

  constructor(private route: ActivatedRoute , private router: Router, private associateservice:AssociateService) { }

  ngOnInit() {
    this.associate = new TrainingUser();
    this.employeeId = this.route.snapshot.params['empid'];
    console.log(this.employeeId);
    this.fetchAssociateById();
  }

  fetchAssociateById() {
    this.showAssocateData=true;
    this.associateservice.getAssociateById(this.employeeId).subscribe((data:TrainingUser) => {
      this.associate=data;
    });
    return this.associate;
    }

}
