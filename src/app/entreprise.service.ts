import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private _entrepriseUrl = "http://localhost:8000";
  constructor(private http: HttpClient) { }
  private headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) };
getEntreprise() {

  return this.http.get<any>(this._entrepriseUrl+"/api/list/entreprise",this.headers);
}

}
