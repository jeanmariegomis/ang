import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  role : any;

  constructor(private _auth: AuthService) { }
    
  ngOnInit(): void{
    this.getRole();
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
  getRole(){
    this.role = localStorage.getItem('roles');
    console.log(this.role);
    return this.role;
  
  }

}
