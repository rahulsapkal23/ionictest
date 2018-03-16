import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
})
export class RegisterPage implements OnInit {
  user: FormGroup;
  constructor(public navCtrl: NavController) {
}
  ngOnInit() {

  this.user = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  email: new FormControl('', [Validators.required,Validators.email]),
  mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
  });
  
  }


onSubmit(): void {
 console.log("on click submit method");
 this.navCtrl.setRoot(HomePage);
}


}
 

 