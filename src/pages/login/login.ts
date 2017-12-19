import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    auth_token: any;
    email: any;
    password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http: HttpClient) {
    this.email = "sandeshsatyal@gmail.com";
    this.password = "sandy@123";
    this.auth_token = null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  authenticate(){
      this.http.post('http://app.milifebery.co/api/authenticate',{email: this.email, password: this.password})
      .subscribe(data => {
        console.log(data);
        this.auth_token = data;
      },err => {
        this.showAlert('Login Error !!!', 'Invalid Credentials');
      });
  }
  
  showAlert(title, subtitle){
    let alert = this.alertCtrl.create({
        title: title,
        subTitle: subtitle,
        buttons: ['OK']
    });
    alert.present();
  }

}
