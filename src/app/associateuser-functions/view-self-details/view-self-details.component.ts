import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingUser } from 'src/app/model/TrainingUser';
import { AssociateService } from '../service/associate.service';

@Component({
  selector: 'app-view-self-details',
  templateUrl: './view-self-details.component.html',
  styleUrls: ['./view-self-details.component.css']
})
export class ViewSelfDetailsComponent implements OnInit {
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
