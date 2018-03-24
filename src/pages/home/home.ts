import { Component } from '@angular/core';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { FormControl } from '@angular/forms';
import { EditDataPage } from '../edit-data/edit-data';
import { RestProvider } from '../../providers/rest/rest';
import { Toast } from '@ionic-native/toast';
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:'';
  id;
  users: any;
  user: any;
  totalcount = 0;
  datas = [];
  d_data: string[] = [];
  searchTerm: string = '';
  status;
  userses: any;
  searchControl: FormControl;
  searching: any = false;
  connected: Subscription;
  disconnected: Subscription;
  constructor(private toast: ToastController, public navCtrl: NavController, private toasts: Toast,
    private sqlite: SQLite, public restProvider: RestProvider, private network: Network,
    public alertCtrl: AlertController) {
    this.searchControl = new FormControl();
    }

  alert(message: string, title: string) {
    this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    }).present();
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
    this.SyncData();
    this.UpdateData();    
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredItems();
    });
    this.connected = this.network.onConnect().subscribe(data => {
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetworkUpdate(data.type);
    }, error => console.error(error));
  }  

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {
    this.userses = this.restProvider.filterData(this.searchTerm);
  }

  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT COUNT(*) AS totalcount FROM data_records ', {})
      .then(res => {
        if(res.rows.length>0) {
          this.totalcount = parseInt(res.rows.item(0).totalcount);
        }
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));

  }

  deleteMsg(msg: any) {
    const index: number = this.d_data.indexOf(msg);
    if (index !== -1) {
      this.d_data.splice(index, 1);
    }
  }

  SyncData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM data_records WHERE status=?', [0])
        .then(res => {
          for (var i = 0; i < res.rows.length; i++) {
            let data_id = res.rows.item(i).rowid;
            this.users = {
              id: res.rows.item(i).rowid,
              user_id: res.rows.item(i).user_id,
              name: res.rows.item(i).name,
              age: res.rows.item(i).age,
              address: res.rows.item(i).address,
              landmark: res.rows.item(i).landmark,
              phone: res.rows.item(i).phone,
              m_status: res.rows.item(i).m_status,
              husband_name: res.rows.item(i).husband_name,
              husband_phone: res.rows.item(i).husband_phone,
              religion: res.rows.item(i).religion,
              religion_denomination: res.rows.item(i).religion_denomination,
              menstral_period: res.rows.item(i).menstral_period,
              first_pregnancy: res.rows.item(i).first_pregnancy,
              last_child_age: res.rows.item(i).last_child_age,
              antenatal_during_last_pregnancy: res.rows.item(i).antenatal_during_last_pregnancy,
              last_child_dlvry_location: res.rows.item(i).last_child_dlvry_location,
              antenatal_reg_for_pregnancy: res.rows.item(i).antenatal_reg_for_pregnancy,
              antenatal_reg_facility: res.rows.item(i).antenatal_reg_facility,
              antenatal_reg_next_schedule: res.rows.item(i).antenatal_reg_next_schedule,
              antenatal_reg_why: res.rows.item(i).antenatal_reg_why,
              fam_form_before: res.rows.item(i).fam_form_before,
              baby_birthday: res.rows.item(i).baby_birthday,
              baby_delivery_loctn: res.rows.item(i).baby_delivery_loctn,
              baby_post_natal_checkup: res.rows.item(i).baby_post_natal_checkup,
              baby_birth_reg: res.rows.item(i).baby_birth_reg,
              baby_birth_cert: res.rows.item(i).baby_birth_cert,
              baby_immunization_since_birth: res.rows.item(i).baby_immunization_since_birth,
              baby_birth_reg_day: res.rows.item(i).baby_birth_reg_day,
              baby_immunization_card_avail: res.rows.item(i).baby_immunization_card_avail,
              baby_next_immun_schedule_date: res.rows.item(i).baby_next_immun_schedule_date,
              baby_vitamin_a_sup: res.rows.item(i).baby_vitamin_a_sup,
            }                 
            this.restProvider.addRecords(this.users).then((result) => { 
              this.deleteData(data_id);               
            }, (err) => {
              console.log(err);
            });
            if (data_id != 0) {
              this.toast.create({
                message: `Data upload completed please wait while other records are retrieved.`,
                duration: 1000
              }).present();
            }
          }
          
          
        })
        .catch(e => console.log(e));
        this.restProvider.getRecords().then((result: any) => {                   
          for (var i = 0; i < result.length; i++) {
            //let id = result[i].id;
            this.user = {
              id: result[i].id,
              user_id: result[i].user_id,
              name: result[i].name,
              age: result[i].age,
              address: result[i].address,
              landmark: result[i].landmark,
              phone: result[i].phone,
              m_status: result[i].m_status,
              husband_name: result[i].husband_name,
              husband_phone: result[i].husband_phone,
              religion: result[i].religion,
              religion_denomination: result[i].religion_denomination,
              menstral_period: result[i].menstral_period,
              first_pregnancy: result[i].first_pregnancy,
              last_child_age: result[i].last_child_age,
              antenatal_during_last_pregnancy: result[i].antenatal_during_last_pregnancy,
              last_child_dlvry_location: result[i].last_child_dlvry_location,
              antenatal_reg_for_pregnancy: result[i].antenatal_reg_for_pregnant,
              antenatal_reg_facility: result[i].antenatal_reg_facility,
              antenatal_reg_next_schedule: result[i].antenatal_reg_next_schedule,
              antenatal_reg_why: result[i].antenatal_reg_why,
              fam_form_before: result[i].fam_form_before,
              baby_birthday: result[i].baby_birthday,
              baby_delivery_loctn: result[i].baby_delivery_loctn,
              baby_post_natal_checkup: result[i].baby_post_natal_checkup,
              baby_birth_reg: result[i].baby_birth_reg,
              baby_birth_cert: result[i].baby_birth_cert,
              baby_immunization_since_birth: result[i].baby_immunization_since_birth,
              baby_birth_reg_day: result[i].baby_birth_reg_day,
              baby_immunization_card_avail: result[i].baby_immunization_card_avail,
              baby_next_immun_schedule_date: result[i].baby_next_immun_schedule_date,
              baby_vitamin_a_sup: result[i].baby_vitamin_a_sup,
            }; 
            db.executeSql('INSERT INTO data_records VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [this.user.id, this.user.user_id, this.user.name, this.user.age, this.user.address, this.user.landmark, this.user.phone, this.user.m_status, this.user.husband_name, this.user.husband_phone, this.user.religion, this.user.religion_denomination, this.user.menstral_period, this.user.first_pregnancy, this.user.last_child_age, this.user.antenatal_during_last_pregnancy, this.user.last_child_dlvry_location, this.user.antenatal_reg_for_pregnancy, this.user.antenatal_reg_facility, this.user.antenatal_reg_next_schedule, this.user.antenatal_reg_why, this.user.fam_form_before, this.user.baby_birthday, this.user.baby_delivery_loctn, this.user.baby_post_natal_checkup, this.user.baby_birth_reg, this.user.baby_birth_cert, this.user.baby_immunization_since_birth, this.user.baby_birth_reg_day, this.user.baby_immunization_card_avail, this.user.baby_next_immun_schedule_date, this.user.baby_vitamin_a_sup, 1])
            .then(res => {
              this.toasts.show('Data saved', '5000', 'center').subscribe(
                toast => {
                }
              );
            }).catch(e => {
              //console.log(e);
            });    
          } 
          this.setFilteredItems();               
        }, (err) => {
          console.log(err);
        });
    }).catch(e => console.log(e));
    
  }

  UpdateData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM data_records WHERE status=?', [2])
        .then(res => {
          if( res.rows.length > 0){
            for (var i = 0; i < res.rows.length; i++) {
              let update_id = res.rows.item(i).rowid;
              this.users = {
                id: res.rows.item(i).rowid,
                name: res.rows.item(i).name,
                age: res.rows.item(i).age,
                address: res.rows.item(i).address,
                landmark: res.rows.item(i).landmark,
                phone: res.rows.item(i).phone,
                m_status: res.rows.item(i).m_status,
                husband_name: res.rows.item(i).husband_name,
                husband_phone: res.rows.item(i).husband_phone,
                religion: res.rows.item(i).religion,
                religion_denomination: res.rows.item(i).religion_denomination,
                menstral_period: res.rows.item(i).menstral_period,
                first_pregnancy: res.rows.item(i).first_pregnancy,
                last_child_age: res.rows.item(i).last_child_age,
                antenatal_during_last_pregnancy: res.rows.item(i).antenatal_during_last_pregnancy,
                last_child_dlvry_location: res.rows.item(i).last_child_dlvry_location,
                antenatal_reg_for_pregnancy: res.rows.item(i).antenatal_reg_for_pregnancy,
                antenatal_reg_facility: res.rows.item(i).antenatal_reg_facility,
                antenatal_reg_next_schedule: res.rows.item(i).antenatal_reg_next_schedule,
                antenatal_reg_why: res.rows.item(i).antenatal_reg_why,
                fam_form_before: res.rows.item(i).fam_form_before,
                baby_birthday: res.rows.item(i).baby_birthday,
                baby_delivery_loctn: res.rows.item(i).baby_delivery_loctn,
                baby_post_natal_checkup: res.rows.item(i).baby_post_natal_checkup,
                baby_birth_reg: res.rows.item(i).baby_birth_reg,
                baby_birth_cert: res.rows.item(i).baby_birth_cert,
                baby_immunization_since_birth: res.rows.item(i).baby_immunization_since_birth,
                baby_birth_reg_day: res.rows.item(i).baby_birth_reg_day,
                baby_immunization_card_avail: res.rows.item(i).baby_immunization_card_avail,
                baby_next_immun_schedule_date: res.rows.item(i).baby_next_immun_schedule_date,
                baby_vitamin_a_sup: res.rows.item(i).baby_vitamin_a_sup,
              }
              this.restProvider.updateRecords(this.users).then((result) => {
                this.toasts.show("data saved", '5000', 'center').subscribe(
                  toast => {
                  }
                );
                db.executeSql('UPDATE data_records SET status=?  WHERE rowid=? ', [1, update_id])
                  .then(res => {
                    console.log("Saved")
                  })
              }, (err) => {
                console.log(err);
              });              
            }
          }
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
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
      db.executeSql('DELETE FROM data_records WHERE rowid=?', [rowid])
      .then(res => {
        console.log(res);
        this.restProvider.getData();
      })
      .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }
}
