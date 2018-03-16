import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;
  //  public storage: Storage;
  constructor(
    // private storage: IonicStorageModule,
    public storage: Storage,
    public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      // { title: 'Login', component: LoginPage },
      // { title: 'Register', component: RegisterPage },
      { title: 'Logout', component: LoginPage }
      
      
      
    ];

        // If already login then push to Dashboard or Login Page
        this.storage.set('LoginFlag', true);
         this.storage.get('LoginFlag').then((val) => {
          console.log('Your LoginFlag is', val);
          // if (val == true) {
          //   this.rootPage = HomePage
          // } else {
          //   this.rootPage = LoginPage
          // }
        });
        // this.webServices.getStorageItem("loginData").then(
        //   (data)=>{
        //     console.log(data)
        //     if(data==null) {
        //       this.rootPage = LoginPage
        //     }
        //     else {
        //       this.webServices.getStorageItem('hasSeenLaunch').then(
        //         (data)=>{
        //           console.log('hasSeenLaunch',data)
        //           if(data==null) {
        //             this.rootPage = HomeLaunchPage
        //           }
        //           else {
        //             this.rootPage = MyDashboardPage
        //           }
        //         }
        //       ).catch()
    
        //     }
        //   }
        // ).catch(
        //   (err)=>{
        //     console.log(err)
        //   }
        // )

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    console.log("onclick of menu toggal")
  }
}
