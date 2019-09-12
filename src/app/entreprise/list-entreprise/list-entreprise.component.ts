import { EntrepriseService } from './../../entreprise.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Entreprise {
id: number;
RaisonSociale: string;
Ninea: string;
Adresse: string;
Status: string;
}

@Component({
selector: 'app-list-entreprise',
templateUrl: './list-entreprise.component.html',
styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {

displayedColumns: string[] = ['id', 'RaisonSociale', 'Ninea', 'Adresse', 'Status'];
dataSource: MatTableDataSource<Entreprise>;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
entreprise = []
constructor(private _entrepriseService: EntrepriseService) { }

ngOnInit() {
this. _entrepriseService.getEntreprise()
.subscribe(
res => {
this.entreprise = res
this.dataSource = new MatTableDataSource(this.entreprise);
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
}