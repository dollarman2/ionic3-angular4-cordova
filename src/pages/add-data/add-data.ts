import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { RestProvider } from '../../providers/rest/rest';
@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  data = { name: '', username: '', email: '', phone: '', website: '', address: { street: '', suite: '', city: '', zipcode: '', geo: { lat: '', lng: '' } }, company: { name: '', bs: '', catchPhrase: '' } };
  connected: Subscription;
  disconnected: Subscription;
  user = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite, public restProvider: RestProvider,
    private toast: Toast, private toasts: ToastController, private network: Network) {
    }

  saveUser() {
    if(this.connected ){
      this.restProvider.addUser(this.data).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO records VALUES(NULL,?,?,?,?)', [this.data['date'], this.data['type'], this.data['description'], this.data['amount']])
          .then(res => {
            console.log(res);
            this.toast.show('Data saved', '5000', 'center').subscribe(
              toast => {
                //this.navCtrl.popToRoot();
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
    }else {
      this.sqlite.create({
        name: 'ionicdb.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO records VALUES(NULL,?,?,?,?)', [this.data['date'], this.data['type'], this.data['description'], this.data['amount']])
          .then(res => {
            console.log(res);
            this.toast.show('Data saved', '5000', 'center').subscribe(
              toast => {
                //this.navCtrl.popToRoot();
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
