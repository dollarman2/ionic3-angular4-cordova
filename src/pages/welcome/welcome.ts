import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Network } from '@ionic-native/network';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Subscription } from 'rxjs/Subscription';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { AddDataPage } from '../add-data/add-data';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  users = [];
  @ViewChild('username') uname;
  @ViewChild('password') pword;
  connected: Subscription;
  disconnected: Subscription;

  constructor(private toast: ToastController, private fire: AngularFireAuth, 
  public navCtrl: NavController, public navParams: NavParams, 
  public alertCtrl: AlertController, private sqlite: SQLite, private network: Network) {
    
  }

  alert(message: string, title: string) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  // watch network for a disconnect

  signInUser() {
    if(this.connected){
      this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pword.value)
        .then(data => {
          this.alert(data.message, 'Login Successful!');
          console.log('got data', data);
          this.navCtrl.setRoot(HomePage);
        }).catch(error => {
          console.log('got data', error);
          this.alert(error.message, 'Error!');
        });
    }else{
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM users WHERE email=? AND password=?', [this.uname.value, this.pword.value])
          .then(res => {
            this.users = [];
            for (var i = 0; i < res.rows.length; i++) {
              this.users.push({ id: res.rows.item(i).id, name: res.rows.item(i).name, email: res.rows.item(i).email, logincount: res.rows.item(i).logincount })
            }            
            this.navCtrl.setRoot(HomePage);
          })
          .catch(e => console.log(e));
      }).catch(e => console.log(e));
    }
    //this.getData();
    
  }
  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT, logincount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
      db.executeSql('CREATE TABLE IF NOT EXISTS records(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
      
    }).catch(e => console.log(e));
  }
  Register() {
    this.navCtrl.push(RegisterPage);
  }
  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();
  }
  ionViewDidLoad() {
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
    this.getData();
  }

  ionViewWillEnter() {
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
    this.getData();
  }
  ionViewWillLeave() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

}
