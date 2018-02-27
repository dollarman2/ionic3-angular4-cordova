import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { Toast } from '@ionic-native/toast';
import { HomePage } from '../home/home';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
   users = [];
   user = {};
  // @ViewChild('username') uname;
  // @ViewChild('email') email;
 	// @ViewChild('password') pword;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, 
    public navParams: NavParams, public alertCtrl: AlertController, private sqlite: SQLite, private toast: Toast) {
    
  }
  alert(message: string,title : string){
  	this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  saveData() {85  
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO users(id,name,email,password,logincount) VALUES(NULL,?,?,?,?)', [this.user['name'], this.user['email'], this.user['password'], 0])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.setRoot(HomePage);
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
  RegisterUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user['email'], this.user['password'])
  		.then(data =>{
        this.saveData();
  			console.log('got data',data);
  			this.alert(data.message,'Registration Successful!');
  			this.navCtrl.push(LoginPage);
  		}).catch(error =>{
  			console.log('got data',error);
  			this.alert(error.message,'Error!');
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
