import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  
})
export class RegisterPage implements OnInit {
  user: FormGroup;
  constructor(public navCtrl: NavController,private datePicker: DatePicker) {
    
    
}
  ngOnInit() {

  this.user = new FormGroup({
  fname: new FormControl('', [Validators.required, Validators.minLength(4)]),
  lname: new FormControl('', [Validators.required, Validators.minLength(4)]),
  name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  email: new FormControl('', [Validators.required,Validators.email]),
  mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
  });
  
  }


onSubmit(): void {
 console.log("on click submit method");
//  this.navCtrl.setRoot(HomePage);
 
 this.datePicker.show({
  date: new Date(),
  mode: 'date',
  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
}).then(
  date => console.log('Got date: ', date),
  err => console.log('Error occurred while getting date: ', err)
);
}


}
 

 