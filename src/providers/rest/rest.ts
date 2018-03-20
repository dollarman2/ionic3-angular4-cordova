import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  userses: any;
items: any;
  totalcount = 0;
constructor(public http: Http, private sqlite: SQLite) {
     this.getData();
     this.items = [
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "IGBEDI Ward 11",
         NAME_OF_HEALTH_FACILITY: "Igbedi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "KAIAMA Ward 4",
         NAME_OF_HEALTH_FACILITY: "Kaiama Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "KAIAMA",
         NAME_OF_HEALTH_FACILITY: "Kaiama Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "ODI Ward 2",
         NAME_OF_HEALTH_FACILITY: "Odi Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "ODI Ward 3",
         NAME_OF_HEALTH_FACILITY: "Odi General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OKOLOBA Ward 10",
         NAME_OF_HEALTH_FACILITY: "Cottage Hospital Okoloba",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OKOLOBA",
         NAME_OF_HEALTH_FACILITY: "Okoloba Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OPOKUMA NORTH Ward 7",
         NAME_OF_HEALTH_FACILITY: "Alaere Alaibe Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OPOKUMA NORTH",
         NAME_OF_HEALTH_FACILITY: "Opokuma North Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OPOKUMA SOUTH Ward 8",
         NAME_OF_HEALTH_FACILITY: "Cottage Hospital Opokuma South",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OPOKUMA SOUTH",
         NAME_OF_HEALTH_FACILITY: "Opokuma South Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "OPOKUMA SOUTH",
         NAME_OF_HEALTH_FACILITY: "Ofonigbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "SABAGREIA Ward 9",
         NAME_OF_HEALTH_FACILITY: "Sabagreia Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "SAMPOU/KALAMA Ward 6",
         NAME_OF_HEALTH_FACILITY: "Sampou Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: " KOLOKUMA/OPOKUMA LGA",
         WARD: "SAMPOU/KALAMA",
         NAME_OF_HEALTH_FACILITY: "Kalama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "BASSAMBIRI Ward 2",
         NAME_OF_HEALTH_FACILITY: "Bassambiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "BASSAMBIRI",
         NAME_OF_HEALTH_FACILITY: "Bassambiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "BASSAMBIRI",
         NAME_OF_HEALTH_FACILITY: "Bassambiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA Ward 8",
         NAME_OF_HEALTH_FACILITY: "Agbakabiriyai Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA",
         NAME_OF_HEALTH_FACILITY: "Ewelesuo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA",
         NAME_OF_HEALTH_FACILITY: "Fantuo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA",
         NAME_OF_HEALTH_FACILITY: "Igbeta-Ewo-Ama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA",
         NAME_OF_HEALTH_FACILITY: "Sabatoru Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IGBETA-EWO-AMA",
         NAME_OF_HEALTH_FACILITY: "Nembe Creek Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IKENSI Ward 12",
         NAME_OF_HEALTH_FACILITY: "Atubo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IKENSI",
         NAME_OF_HEALTH_FACILITY: "Ikensi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "IKENSI",
         NAME_OF_HEALTH_FACILITY: "Obiata Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "MINI Ward 11",
         NAME_OF_HEALTH_FACILITY: "Agrisaba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "MINI",
         NAME_OF_HEALTH_FACILITY: "Iseleogono Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "MINI",
         NAME_OF_HEALTH_FACILITY: "Cottage Hospital Okoroba",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "MINI",
         NAME_OF_HEALTH_FACILITY: "Okoroba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OBIOKU Ward 7",
         NAME_OF_HEALTH_FACILITY: "Nyoukiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OBIOKU Ward 7",
         NAME_OF_HEALTH_FACILITY: "Obioku Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OGBOLOMABIRI Ward 2",
         NAME_OF_HEALTH_FACILITY: "Nembe Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OGBOLOMABIRI Ward 3",
         NAME_OF_HEALTH_FACILITY: "Nembe General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKIPIRI Ward 6",
         NAME_OF_HEALTH_FACILITY: "Okipiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKOROMA Ward 1",
         NAME_OF_HEALTH_FACILITY: "Akakumama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKOROMA Ward 1",
         NAME_OF_HEALTH_FACILITY: "Ologoama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKOROMA Ward 2",
         NAME_OF_HEALTH_FACILITY: "Ekperikiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKOROMA Ward 2",
         NAME_OF_HEALTH_FACILITY: "Oguama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OKOROMA Ward 2",
         NAME_OF_HEALTH_FACILITY: "Okokoama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OLUSAIRI Ward 13",
         NAME_OF_HEALTH_FACILITY: "Agaba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OLUSAIRI Ward 13",
         NAME_OF_HEALTH_FACILITY: "Isaiah-Ama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OLUSAIRI Ward 13",
         NAME_OF_HEALTH_FACILITY: "Oluasiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "NEMBE LGA",
         WARD: "OLUSAIRI Ward 13",
         NAME_OF_HEALTH_FACILITY: "Otumo-Ama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "ANYAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Anyama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "ANYAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Okiki Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "ANYAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Ologoghe Basic Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "EMEYAL 2 Ward",
         NAME_OF_HEALTH_FACILITY: "Emeyal Basic Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "IMIRINGI Ward",
         NAME_OF_HEALTH_FACILITY: "Christ The King Catholic Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "IMIRINGI Ward",
         NAME_OF_HEALTH_FACILITY: "Elebede Primary Health Centre ",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "IMIRINGI Ward",
         NAME_OF_HEALTH_FACILITY: "Landark Medical Centre",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "IMIRINGI Ward",
         NAME_OF_HEALTH_FACILITY: "Total Health Care",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "KOLO Ward",
         NAME_OF_HEALTH_FACILITY: "Amorekene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "KOLO Ward",
         NAME_OF_HEALTH_FACILITY: "Kolo General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "KOLO Ward",
         NAME_OF_HEALTH_FACILITY: "Kolo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OGBIA Town Ward",
         NAME_OF_HEALTH_FACILITY: "Ibelebiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OGBIA Town Ward",
         NAME_OF_HEALTH_FACILITY: "Idema Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OGBIA Town Ward",
         NAME_OF_HEALTH_FACILITY: "Idema Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OGBIA Town Ward",
         NAME_OF_HEALTH_FACILITY: "Ogbia Town Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OKODI Ward",
         NAME_OF_HEALTH_FACILITY: "Epebu Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OKODI Ward",
         NAME_OF_HEALTH_FACILITY: "Okodi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OLOGLI ward",
         NAME_OF_HEALTH_FACILITY: "Ayakoro Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OLOGLI ward",
         NAME_OF_HEALTH_FACILITY: "Ologi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OLOIBIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Oloibiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OPUME Ward",
         NAME_OF_HEALTH_FACILITY: "Akipela Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OPUME Ward",
         NAME_OF_HEALTH_FACILITY: "Opume Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTAKEME Ward",
         NAME_OF_HEALTH_FACILITY: "Demonstration Clinic Otuogidi",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTAKEME Ward",
         NAME_OF_HEALTH_FACILITY: "Otakeme Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTAKEME Ward",
         NAME_OF_HEALTH_FACILITY: "Otuabagi Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTAKEME Ward",
         NAME_OF_HEALTH_FACILITY: "Otuabagi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTAKEME Ward",
         NAME_OF_HEALTH_FACILITY: "Abobiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUABULA Ward",
         NAME_OF_HEALTH_FACILITY: "Otuabula Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUASEGA Ward",
         NAME_OF_HEALTH_FACILITY: "Oruma Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUASEGA Ward",
         NAME_OF_HEALTH_FACILITY: "Otuasega Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUASEGA Ward",
         NAME_OF_HEALTH_FACILITY: "Otuasega Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUOKE Ward",
         NAME_OF_HEALTH_FACILITY: "Otuabula 2 Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUOKE Ward",
         NAME_OF_HEALTH_FACILITY: "Otuoke Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUOKE Ward",
         NAME_OF_HEALTH_FACILITY: "Otuoke Federal Medical Centre",
         TYPE_OF_FACILITY: "Federal Medical Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUOKPOTI Ward",
         NAME_OF_HEALTH_FACILITY: "Onuebum Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "OGBIA LGA",
         WARD: "OTUOKPOTI Ward",
         NAME_OF_HEALTH_FACILITY: "Otuokpoti Basic Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ADAGBABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Adagbabiri Model Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "",
         NAME_OF_HEALTH_FACILITY: "Anibeze Community Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ADAGBABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Tungbo Basic Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGBERE Ward",
         NAME_OF_HEALTH_FACILITY: "Agbere Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGBERE Ward",
         NAME_OF_HEALTH_FACILITY: "Agbere Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGORO Ward",
         NAME_OF_HEALTH_FACILITY: "Agoro Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGORO Ward",
         NAME_OF_HEALTH_FACILITY: "Eriama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGORO Ward",
         NAME_OF_HEALTH_FACILITY: "Kabiama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGORO Ward",
         NAME_OF_HEALTH_FACILITY: "Ogoibiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "AGORO Ward",
         NAME_OF_HEALTH_FACILITY: "Okumbiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OFONI Ward",
         NAME_OF_HEALTH_FACILITY: "Ofoni Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OSEKWENIKE Ward",
         NAME_OF_HEALTH_FACILITY: "Osifo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OSEKWENIKE Ward",
         NAME_OF_HEALTH_FACILITY: "Osikwenike Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OSSIAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Egbepulou-Ama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OSSIAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Isoni Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "OSSIAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Ossiama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "SAGBAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Redeemers Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "SAGBAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Sagbama Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "SAGBAMA Ward",
         NAME_OF_HEALTH_FACILITY: "Sagbama General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "TORU-EBENI Ward",
         NAME_OF_HEALTH_FACILITY: "Akeddei Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "TORU-EBENI Ward",
         NAME_OF_HEALTH_FACILITY: "Anyama-Ibeni Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "TORU-EBENI Ward",
         NAME_OF_HEALTH_FACILITY: "Toru-Ebeni Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ANGALABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Angalabiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ANGALABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Bulou-Orua Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ANGALABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Turo-Orua Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ASAMABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Asamabiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ASAMABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Ekpeiware Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ASAMABIRI Ward",
         NAME_OF_HEALTH_FACILITY: "Elemebiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "EBEDEBIRIi Ward",
         NAME_OF_HEALTH_FACILITY: "Ebedebiri comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "EBEDEBIRIi Ward",
         NAME_OF_HEALTH_FACILITY: "Ebedebiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "EBEDEBIRIi Ward",
         NAME_OF_HEALTH_FACILITY: "Toru-Angiama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ODONI Ward",
         NAME_OF_HEALTH_FACILITY: "Aduku Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "ODONI Ward",
         NAME_OF_HEALTH_FACILITY: "Odoni Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SAGBAMA LGA",
         WARD: "TROFANI Ward",
         NAME_OF_HEALTH_FACILITY: "Trofani Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "AMASSOMA 2 Ward 10",
         NAME_OF_HEALTH_FACILITY: "Amassoma Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "AMASSOMA 2 Ward 10",
         NAME_OF_HEALTH_FACILITY: "Amatolo Primary Health",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "AMASSOMA 2 Ward 10",
         NAME_OF_HEALTH_FACILITY: "NDU Sick Bay",
         TYPE_OF_FACILITY: "Sick Bay"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "AMASSOMA Ward 11",
         NAME_OF_HEALTH_FACILITY: "Amassoma General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "APOI Ward 15",
         NAME_OF_HEALTH_FACILITY: "Azama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "APOI Ward 15",
         NAME_OF_HEALTH_FACILITY: "Gbanrain Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "APOI Ward 15",
         NAME_OF_HEALTH_FACILITY: "Ogboinbiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "APOI Ward 15",
         NAME_OF_HEALTH_FACILITY: "Ogboinbiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "APOI Ward 15",
         NAME_OF_HEALTH_FACILITY: "Kokologbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "EKOWE Ward 7",
         NAME_OF_HEALTH_FACILITY: "Ekowe Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "ENIWARI Ward 12",
         NAME_OF_HEALTH_FACILITY: "Eniware Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "FOROPA Ward 14",
         NAME_OF_HEALTH_FACILITY: "Ekeni Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "FOROPA Ward 14",
         NAME_OF_HEALTH_FACILITY: "Foropa Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "IGBUMOTORU Ward 6",
         NAME_OF_HEALTH_FACILITY: "Igbomotoru I Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "IGBUMOTORU Ward 6",
         NAME_OF_HEALTH_FACILITY: "Igbomotoru II Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "IGBUMOTORU Ward 6",
         NAME_OF_HEALTH_FACILITY: "Lasukugbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "KOLUAME Ward 17",
         NAME_OF_HEALTH_FACILITY: "Koluama I Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "KOLUAME Ward 17",
         NAME_OF_HEALTH_FACILITY: "Koluama II Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Ikebiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Korokorosei Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Korokorosei Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Okpotuwari Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Ondewari Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLODIAMA I Ward 3",
         NAME_OF_HEALTH_FACILITY: "Umbugbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLADIAMA II Ward 4",
         NAME_OF_HEALTH_FACILITY: "Ikienghenbiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLADIAMA II Ward 4",
         NAME_OF_HEALTH_FACILITY: "Olugbobiri Cottage Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLADIAMA II Ward 4",
         NAME_OF_HEALTH_FACILITY: "Olugboburo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OLADIAMA II Ward 4",
         NAME_OF_HEALTH_FACILITY: "Tebidaba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Aguobiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Angiama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Oporoma Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Ozezebiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA II Ward 2",
         NAME_OF_HEALTH_FACILITY: "Anyama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPOROMA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Oweikorogha Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPUAMA II Ward 2",
         NAME_OF_HEALTH_FACILITY: "Fierebagbere Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPUAMA Ward 13",
         NAME_OF_HEALTH_FACILITY: "Tugogbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPUAMA Ward 6",
         NAME_OF_HEALTH_FACILITY: "Ipirigbene primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPUAMA Ward 6",
         NAME_OF_HEALTH_FACILITY: "Okigbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OPUAMA Ward 6",
         NAME_OF_HEALTH_FACILITY: "Opuama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "OTUAN Ward 5",
         NAME_OF_HEALTH_FACILITY: "Otuan Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "PEREMABIRI Ward 8",
         NAME_OF_HEALTH_FACILITY: "Diebu Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "PEREMABIRI Ward 8",
         NAME_OF_HEALTH_FACILITY: "Peremabiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "PEREMABIRI Ward 8",
         NAME_OF_HEALTH_FACILITY: "Peremabiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Azuzuama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Lobia I Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Lobia II Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Lobia II Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Ukubie Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Ukubie General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "SOUTHERN IJAW LGA",
         WARD: "UKUBIE Ward 16",
         NAME_OF_HEALTH_FACILITY: "Ukubie Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI I Ward 12",
         NAME_OF_HEALTH_FACILITY: "Agge Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI I Ward 12",
         NAME_OF_HEALTH_FACILITY: "Aghoro Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI I Ward 12",
         NAME_OF_HEALTH_FACILITY: "Orobiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Azagbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Bilabiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Egbemoi-Angalabiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Egbemo-Angalabiri Model Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Letubgene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "IDUWINI II Ward 12",
         NAME_OF_HEALTH_FACILITY: "Ogbotobo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPPROMA I Ward 6",
         NAME_OF_HEALTH_FACILITY: "Amabolou Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPPROMA I Ward 6",
         NAME_OF_HEALTH_FACILITY: "Obrigbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPPROMA I Ward 6",
         NAME_OF_HEALTH_FACILITY: "Norgbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPROMOR II Ward 7",
         NAME_OF_HEALTH_FACILITY: "Beautiful Gate Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPROMOR II Ward 7",
         NAME_OF_HEALTH_FACILITY: "Foutorugbene Primary Health Centtre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPROMOR II Ward 7",
         NAME_OF_HEALTH_FACILITY: "Tamogbene Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPROMOR II Ward 7",
         NAME_OF_HEALTH_FACILITY: "Tamogben Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPOROMOR III Ward 8",
         NAME_OF_HEALTH_FACILITY: "Ekeremor Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPOROMOR III Ward 8",
         NAME_OF_HEALTH_FACILITY: "Ekeremor Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPOROMOR IV Ward 9",
         NAME_OF_HEALTH_FACILITY: "Peretorugbene Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPOROMOR IV Ward 9",
         NAME_OF_HEALTH_FACILITY: "Peretorugbene Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OPOMOR V Ward 10",
         NAME_OF_HEALTH_FACILITY: "Toru-Ndoro Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI I Ward 2",
         NAME_OF_HEALTH_FACILITY: "Aleibiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI I Ward 2",
         NAME_OF_HEALTH_FACILITY: "Aleibiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI I Ward 2",
         NAME_OF_HEALTH_FACILITY: "Tula Medical Centre",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI III Ward 2",
         NAME_OF_HEALTH_FACILITY: "Angala Oweiigbere Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI Ward 5",
         NAME_OF_HEALTH_FACILITY: "Agbidi-ama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI Ward 5",
         NAME_OF_HEALTH_FACILITY: "Lalagbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI Ward 5",
         NAME_OF_HEALTH_FACILITY: "Ogbogbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI Ward 5",
         NAME_OF_HEALTH_FACILITY: "Ogbosuware Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "OYIAKIRI Ward 5",
         NAME_OF_HEALTH_FACILITY: "Tietiegbene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "TARAKIRI Ward 1",
         NAME_OF_HEALTH_FACILITY: "Anyamasa Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "EKEREMOR LGA",
         WARD: "TARAKIRI Ward 1",
         NAME_OF_HEALTH_FACILITY: "Isampou Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BRASS Ward 1",
         NAME_OF_HEALTH_FACILITY: "Glorious Clinic Twon-Brass",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BRASS Ward 1",
         NAME_OF_HEALTH_FACILITY: "Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BRASS Ward 2",
         NAME_OF_HEALTH_FACILITY: "Dogas Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BRASS Ward 2",
         NAME_OF_HEALTH_FACILITY: "Twon-Brass General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BRASS Ward 2",
         NAME_OF_HEALTH_FACILITY: "Tim/Dan Maternity Imbikiri",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BY CAPE FEMOSA Ward 5",
         NAME_OF_HEALTH_FACILITY: "Egweama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "BY CAPE FEMOSA Ward 5",
         NAME_OF_HEALTH_FACILITY: "Navy sickbay",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "BRASS LGA",
         WARD: "KONGO Ward",
         NAME_OF_HEALTH_FACILITY: "",
         TYPE_OF_FACILITY: ""
       },
       {
         LGA: "BRASS LGA",
         WARD: "MINIBIE Ward 9",
         NAME_OF_HEALTH_FACILITY: "Bekekiri Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "MINIBIE Ward 9",
         NAME_OF_HEALTH_FACILITY: "Minbie Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "ODIOMA/DIEMA Ward 5",
         NAME_OF_HEALTH_FACILITY: "Diema Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "ODIOMA/DIEMA Ward 5",
         NAME_OF_HEALTH_FACILITY: "Ibidi Model Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "ODIOMA/DIEMA Ward 5",
         NAME_OF_HEALTH_FACILITY: "Odioma Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "OGINIBIRI Ward",
         NAME_OF_HEALTH_FACILITY: "",
         TYPE_OF_FACILITY: ""
       },
       {
         LGA: "BRASS LGA",
         WARD: "OKPOAMA Ward 4",
         NAME_OF_HEALTH_FACILITY: "Iseleama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "BRASS LGA",
         WARD: "OKPOAMA Ward 4",
         NAME_OF_HEALTH_FACILITY: "Okpoama Cottage hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "BRASS LGA",
         WARD: "SANGAMA Ward 10",
         NAME_OF_HEALTH_FACILITY: "Sangana Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "BRASS LGA",
         WARD: "SANGAMA Ward 10",
         NAME_OF_HEALTH_FACILITY: "Sangana Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Believer’s Faith Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Bosek Hospita",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Civil Servants Clinic",
         TYPE_OF_FACILITY: "Clinic"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Crystal Care Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "FSP Clinic",
         TYPE_OF_FACILITY: "Clinic"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Glory Land Hospital",
         TYPE_OF_FACILITY: " Ovom"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Government House Clinic",
         TYPE_OF_FACILITY: " Ovom"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Living Rock Specialist Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "St. John Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Onopa Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Swali Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Federal Medical Centre",
         TYPE_OF_FACILITY: " Yenagoa"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Yenagoa Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "House of Assemble",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA II/FAMBGE Ward 2",
         NAME_OF_HEALTH_FACILITY: "Famgbe Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA I Ward 1",
         NAME_OF_HEALTH_FACILITY: "Yenaka Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Agbara Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Akaba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Obogoro Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Ogu Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "BIISENI I Ward 12",
         NAME_OF_HEALTH_FACILITY: "Biseni Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Biseni Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ATISSA III Ward 3",
         NAME_OF_HEALTH_FACILITY: "Tein Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "BISENI II Ward 13",
         NAME_OF_HEALTH_FACILITY: "Egbebiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "BISENI II Ward 13",
         NAME_OF_HEALTH_FACILITY: "Ikolo Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "BISENI II Ward 13",
         NAME_OF_HEALTH_FACILITY: "Tuburu Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA I Ward 10",
         NAME_OF_HEALTH_FACILITY: "Agudama Ekpetiama General Hospital",
         TYPE_OF_FACILITY: "General Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA I Ward 10",
         NAME_OF_HEALTH_FACILITY: "Bomoundi Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA I Ward 10",
         NAME_OF_HEALTH_FACILITY: "Ikibiri Cottage Hospital",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Akaibiri Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Gbarantoru Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Tombia Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE I Ward 4",
         NAME_OF_HEALTH_FACILITY: "Agudama Epie Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Igbogene Tuberculosis & Leprosy",
         TYPE_OF_FACILITY: "TBL Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "King Malla Sasime Medical Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "New Survivors Hospital",
         TYPE_OF_FACILITY: " Igbogene"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Tobis’ Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Nigeria Air Force Medical Centre",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "Yenegwe Primary Health centre",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EKPETIAMA II Ward 11",
         NAME_OF_HEALTH_FACILITY: "",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Alfa Clinic Ede-Epie",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Asueifai (New Life) Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Diete Koki Memorial Hospital Opolo",
         TYPE_OF_FACILITY: "Cottage Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Ebipre Clinic & Maternity",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Everly Medical Centre",
         TYPE_OF_FACILITY: " Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Express Care Clinic Ltd",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Favour MC",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Gilead Medical Centre",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Glory Land Hospital INRI",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Grand Care Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Kuro Specialist Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Mieye Clinic Opolo",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Opolo-Epie Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Ripus Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "St. George Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Uchenna Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE II ward 5",
         NAME_OF_HEALTH_FACILITY: "Yenezue-Gene Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Amarata Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Ark Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Azikoro Comprehensive Health Centre",
         TYPE_OF_FACILITY: "Comprehensive Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Crest Consult Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Hoffman and Bright Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Kpansia Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Okaka Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Palen Clinic and maternity",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Solomon Throne Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "St. Peter’s Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "The Bay Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Trinidex Medical services",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Yenagoa Hospital & Maternity",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "EPIE III Ward 6",
         NAME_OF_HEALTH_FACILITY: "Kokobo Hospital",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN I Ward 7",
         NAME_OF_HEALTH_FACILITY: "Nedugo-Agbia Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN I Ward 7",
         NAME_OF_HEALTH_FACILITY: "Ogboloma Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN I Ward 7",
         NAME_OF_HEALTH_FACILITY: "Obunagha Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: "Divine Grace Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: "Ogboloma Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: " Niger Delta University Teaching Hospital (NDUTH) Okolobiri",
         TYPE_OF_FACILITY: "Teaching Hospital"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: "Okolobiri Primary Health Centre",
         TYPE_OF_FACILITY: ""
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: "Okotiama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN II Ward 8",
         NAME_OF_HEALTH_FACILITY: "",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN III Ward 9",
         NAME_OF_HEALTH_FACILITY: "Koroama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN III Ward 9",
         NAME_OF_HEALTH_FACILITY: "Mercy and Favour Clinic",
         TYPE_OF_FACILITY: "Private Facility"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "GBARAIN III Ward 9",
         NAME_OF_HEALTH_FACILITY: "Polaku Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "OKORDIA Ward 14",
         NAME_OF_HEALTH_FACILITY: "Kalaba Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "OKORDIA Ward 14",
         NAME_OF_HEALTH_FACILITY: "Okorodia Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       },
       {
         LGA: "YENAGOA LGA",
         WARD: "ZARAMA Ward 15",
         NAME_OF_HEALTH_FACILITY: "Zarama Primary Health Centre",
         TYPE_OF_FACILITY: "Primary Health Centre"
       }
     ]
  }

  filterItems(searchTerm) {

    return this.items.filter((item) => {
      return item.LGA.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.WARD.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.NAME_OF_HEALTH_FACILITY.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.TYPE_OF_FACILITY.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  filterData(searchTerm) {

    return this.userses.filter((user) => {
      return user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || user.phone.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM data_records', {})
        .then(res => {
          this.userses = [];
          for (var i = 0; i < res.rows.length; i++) {
            this.userses.push({
              rowid: res.rows.item(i).rowid,
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
            });
          }
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));

  }
  
  apiUrl = 'http://tracker-immun.herokuapp.com/api';
  getRecords() {
    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      this.http.get(this.apiUrl + '/tracker',headers).map(res => res.json()).subscribe(data => {
        resolve(data.records);
      }, err => {
        console.log(err);
      });
    });
  }
   
  getUsers() {
    return new Promise(resolve => {
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      this.http.get(this.apiUrl + '/users', headers).map(res => res.json()).subscribe(data => {
        resolve(data.users);
      }, err => {
        console.log(err);
      });
    });
  }
  
  addRecords(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      this.http.post(this.apiUrl + '/save_tracker',JSON.stringify(data), headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateRecords(data) {
    return new Promise((resolve, reject) => {
      console.log(data);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
      this.http.post(this.apiUrl + '/update_tracker', JSON.stringify(data), headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
}
