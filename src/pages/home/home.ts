import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  userses: any [];
  totalcount = 0;
  totalExpense = 0;

  constructor(public navCtrl: NavController,
    private sqlite: SQLite, public restProvider: RestProvider) {

    }

  ionViewDidLoad() {
    this.getData();
    this.getUsers();
  }

  ionViewWillEnter() {
    this.getData();
  }
  getUsers() {
    this.restProvider.getUsers()
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }
  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
      .then(res => {
        this.userses = [];
        for(var i=0; i<res.rows.length; i++) {
          this.userses.push({ id: res.rows.item(i).id, name: res.rows.item(i).name, email: res.rows.item(i).email, logincount: res.rows.item(i).logincount})
        }
      })
      .catch(e => console.log(e));
      db.executeSql('SELECT COUNT(*) AS totalcount FROM users WHERE logincount=0', {})
      .then(res => {
        if(res.rows.length>0) {
          this.totalcount = parseInt(res.rows.item(0).totalcount);
        }
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  editData(rowid) {
    this.navCtrl.push(EditDataPage, {
      rowid:rowid
    });
  }

  deleteData(rowid) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM users WHERE id=?', [rowid])
      .then(res => {
        console.log(res);
        this.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

}
