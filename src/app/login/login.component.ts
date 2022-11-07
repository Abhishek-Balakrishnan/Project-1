import { animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  accno:any
  pass:any
  aim='your perfect banking partner'
  data='enter acc no'
  accountdetails:any={
    1000:{accno:1000,username:"amal",password:123,balance:0},
    1001:{accno:1001,username:"anu",password:123,balance:0},
    1002:{accno:1002,username:"arun",password:123,balance:0},
    1003:{accno:1003,username:"pappu",password:123,balance:0},
    1004:{accno:1004,username:"abi",password:123,balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    var accno1=this.accno
    var pass=this.pass
    var accountdetails=this.accountdetails

    if(accno1 in accountdetails){
      if(pass==accountdetails[accno1]['password']){
        alert('login success')
      }
      else{
        alert('incurect password')
      }
    }
    else{
      alert("user not exist")
    }
  }
  accnochange(event:any){
    this.accno=event.target.value
    // console.log(event.target.value);
    

  }
  passchange(event:any){
    this.pass=event.target.value
    // console.log(this.pass);
  }

}
