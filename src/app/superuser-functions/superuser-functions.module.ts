import { SuperuserService } from './service/superuser.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperuserFunctionsRoutingModule } from './superuser-functions-routing.module';
import { SuperuserFunctionsComponent } from './superuser-functions.component';
import { RemoveDuplicatePipe } from './pipe/remove-duplicate.pipe';
import { ActionsComponent } from './actions/actions.component';
import { GetalldetailsComponent } from './getalldetails/getalldetails.component';
import { UpdateassociateComponent } from './updateassociate/updateassociate.component';
import { AddassociateComponent } from './addassociate/addassociate.component';
import { DeleteassociateComponent } from './deleteassociate/deleteassociate.component';


@NgModule({
  declarations: [SuperuserFunctionsComponent, RemoveDuplicatePipe, ActionsComponent, GetalldetailsComponent, UpdateassociateComponent, AddassociateComponent, DeleteassociateComponent],
  imports: [
    CommonModule,
    SuperuserFunctionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[SuperuserService,RemoveDuplicatePipe]
})
export class SuperuserFunctionsModule { }
