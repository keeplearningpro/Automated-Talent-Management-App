import { AssociateService } from './service/associate.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociateuserFunctionsRoutingModule } from './associateuser-functions-routing.module';
import { AssociateuserFunctionsComponent } from './associateuser-functions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssociateActionsComponent } from './associate-actions/associate-actions.component';
import { ViewSelfDetailsComponent } from './view-self-details/view-self-details.component';
import { CompletionDateUpdateComponent } from './completion-date-update/completion-date-update.component';
import { EnrolForCertificationComponent } from './enrol-for-certification/enrol-for-certification.component';


@NgModule({
  declarations: [AssociateuserFunctionsComponent, AssociateActionsComponent, ViewSelfDetailsComponent, CompletionDateUpdateComponent, EnrolForCertificationComponent],
  imports: [
    CommonModule,
    AssociateuserFunctionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AssociateService]
})
export class AssociateuserFunctionsModule { }
