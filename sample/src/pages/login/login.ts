import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HomePage } from '../home/home';
// import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
@Component({selector: 'page-login', templateUrl: 'login.html'})
export class LoginPage implements OnInit {

    user: FormGroup;
    constructor(
      public storage: Storage,
      public navCtrl : NavController) {}
    ngOnInit() {

        this.user = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.minLength(4)]),
            password: new FormControl('', [Validators.required, Validators.minLength(7)])
        });

    }
   

    onSubmit(): void {
        console.log("on click submit method");
        this.storage.set('LoginFlag', true);

        // Or to get a key/value pair
       
        this.navCtrl.setRoot(HomePage);
        // this.navCtrl.push(HomePage);

    }

    register() {
      this.navCtrl.push(RegisterPage);
    }

}
