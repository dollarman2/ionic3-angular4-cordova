import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Network } from '@ionic-native/network';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Subscription } from 'rxjs/Subscription';
import { DashboardPage } from '../dashboard/dashboard';
import { RegisterPage } from '../register/register';
import { RestProvider } from '../../providers/rest/rest'; 
import { AuthService } from '../../providers/auth-service/auth-service';
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
  datas = [];
  user;
  items: Array<any> = [];
  d_data: string[] = [];
  loading: Loading;
  registerCredentials = { name:'', email: '', password: '' };
  connected: Subscription;
  disconnected: Subscription;
  createSuccess = false;
  constructor(private toast: ToastController, public restProvider: RestProvider,
    public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthService, private loadingCtrl: LoadingController,
  public alertCtrl: AlertController, private sqlite: SQLite, private network: Network) {
    this.getData();
    this.addUser();
  }

  alert(message: string, title: string) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  deleteMsg(msg: any) {
    const index: number = this.d_data.indexOf(msg);
    if (index !== -1) {
      this.d_data.splice(index, 1);
    }
  }

  addUser(){
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
          this.restProvider.getUsers().then((result: any) => {
            for (var i = 0; i < result.length; i++) {              
              let id = result[i].id;
              let name = result[i].name;
              let email = result[i].email;
              db.executeSql('SELECT * FROM users WHERE rowid=?', [id])
                .then(res => {
                  if (res.rows.length > 0) {
                  }else {
                    db.executeSql('INSERT INTO users(rowid,name,email,password,logincount) VALUES(?,?,?,?,?)', [id, name, email, '123456', 0])
                      .then(res => {                        
                        console.log(res);
                    }).catch(e => {
                        //this.showPopup("Error", e);
                        console.log(e);
                    });
                  }
                });
            }
          }, (err) => {
            console.log(err);
          });
        })
        .catch(e => console.log(e));
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
        }
      ]
    });
    alert.present();
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  signInUser() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.toast.create({
          message: ` Your login was successful!`,
          duration: 5000
        }).present();
        this.navCtrl.setRoot(DashboardPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });    
  }


  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR, email VARCHAR, password VARCHAR, logincount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
      db.executeSql('CREATE TABLE IF NOT EXISTS data_records(rowid INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT DEFAULT NULL, age TEXT DEFAULT NULL, address TEXT DEFAULT NULL, landmark TEXT DEFAULT NULL,phone TEXT DEFAULT NULL, m_status TEXT DEFAULT NULL,husband_name TEXT DEFAULT NULL,husband_phone TEXT DEFAULT NULL,religion TEXT DEFAULT NULL,religion_denomination TEXT DEFAULT NULL,menstral_period TEXT DEFAULT NULL,first_pregnancy TEXT DEFAULT NULL,last_child_age TEXT DEFAULT NULL,antenatal_during_last_pregnancy TEXT DEFAULT NULL,last_child_dlvry_location TEXT DEFAULT NULL,antenatal_reg_for_pregnancy TEXT DEFAULT NULL,antenatal_reg_facility TEXT DEFAULT NULL,antenatal_reg_next_schedule TEXT DEFAULT NULL,antenatal_reg_why TEXT DEFAULT NULL,fam_form_before TEXT DEFAULT NULL, baby_birthday TEXT DEFAULT NULL,baby_delivery_loctn TEXT DEFAULT NULL,baby_post_natal_checkup TEXT DEFAULT NULL,baby_birth_reg TEXT DEFAULT NULL,baby_birth_cert TEXT DEFAULT NULL,baby_immunization_since_birth TEXT DEFAULT NULL,baby_birth_reg_day TEXT DEFAULT NULL,baby_immunization_card_avail TEXT DEFAULT NULL,baby_next_immun_schedule_date TEXT DEFAULT NULL,baby_vitamin_a_sup TEXT DEFAULT NULL,status INTEGER DEFAULT 0)', {})
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
    this.getData();
    this.addUser();
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
