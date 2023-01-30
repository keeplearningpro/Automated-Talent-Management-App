import { DeleteassociateComponent } from './deleteassociate/deleteassociate.component';
import { AddassociateComponent } from './addassociate/addassociate.component';
import { UpdateassociateComponent } from './updateassociate/updateassociate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { GetalldetailsComponent } from './getalldetails/getalldetails.component';

import { SuperuserFunctionsComponent } from './superuser-functions.component';

const routes: Routes = [
  { path: '', component: SuperuserFunctionsComponent },
  { path: 'getalldetails', component:GetalldetailsComponent},
  { path: 'moreactions' , component:ActionsComponent},
  { path: 'moreactions/:empid/update' , component:UpdateassociateComponent},
  { path: 'moreactions/:empid/delete' , component:DeleteassociateComponent},
  { path: 'addassociate' , component:AddassociateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperuserFunctionsRoutingModule { }
