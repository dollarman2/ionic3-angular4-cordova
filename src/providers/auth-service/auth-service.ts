import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

export class User {
  name: string;
  email: string;  
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;
  logincount;
  constructor(private sqlite: SQLite) {
  }
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        this.sqlite.create({
          name: 'ionicdb.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          db.executeSql('SELECT * FROM users WHERE email=? AND password=?', [credentials.email, credentials.password])
            .then(res => {
              if (res.rows.length > 0) {
                this.logincount = res.rows.item(0).logincount + 1
                db.executeSql('UPDATE users SET logincount=?  WHERE email=? ', [this.logincount, res.rows.item(0).email])
                  .then(res => {
                  })
                  .catch(e => console.log(e));                
                let access = (credentials.password === res.rows.item(0).password && credentials.email === res.rows.item(0).email);
                this.currentUser = new User(res.rows.item(0).name, res.rows.item(0).email);
                observer.next(access);
                observer.complete();
              } 
            })
            .catch(e => console.log(e));
        }).catch(e => console.log(e));
        
      });
    }
  }

  // public register(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     // At this point store the credentials to your backend!
  //     return Observable.create(observer => {
  //       observer.next(true);
  //       observer.complete();
  //     });
  //   }
  // }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}