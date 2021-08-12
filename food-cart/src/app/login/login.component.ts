import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import login from "../login.json"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public login:{id:number,username:string,password:string}[]=login;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
   username: any;
   password: any;
  public onLoginClick(data:any) {
    // this.router.navigate(['./index']);
    
    // console.log("Email: " + data.username
    // +"Password: " + data.password);

    for(let i=0 ; i< this.login.length; i++)
    {
        if (this.login[i].username === data.username && this.login[i].password === data.password)
        {
          //console.log(this.login[i].username+" => :"+data.username)
          this.router.navigate(['./adminindex']);
          break;
        }
        else{
          //console.log(this.login[i].username+" => :"+data.username)
          this.router.navigate(['./loginfails']);
          break;
        
        }
    }

}
        

  // public onRegisterClick() {
  //   this.router.navigate(['./register']);
  // }

}
