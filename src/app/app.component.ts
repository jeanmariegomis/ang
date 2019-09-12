import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  constructor(private _auth: AuthService) { }
    
  ngOnInit(): void{
  }

  isSuperAdmin(){
    return this._auth.isSuperAdmin();
  }

  isAdminPrincipal(){
    return this._auth.isAdminPrincipal();
  }

  isAdmin(){
    return this._auth.isAdmin();
  }
  isAuthenticated(){
    return this._auth.isAuthenticated();
  }


  logOut(){
    this._auth.logOut();
  }

}
