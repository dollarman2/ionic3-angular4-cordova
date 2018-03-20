import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import 'rxjs/add/operator/debounceTime';
/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html',
})
export class FacilitiesPage {

  searchTerm: string = '';
  items: any;
  searchControl: FormControl;
  searching: any = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      this.setFilteredItems();

    });
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems() {

    this.items = this.restProvider.filterItems(this.searchTerm);

  }

}
