import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
// import { LoginPage } from '../login/login';
import { Toast } from '@ionic-native/toast';
import { DashboardPage } from '../dashboard/dashboard';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
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
   connected: Subscription;
   disconnected: Subscription;
  constructor( public navCtrl: NavController, 
    public navParams: NavParams, public alertCtrl: AlertController, private sqlite: SQLite, 
    private toast: Toast, private toasts: ToastController, private network: Network) {
    
  }
  alert(message: string,title : string){
  	this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  saveData() {  
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO users(id,name,email,password,logincount) VALUES(NULL,?,?,?,?)', [this.user['name'], this.user['email'], this.user['password'], 0])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.setRoot(DashboardPage);
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
    this.saveData();
  }

  displayNetworkUpdate(connectionState: string) {
    let networkType = this.network.type;
    this.toasts.create({
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
  }
  ionViewWillLeave() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

}
