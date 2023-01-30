import { AuthenticationService } from './../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin = false
  form : FormGroup;
  private userRole:string;
  public rolesArray=['ASSOCIATE','SUPERUSER','LEADUSER'];
  //public loginErrorMessage:Boolean=false;
  constructor(private router:Router, private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      role:new FormControl('',[Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  checkLogin(){
    this.userRole=this.form.value.role;
    (this.authenticationService.authenticate(this.form.value.username,this.form.value.password,this.form.value.role).subscribe(
      data => {
        if (this.userRole==='SUPERUSER'){
        this.router.navigate(['/superuser-functions'])
        this.invalidLogin = false
        }
        if (this.userRole==='ASSOCIATE'){
          this.router.navigate(['/associateuser-functions',this.form.value.username])
          //this.invalidLogin = false
        }
      },error => {
        this.invalidLogin = true
      }
    )
    );
  }

}
