import { UtilisateurService } from './../../utilisateur.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


export interface Utilisateur {
  id: number;
  username: string;
  Roles: string;
  updated_at: Date;
  Nom: string;
  Email: string;
  Telephone: number;
  Nci: number;  
  Status: string;
  }


@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'Nom', 'Email', 'Telephone', 'Nci', 'Status'];
  dataSource: MatTableDataSource<Utilisateur>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  utilisateur = []
  constructor(private _utilisateurService: UtilisateurService, private _bloservice: UtilisateurService ) { }

  ngOnInit() {
    this. _utilisateurService.getUtilisateur()
    .subscribe(
      res => {
        this.utilisateur = res
        this.dataSource = new MatTableDataSource(this.utilisateur);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
        err => console.log(err),
    )
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
    }
    }
    bloquerUser(id){

      this._bloservice.monitor(id).subscribe(
  
        res=>{
          console.log(res)
          this.ngOnInit();
        }, 
        err=>console.log(err)
      );
     }

}
