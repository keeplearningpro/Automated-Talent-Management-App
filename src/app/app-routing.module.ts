import { AuthGuardService } from './service/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CertificationInfoComponent } from './certification-info/certification-info.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path : 'certificationinfo',component:CertificationInfoComponent},
  { path : '' , redirectTo:'',pathMatch:'full'},
  { path: 'superuser-functions', loadChildren: () => import('./superuser-functions/superuser-functions.module').then(m => m.SuperuserFunctionsModule) , canActivate:[AuthGuardService] },
  { path: 'login' , component:LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGuardService]},
  { path: 'associateuser-functions/:empid', loadChildren: () => import('./associateuser-functions/associateuser-functions.module').then(m => m.AssociateuserFunctionsModule) , canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
