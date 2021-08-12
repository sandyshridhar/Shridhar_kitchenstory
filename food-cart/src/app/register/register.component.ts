import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router,public crud:CrudService) { }
  onBackClick() {
    this.router.navigate(['./login']);
  }

  ngOnInit(): void {
  }

  onLoginClick(registerRef:NgForm)
  {
    let login = registerRef.value;
    //console.log(login);
    // this.crud.createregisterAccount(login);

  }

}
