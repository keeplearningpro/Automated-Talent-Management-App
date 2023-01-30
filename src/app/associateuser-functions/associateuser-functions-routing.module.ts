import { ViewSelfDetailsComponent } from './view-self-details/view-self-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociateActionsComponent } from './associate-actions/associate-actions.component';

import { AssociateuserFunctionsComponent } from './associateuser-functions.component';
import { CompletionDateUpdateComponent } from './completion-date-update/completion-date-update.component';
import { EnrolForCertificationComponent } from './enrol-for-certification/enrol-for-certification.component';

const routes: Routes = [
{ path: '', component: AssociateuserFunctionsComponent },
{ path: 'selfdetails' , component:ViewSelfDetailsComponent},
{ path: 'moreactions' , component:AssociateActionsComponent},
{ path: 'moreactions/enrol' , component:EnrolForCertificationComponent},
{ path: 'moreactions/updatedate' , component:CompletionDateUpdateComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociateuserFunctionsRoutingModule { }
