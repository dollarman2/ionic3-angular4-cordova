import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';

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
  username = '';
  email = '';
  user = {oldpassword:'',newpassword:''}
  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthService, private sqlite: SQLite) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email']; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Update(){
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM users WHERE email=? AND password=?', [this.email,this.user.oldpassword])
        .then(res => {
          if (res.rows.length > 0) {
            db.executeSql('UPDATE users SET password=?  WHERE email=? ', [this.user.newpassword, this.email])
              .then(res => {
                this.toast.create({
                  message: this.username +` Your password reset was successful!`,
                  duration: 5000
                }).present();
                this.navCtrl.setRoot(DashboardPage);
              })
              .catch(e =>{
                console.log(e)
              });
          }
        })
        .catch(e =>{
          console.log(e)
          this.toast.create({
            message: this.username + ` Your password reset failed. Try Again!`,
            duration: 5000
          }).present();
        });
    }).catch(e => console.log(e));
  }

}
