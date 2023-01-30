import { SuperuserService } from './../service/superuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingUser } from 'src/app/model/TrainingUser';

@Component({
  selector: 'app-deleteassociate',
  templateUrl: './deleteassociate.component.html',
  styleUrls: ['./deleteassociate.component.css']
})
export class DeleteassociateComponent implements OnInit {

  constructor(private route:ActivatedRoute , private router:Router, 
    private superuserService:SuperuserService) { }

    employeeid:string;
    traininguserlist:TrainingUser[] = [];
    public myassociate:TrainingUser;
    showTable:boolean = false;

  ngOnInit(): void {
    this.employeeid = this.route.snapshot.params['empid'];
    this.myassociate=new TrainingUser();
    this.getTargetAssociate();
  }


  getTargetAssociate() {
    this.showTable=true;
    this.superuserService.getAssociateById(this.employeeid).subscribe((data:TrainingUser) => {
     //console.log(data);
     this.myassociate = data;
     //console.log(this.myassociate);
     });
  }

    deleteAssociateById(employeeid:string) {
    this.superuserService.deleteAssociate(employeeid).subscribe(res => {
      this.traininguserlist=this.traininguserlist.filter(item => item.empid!=employeeid);
      console.log('Associate Deleted Successfully');
    })
  }

}
