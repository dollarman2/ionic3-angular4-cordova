import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDataPage } from '../add-data/add-data';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';
import { FacilitiesPage } from '../facilities/facilities';
import { AuthService } from '../../providers/auth-service/auth-service';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  msg: string = '';
  username = '';
  email = '';
  constructor(public navCtrl: NavController, private auth: AuthService,
  public navParams: NavParams, public restProvider: RestProvider) {
    this.restProvider.getData();
    this.restProvider.filterData(this.msg); 
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];   
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(WelcomePage)
    });
  }
  ionViewDidLoad() {
    this.restProvider.getData();
    console.log('ionViewDidLoad DashboardPage');
  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  Change() { //this login page serve as change password page
    this.navCtrl.push(LoginPage);
  }


  viewData() {
    this.navCtrl.push(HomePage);
  }

  facilitiesData() {
    this.navCtrl.push(FacilitiesPage);
  }
  ionViewWillLeave() {
    this.restProvider.getData();
  }

}
