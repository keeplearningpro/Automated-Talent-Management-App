import { SuperuserService } from './../service/superuser.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainingUser } from 'src/app/model/TrainingUser';

@Component({
  selector: 'app-getalldetails',
  templateUrl: './getalldetails.component.html',
  styleUrls: ['./getalldetails.component.css']
})
export class GetalldetailsComponent implements OnInit {
  public associatelist:Observable<TrainingUser[]>;

  constructor(private superuserservice:SuperuserService) { }

  ngOnInit(): void {
    this.fetchAllAssociateDetails();
  }

  fetchAllAssociateDetails() {
    return this.associatelist=this.superuserservice.getAllAssociate();
  }
}
